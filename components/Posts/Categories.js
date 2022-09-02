import React from "react";
import slugify from "slugify";

import Link from "next/link";

import styles from "./Categories.module.css";

const Categories = (props) => {
  const { categories } = props;

  return (
    <div
      className={
        props.mobile
          ? styles["category-container-mobile"]
          : styles["category-container"]
      }
    >
      <Link href="/digital-marketing-blogs" passHref>
        <a className={styles.category}>
          <span>All</span>
        </a>
      </Link>
      {categories &&
        categories.sort().map((item, index) => {
          return (
            <Link
              key={index}
              href={`/digital-marketing-blogs/category/${slugify(item, {
                lower: true,
                strict: true,
              })}`}
              passHref
            >
              <a className={styles.category}>
                <span>{item}</span>
              </a>
            </Link>
          );
        })}
    </div>
  );
};

export default Categories;
