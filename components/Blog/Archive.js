import React from "react";

import PostPreview from "./PostPreview";

import styles from "./Archive.module.css";

const Archive = (props) => {
  const { posts } = props;

  return (
    <div>
      <div className={styles["archive-grid"]}>
        {posts &&
          posts.map((post, index) => {
            return (
              <PostPreview
                key={index}
                imageURL={
                  post.featuredImage
                    ? post.featuredImage.url
                    : "/images/logos/RSO_20th_logo1_rgb.svg"
                }
                imageTitle={
                  post.featuredImage
                    ? post.featuredImage.title
                    : "RSO Logo - San Francisco Digital Marketing Agency"
                }
                imageWidth={post.featuredImage ? post.featuredImage.width : 0}
                imageHeight={post.featuredImage ? post.featuredImage.height : 0}
                title={post.title}
                date={post.publishDate}
                link={post.slug}
              />
            );
          })}
      </div>
    </div>
  );
};

export default Archive;
