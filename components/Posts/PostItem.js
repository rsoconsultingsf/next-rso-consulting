import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, INLINES } from "@contentful/rich-text-types";
import RichTextAsset from "./RichTextAsset";
import slugify from "slugify";

import Image from "next/image";
import Link from "next/link";

import styles from "./PostItem.module.css";

const richTextOptions = (content) => ({
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: (node) => (
      <RichTextAsset
        id={node.data.target.sys.id}
        assets={content.links.assets.block}
      />
    ),
    [BLOCKS.EMBEDDED_ENTRY]: (node) => {
      const embed = content.links.entries.block.filter(
        (item) => item.sys.id === node.data.target.sys.id
      );

      return <div dangerouslySetInnerHTML={{ __html: embed[0].content }}></div>;
    },
    [BLOCKS.HEADING_2]: (node, children) => (
      <h2 className={styles["section-title"]}>{children}</h2>
    ),
    [INLINES.HYPERLINK]: ({ data }, children) => {
      if (data.uri.indexOf("rso-consulting.com") > 0) {
        const internalLink = data.uri.split("rso-consulting.com");
        return (
          <Link
            href={internalLink[1] || "/"}
            passHref
          >
            {children}
          </Link>
        );
      } else {
        return (
          <a
            href={data.uri}
            target="_blank"
            rel={"noopener noreferrer"}
          >
            {children}
          </a>
        );
      }
    },
  },
});

export default function PostItem({
  title,
  featuredImage,
  authorName,
  authorImage,
  authorBio,
  publishDate,
  categories,
  content,
}) {
  console.log(content);
  return (
    <div className={styles["post-body"]}>
      {featuredImage && (
        <div className={styles["featured-img-container-desktop"]}>
          <Image
            src={featuredImage.url}
            alt={featuredImage.title}
            width={featuredImage.width}
            height={featuredImage.height}
            priority
            sizes="100vw"
            style={{
              width: "100%",
              height: "auto",
            }}
          />
          <p
            dangerouslySetInnerHTML={{ __html: featuredImage.description }}
            style={{ marginTop: "0", fontStyle: "italic" }}
          ></p>
        </div>
      )}
      <h1 className={styles.title}>{title}</h1>
      <div className={styles["post-meta"]}>
        <p>
          Author: {authorName} | Published:{" "}
          {new Date(publishDate).toLocaleDateString("en-us", {
            year: "numeric",
            month: "short",
            day: "numeric",
          })}
        </p>
        <p>
          Categories:{" "}
          {categories &&
            categories.map((category, index) => {
              return (
                <Link
                  key={index}
                  href={`/digital-marketing-blogs/category/${slugify(category, {
                    lower: true,
                    strict: true,
                  })}`}
                  className={styles.category}
                >
                  <span>{category}</span>
                </Link>
              );
            })}
        </p>
      </div>
      <div className={styles["featured-img-container-mobile"]}>
        {featuredImage && (
          <Image
            src={featuredImage.url}
            alt={featuredImage.title}
            width={featuredImage.width}
            height={featuredImage.height}
            priority
            sizes="100vw"
            style={{
              width: "100%",
              height: "auto",
            }}
          />
        )}
      </div>
      {content &&
        documentToReactComponents(content.json, richTextOptions(content))}
    </div>
  );
}
