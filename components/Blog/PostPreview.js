import React from "react";

import Image from "next/legacy/image";
import Link from "next/link";

import PreviewCard from "../UI/Cards/PreviewCard";

import styles from "./PostPreview.module.css";

const PostPreview = (props) => {
  const { imageURL, imageTitle, title, date, link } = props;

  return (
    <PreviewCard>
      <article className={styles["preview-container"]}>
        <div>
          <div
            className={styles.image}
            style={{
              margin:
                props.imageURL.indexOf(
                  "san-francisco-digital-marketing-agency_color.svg"
                ) > -1
                  ? "0 20px"
                  : "0",
            }}
          >
            {
              <Image
                src={imageURL}
                alt={imageTitle}
                width={357}
                height={175}
                layout="responsive"
                objectFit={
                  props.imageURL.indexOf(
                    "san-francisco-digital-marketing-agency_color.svg"
                  ) > -1
                    ? "contain"
                    : "cover"
                }
              />
            }
          </div>
          <div className={styles.meta}>
            <span className={styles.title}>{title}</span>
            <span className={styles.date}>
              {new Date(date).toLocaleDateString("en-us", {
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
            </span>
          </div>
        </div>
        <div className={styles["btn-container"]}>
          <Link
            className={styles["read-more"]}
            href={`/digital-marketing-blogs/${link}`}
          >
            <span>Read More</span>
          </Link>
        </div>
      </article>
    </PreviewCard>
  );
};

export default PostPreview;
