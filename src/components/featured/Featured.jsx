import React from "react";
import styles from "./featured.module.css";
import Image from "next/image";

const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Hey, It's Mincharius!</b> Discover my stories and creative ideas.
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/p1.jpeg" alt="" fill className={styles.image} />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>
            Minblog: A Fusion of Fashion, Code, Food, Style, Travel, and Culture
          </h1>
          <p className={styles.postDesc}>
            Explore the world of Minblog, where fashion meets coding,
            tantalizing food experiences intertwine with unique styles, travels
            that transcend borders, and an appreciation of diverse cultures.
            Discover the intersection of these fascinating realms through
            captivating stories, tips, and insights that make Minblog your
            passport to a world of creativity and exploration.
          </p>
          <button className={styles.button}>Read More</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
