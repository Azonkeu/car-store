import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/header.module.css";
import { useRouter } from "next/router";

const Header = () => {
  const { asPath } = useRouter();
  return (
    <header className="header">
      <div className={styles.contact}>
        <Link href="/">
          <p className={styles.zone}>
            Offer Zone Top Deals & Discounts
            <Image
              src="/cart-shopping-solid.svg"
              alt="facebook icon"
              className={styles.image}
              width="28%"
              height="18rem"
            />
          </p>
        </Link>
        <Link href="/">
          <p className={styles.link}>
            <Image
              src="/location-pin-solid.svg"
              alt="facebook icon"
              className={styles.image}
              width="25%"
              height="16rem"
            />
            Select Location
          </p>
        </Link>
        <Link href="/">
          <p className={styles.link}>
            <Image
              src="/truck-solid.svg"
              alt="facebook icon"
              className={styles.image}
              width="25%"
              height="16rem"
            />
            Track Order
          </p>
        </Link>
        <Link href="/">
          <p className={styles.link}>
            <Image
              src="/phone-flip-solid.svg"
              alt="facebook icon"
              className={styles.image}
              width="25%"
              height="16rem"
            />
            001 234 5678
          </p>
        </Link>
        <Link href="/">
          <p className={styles.link}>
            <Image
              src="/right-to-bracket-solid.svg"
              alt="facebook icon"
              className={styles.image}
              width="25%"
              height="16rem"
            />
            Log In
          </p>
        </Link>
        <Link href="/">
          <p className={styles.lin}>
            <Image
              src="/arrow-right-from-bracket-solid.svg"
              alt="facebook icon"
              className={styles.image}
              width="26%"
              height="17rem"
            />
            Register
          </p>
        </Link>
      </div>
      <div className={styles.log}>
        <div className={styles.store}>
          <img src="/log.png" alt="logo" />
          <h2 className={styles.tit}>Auto Store</h2>
        </div>
        <form className={styles.form}>
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Search"
            className={styles.inp}
          />
          <button type="submit" className={styles.submit}>
            Search
          </button>
          <div className={styles.cart}>
           <Image
              src="/cart-shopping-solid.svg"
              alt="facebook icon"
              className={styles.image}
              width="35%"
              height="24rem"
            />
          </div>
        </form>
      </div>
      <nav className={styles.nav}>
        <div className={styles.navdiv}>
          <div className={styles.cat}>
            <Link href="/">
              <p className={styles.tex}>All Categories</p>
            </Link>
            <span className={styles.btn}>
            <Image
              src="/caret-down-solid.svg"
              alt="facebook icon"
              className={styles.image}
              width="16%"
              height="12rem"
            />
            </span>
          </div>
          <Link href="/">
            <p
              className={asPath === "/" ? `${styles.active}` : `${styles.nal}`}
            >
              home
            </p>
          </Link>
          <Link href="/cars">
            <p
              className={
                asPath === "/cars" ? `${styles.active}` : `${styles.nal}`
              }
            >
              Cars
            </p>
          </Link>
          <Link href="/">
            <p className={styles.about}>About Us</p>
          </Link>
          <Link href="/">
            <p className={styles.nax}>New Arrivals</p>
          </Link>
          <Link href="/">
            <p className={styles.nal}>Pages</p>
          </Link>
          <Link href="/">
            <p className={styles.con}>Contact Us</p>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
