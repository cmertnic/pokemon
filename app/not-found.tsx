'use client'
import styles from "./nfound.module.scss";
import notfound from "@/image/NotFound.png";
import Image from "next/image";
import Button from "@/shared/button/button";

const NotFound = () => {

  return (
    <main className={styles.main}>
      <div className={styles.main__row}>
        <p className={styles.main__404}>404</p>

        <p className={styles.main__p}>
          <span className={styles.white__text}>The rocket team</span> has won
          this time.
        </p>
        <Button link="/" type={"yellow"}>
          Return
        </Button>
        <div className={styles.main__image}>
          <Image src={notfound} alt="notfound" />
        </div>
      </div>
    </main>
  );
};

export default NotFound;