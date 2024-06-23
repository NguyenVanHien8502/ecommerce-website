import DataTable, {TableStyles} from "react-data-table-component";
import styles from "./brand.module.css";
import {useEffect, useState} from "react";
import axios from "axios";
import {Button} from "react-bootstrap";
import {getToken} from "@/app/helper/stogare";
import moment from "moment";
import {useRouter} from "next/navigation";

export default function BrandTable() {
  const router = useRouter();
  const token = getToken();
  const [brands, setBrands] = useState<IBrand[]>([]);
  const [keySearch, setKeySearch] = useState<string>("");
  const [itemsPerPage, setItemsPerPage] = useState<number>(10);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalBrands, setTotalBrands] = useState<number>(0);
  const [selectedRows, setSelectedRows] = useState<string[]>([]);
  const [deleted, setDeleted] = useState<boolean>(false);

  useEffect(() => {
    const getBrands = async () => {
      const {data} = await axios.post(
        `${process.env.BASE_HOST}/brand/get-all-brands?s=${keySearch}&limit=${itemsPerPage}&page=${currentPage}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setBrands(data.brands);
      setTotalBrands(data.totalBrands);
    };
    getBrands();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [keySearch, itemsPerPage, currentPage, deleted]);

  const handlePerRowsChange = async (perPage: number, page: number) => {
    setItemsPerPage(perPage);
  };

  const handleChangePage = (page: number, totalRows: number): void => {
    setCurrentPage(page);
  };

  const handleDeleteMany = async () => {
    try {
      const {data} = await axios.post(
        `${process.env.BASE_HOST}/brand/delete-many-brands`,
        {
          brandIds: selectedRows,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (data.status === true) {
        setDeleted(!deleted);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleDeleteOneBrand = async (_id: string) => {
    try {
      const {data} = await axios.post(
        `${process.env.BASE_HOST}/brand/delete-a-brand`,
        {
          _id: _id,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (data.status === true) {
        setDeleted(!deleted);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const columns = [
    {
      name: "Tên",
      selector: (row: IBrand) => row.name,
    },
    {
      name: "Created At",
      selector: (row: IBrand) => {
        const dateTimeString = row.createdAt.toString();
        const dateTime = moment(dateTimeString);

        const formattedDate = dateTime.format("DD/MM/YYYY");
        const formattedTime = dateTime.format("HH:mm:ss");
        return `${formattedTime} ${formattedDate}`;
      },
    },
    {
      name: "Updated At",
      selector: (row: IBrand) => {
        const dateTimeString = row.updatedAt.toString();
        const dateTime = moment(dateTimeString);

        const formattedDate = dateTime.format("DD/MM/YYYY");
        const formattedTime = dateTime.format("HH:mm:ss");
        return `${formattedTime} ${formattedDate}`;
      },
    },
    {
      name: "Actions",
      cell: (row: IBrand): JSX.Element => (
        <div className="d-flex">
          <Button
            className={`${styles.button} ${styles.buttonDeleteMany}`}
            onClick={() => handleDeleteOneBrand(row._id)}
          >
            Xóa
          </Button>
        </div>
      ),
    },
  ];
  const tableCustomStyles: TableStyles | undefined = {
    headCells: {
      style: {
        fontSize: "16px",
        textTransform: "capitalize",
        fontWeight: "bold",
        justifyContent: "start",
        backgroundColor: "#00FFFF",
      },
    },
    rows: {
      style: {
        fontSize: "14px",
        "&:hover": {
          cursor: "pointer",
          backgroundColor: "#EAEEFF",
        },
      },
    },
  };

  return (
    <div className={styles.table_container}>
      <div className={styles.head}>
        <Button
          className={`${styles.button} ${styles.buttonAdd}`}
          onClick={() => router.replace("/admin/brand/addNew")}
        >
          Thêm thương hiệu
        </Button>
      </div>
      <div className={styles.table_top}>
        <Button
          className={`${styles.button} ${styles.buttonDeleteMany}`}
          onClick={() => handleDeleteMany()}
        >
          Xóa nhiều
        </Button>
        <div className={styles.input_container}>
          <input
            type="text"
            className={styles.input}
            placeholder="Tìm kiếm..."
            value={keySearch}
            onChange={(e) => setKeySearch(e.target.value)}
          />
        </div>
      </div>
      <div className="table-responsive">
        <DataTable
          title="Danh sách nhãn hiệu"
          columns={columns}
          data={brands}
          customStyles={tableCustomStyles}
          fixedHeader
          fixedHeaderScrollHeight="400px"
          pagination
          paginationPerPage={itemsPerPage}
          paginationServer={true}
          paginationTotalRows={totalBrands}
          onChangeRowsPerPage={handlePerRowsChange}
          onChangePage={handleChangePage}
          paginationDefaultPage={currentPage}
          selectableRows
          onSelectedRowsChange={({selectedRows}) => {
            setSelectedRows(selectedRows.map((row: IBrand) => row._id));
          }}
          onRowClicked={(row, e) => {
            router.replace(`/admin/brand/${row._id}`);
          }}
        />
      </div>
    </div>
  );
}
