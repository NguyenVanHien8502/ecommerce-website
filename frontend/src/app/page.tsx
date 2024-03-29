import { Button, Image } from "react-bootstrap";
import styles from "./app.module.css";
import Link from "next/link";
import { FaShopify } from "react-icons/fa6";
import { BsCart4 } from "react-icons/bs";
import { IoLogoInstagram } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

export default function Home() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.header__header_top}>
          <nav className={styles.header__header_top__nav_container}>
            <div className={styles.header__header_top__nav_container__left}>
              <Link
                href="/seller/signin"
                className={styles.header__header_top__nav_container__left__link}
              >
                Kênh người bán
              </Link>
              <Link
                href="/seller/signup"
                className={styles.header__header_top__nav_container__left__link}
              >
                Trở thành người bán Shopify
              </Link>
            </div>
            <div className={styles.header__header_top__nav_container__right}>
              <Link
                href="/buyer/signup"
                className={
                  styles.header__header_top__nav_container__right__link
                }
              >
                Đăng ký
              </Link>
              <Link
                href="/buyer/signin"
                className={
                  styles.header__header_top__nav_container__right__link
                }
              >
                Đăng nhập
              </Link>
            </div>
          </nav>
        </div>
        <div className={styles.header__header_bottom}>
          <div className={styles.header__header_bottom__container}>
            <div
              className={styles.header__header_bottom__container__logo_section}
            >
              <FaShopify
                className={
                  styles.header__header_bottom__container__logo_section__logo
                }
              />
              <Link
                href="/"
                className={
                  styles.header__header_bottom__container__logo_section__link
                }
              >
                Shopify
              </Link>
            </div>
            <div
              className={
                styles.header__header_bottom__container__search_section
              }
            >
              <form
                action="#"
                className={
                  styles.header__header_bottom__container__search_section__form
                }
              >
                <div
                  className={
                    styles.header__header_bottom__container__search_section__form__input_container
                  }
                >
                  <input
                    type="text"
                    placeholder="Search here..."
                    className={
                      styles.header__header_bottom__container__search_section__form__input_container__input
                    }
                  />
                  <Button
                    className={
                      styles.header__header_bottom__container__search_section__form__input_container__button
                    }
                  >
                    Search
                  </Button>
                </div>
              </form>
            </div>
            <BsCart4
              className={styles.header__header_bottom__container__cart_section}
            />
          </div>
        </div>
      </header>
      <main className={styles.main}>main</main>
      <footer className={styles.footer}>
        <div className={styles.footer_container}>
          <div className={styles.footer_container__top}>
            <div className={styles.footer_container__top__left}>
              <div className={styles.footer_container__top__left__column}>
                <div className={styles.title}>SHOP</div>
                <div className={styles.option}>Drinks</div>
                <div className={styles.option}>Gift Cards</div>
                <div className={styles.option}>Store Locator</div>
                <div className={styles.option}>Refer a Friend</div>
              </div>
              <div className={styles.footer_container__top__left__column}>
                <div className={styles.title}>HELP</div>
                <div className={styles.option}>Contact Us</div>
                <div className={styles.option}>FAQ</div>
                <div className={styles.option}>Accessibility</div>
              </div>
              <div className={styles.footer_container__top__left__column}>
                <div className={styles.title}>ABOUT</div>
                <div className={styles.option}>Our Story</div>
                <div className={styles.option}>OLIPOP Digest</div>
                <div className={styles.option}>Ingredients</div>
                <div className={styles.option}>Digestive Health</div>
                <div className={styles.option}>Wholesale</div>
                <div className={styles.option}>Press</div>
                <div className={styles.option}>Careers</div>
              </div>
            </div>
            <div className={styles.footer_container__top__right}>
              <div className={styles.footer_container__top__right__container}>
                <div
                  className={
                    styles.footer_container__top__right__container__text
                  }
                >
                  Sign up to get 10% off your first order
                </div>
                <div
                  className={
                    styles.footer_container__top__right__container__search
                  }
                >
                  <form
                    action="#"
                    className={
                      styles.footer_container__top__right__container__search__form
                    }
                  >
                    <input
                      type="email"
                      placeholder="Your Email Address"
                      className={
                        styles.footer_container__top__right__container__search__form__input
                      }
                    />
                    <Button
                      className={
                        styles.footer_container__top__right__container__search__form__button
                      }
                    >
                      Subcribe
                    </Button>
                  </form>
                </div>
                <div
                  className={
                    styles.footer_container__top__right__container__icon
                  }
                >
                  <IoLogoInstagram className={styles.icon}/>
                  <FaFacebookF className={styles.icon}/>
                  <FaTwitter className={styles.icon}/>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.footer_container__bottom}>
            <div className={styles.footer_container__bottom__left}>
              2024 Olipop, Inc.All Rights Reserved
            </div>
            <div className={styles.footer_container__bottom__right}>
              <a
                href="#"
                className={styles.footer_container__bottom__right__link}
              >
                Term of Service
              </a>
              <a
                href="#"
                className={styles.footer_container__bottom__right__link}
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className={styles.footer_container__bottom__right__link}
              >
                Do Not Sell My Information
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
