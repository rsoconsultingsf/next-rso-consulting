import React, { Fragment, useState, useEffect, useRef } from "react";
import slugify from "slugify";

import Pagination from "@mui/material/Pagination";

import Head from "next/head";
import { useRouter } from "next/router";

import Hero from "../../../components/heroSection/heroSection";
import ContactSection from "../../../components/Contact/ContactSection";
import Archive from "../../../components/Blog/Archive";
import Card from "../../../components/UI/Cards/Card";
import Categories from "../../../components/Posts/Categories";

import {
  getAllPostsCategories,
  getCategoryPostPreviews,
} from "../../../lib/api";

import heroImage from "../../../public/images/hero/rso-hero_blog.png";

import styles from "../../../styles/Archive.module.css";

const ITEMS_PER_PAGE = 12;

const CategoryArchive = ({ posts, pageCount, categories, category }) => {
  const router = useRouter();
  const myRef = useRef(null);

  const [page, setPage] = useState(1);
  const [archivePosts, setArchivePosts] = useState(posts);
  const [visible, setVisible] = useState(true);

  const pageCategory = category;

  const pageTitle = `${pageCategory} Blog Posts | RSO Consulting`;

  // Update post previews displayed
  useEffect(() => {
    const timer = setTimeout(() => {
      const fetchData = async () => {
        const categoryPostPreviews = await getCategoryPostPreviews(
          false,
          page - 1,
          ITEMS_PER_PAGE,
          category
        );
        setArchivePosts(categoryPostPreviews.items);
        setVisible(true);
      };

      fetchData().catch(console.error);
    }, 500);

    return () => clearTimeout(timer);
  }, [page, category]);

  const paginationChangeHandler = (e, value) => {
    setVisible(false);
    setPage(value);
    myRef.current.scrollIntoView();
    router.push(
      `/digital-marketing-blogs/category/${slugify(category, {
        lower: true,
        strict: true,
      })}?page=${value}`,
      undefined,
      {
        shallow: true,
      }
    );
  };

  return (
    <Fragment>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content="" />
      </Head>
      <Hero image={heroImage} alt="" anchor="#cards">
        <h1 style={{ color: "#fff", textAlign: "center" }}>
          <b>Blog Category:</b> <br />
          {category}
        </h1>
        <h2
          className="hero-subheader"
          style={{
            color: "#fff",
            textAlign: "center",
            maxWidth: "1000px",
            margin: "0 auto",
          }}
        >
          Read about the latest {category} trends and tips.
        </h2>
      </Hero>
      <section id="cards">
        <div id="intro"></div>
        <div ref={myRef} className={styles["blog-archive"]}>
          <div></div>
          <div className={visible ? "fade-in" : "fade-out"}>
            <Archive posts={archivePosts} />
            <div className="pagination-wrapper">
              <Card>
                <Pagination
                  count={pageCount}
                  onChange={paginationChangeHandler}
                />
              </Card>
            </div>
            <div
              className={styles["categories-mobile"]}
              style={{ paddingTop: "50px" }}
            >
              <Card>
                <h2 className="sidebar-title">Categories</h2>
                <Categories categories={categories} mobile />
              </Card>
            </div>
          </div>
          <Card className="right" sticky desktop>
            <div>
              <h2 className="sidebar-title">Categories</h2>
              <Categories categories={categories} />
            </div>
          </Card>
        </div>
      </section>
      <ContactSection
        title="Free Consultation"
        contactHeader={
          <h2
            className="sub-headline"
            style={{ maxWidth: "900px", margin: "0 auto 40px auto" }}
          >
            Reach out with any <b>questions</b> you might have regarding how{" "}
            <b>RSO</b> can help you with your <b>digital marketing</b>.
          </h2>
        }
      />
    </Fragment>
  );
};

export default CategoryArchive;

export async function getStaticProps({ params, preview = false }) {
  // Get post categories for sidebar
  const postCategories = await getAllPostsCategories(preview);

  let categoryArray = [];
  let uniqueCategoryArray = [];

  const categoryValues = postCategories.items.map((item, index) => {
    categoryArray.push(item.categories);
  });

  console.log(categoryArray);

  const mergedCategories = [].concat.apply([], categoryArray);

  const uniqueCategories = mergedCategories.map((item) => {
    uniqueCategoryArray.indexOf(item) === -1
      ? uniqueCategoryArray.push(item)
      : null;
  });

  const categoryName = uniqueCategoryArray.filter(
    (name) => slugify(name, { lower: true, strict: true }) === params.category
  );

  const categoryPostPreviews = await getCategoryPostPreviews(
    preview,
    0,
    ITEMS_PER_PAGE,
    categoryName[0]
  );

  const pageCount = Math.ceil(categoryPostPreviews.total / ITEMS_PER_PAGE);

  return {
    props: {
      posts: categoryPostPreviews.items,
      pageCount: pageCount,
      categories: uniqueCategoryArray,
      category: categoryName[0],
    },
  };
}

export async function getStaticPaths(preview = false) {
  const postCategories = await getAllPostsCategories(preview);

  let categoryArray = [];
  let uniqueCategoryArray = [];

  const categoryValues = postCategories.items.map((item, index) => {
    categoryArray.push(item.categories);
  });

  const mergedCategories = [].concat.apply([], categoryArray);

  const uniqueCategories = mergedCategories.map((item) => {
    uniqueCategoryArray.indexOf(item) === -1
      ? uniqueCategoryArray.push(item)
      : null;
  });

  return {
    paths:
      uniqueCategoryArray.map((item) => {
        const slug = slugify(item, {
          lower: true,
          strict: true,
        });
        return `/digital-marketing-blogs/category/${slug}`;
      }) ?? [],
    fallback: true,
  };
}
