import React, { Fragment } from "react";

import Header from "../../components/Layout/Header";
import PostItem from "../../components/Posts/PostItem";
import Author from "../../components/Posts/Author";
import Card from "../../components/UI/Cards/Card";
import SocialShare from "../../components/Posts/SocialShare";
import Categories from "../../components/Posts/Categories";
import ContactSection from "../../components/Contact/ContactSection";
import Alert from "../../components/UI/Alert/alert";

import {
  getAllPostsCategories,
  getAllPostSlugs,
  getPostAndMorePosts,
} from "../../lib/api";

import Head from "next/head";
import ErrorPage from "next/error";
import { useRouter } from "next/router";

import styles from "../../styles/Post.module.css";

export default function Post({
  post,
  postTitle,
  preview,
  postCategories,
  uniqueCategories,
  seoTitle,
  metaDescription,
  metaFeaturedImage,
  authorName,
  authorImage,
  authorBio,
  publishDate,
  featuredImage,
  content,
}) {
  const router = useRouter();

  if (!router.isFallback && !post) {
    return <ErrorPage statusCode={404} />;
  }

  let schemaImage = "";

  metaFeaturedImage ? (schemaImage = metaFeaturedImage) : (schemaImage = "");

  const schema = {
    "@context": "https://schema.org/",
    "@type": "Article",
    name: `${seoTitle}`,
    author: { "@type": "Person", name: `${authorName}` },
    datePublished: `${publishDate}`,
    description: `${metaDescription}`,
    headline: `${seoTitle}`,
    image: `${schemaImage}`,
    inLanguage: "English",
    mainEntityOfPage: `https://www.rso-consulting.com${router.asPath}`,
    publisher: { "@id": "https://www.rso-consulting.com" },
    url: `https://www.rso-consulting.com${router.asPath}`,
  };
  return (
    <Fragment>
      <Head>
        <title>{seoTitle}</title>
        <meta
          name="description"
          content={metaDescription}
        />

        {/* Open Graph */}
        <meta
          property="og:image"
          content={metaFeaturedImage}
        />
        <meta
          property="og:title"
          content={seoTitle}
          key="ogtitle"
        />
        <meta
          property="og:description"
          content={metaDescription}
          key="ogdesc"
        />
        <meta
          property="og:site_name"
          content="RSO Consulting"
          key="ogsitename"
        />
        <meta
          property="og:url"
          content={`https://www.rso-consulting.com${router.asPath}`}
          key="ogurl"
        />

        {/* Twitter */}
        <meta
          name="twitter:card"
          content="summary"
          key="twcard"
        />
        <meta
          name="twitter:creator"
          content="rso_consulting"
          key="twhandle"
        />

        {/* Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </Head>
      {preview && <Alert />}
      <Header />

      <section>
        <div className={styles["post-layout"]}>
          <Card
            className="left"
            sticky
            desktop
          >
            <SocialShare />
          </Card>
          <div>
            <article>
              <PostItem
                title={postTitle}
                authorName={authorName}
                authorBio={authorBio}
                authorImage={authorImage}
                featuredImage={featuredImage}
                publishDate={publishDate}
                content={content}
                categories={postCategories}
              />
              <div className="container short">
                <div className={styles["social-share-mobile"]}>
                  <Card>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                      <SocialShare />
                    </div>
                  </Card>
                </div>
                <div className={styles["categories-mobile"]}>
                  <Card>
                    <h2 className="sidebar-title">Categories</h2>
                    <Categories categories={uniqueCategories} />
                  </Card>
                </div>
                <Card>
                  <div className={styles.author}>
                    <div>
                      <h3>About the Author</h3>
                      <Author
                        bio={authorBio}
                        image={authorImage}
                        name={authorName}
                      />
                    </div>
                  </div>
                </Card>
              </div>
            </article>
          </div>
          <Card
            className="right"
            sticky
            desktop
          >
            <div>
              <h2 className="sidebar-title">Categories</h2>
              <Categories categories={uniqueCategories} />
            </div>
          </Card>
        </div>
      </section>
      <section></section>
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
}

export async function getStaticProps({ params, preview = false }) {
  const data = await getPostAndMorePosts(params.slug, preview);

  // If no post is returned for the given slug, show the 404 page
  if (!data?.post) {
    return {
      notFound: true,
    };
  }

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
    props: {
      preview,
      post: data?.post ?? null,
      postTitle: data?.post?.title ?? null,
      seoTitle: data?.post?.seoTitle ?? `${data.post.title} | RSO Consulting`,
      author: data?.post?.author ?? null,
      authorName: data?.post?.author.name ?? null,
      authorImage: data?.post?.author?.photo?.url ?? null,
      authorBio: data?.post?.author.bio ?? null,
      publishDate: data?.post?.publishDate ?? null,
      featuredImage: data?.post?.featuredImage ?? null,
      content: data?.post?.content ?? null,
      postCategories: data?.post?.categories ?? null,
      metaFeaturedImage:
        data?.post?.featuredImage?.url ??
        `https://www.rso-consulting.com/images/logos/san-francisco-digital-marketing-agency.png`,
      metaDescription:
        data?.post?.metaDescription ??
        `Read the latest news and trends about Digital Marketing`,
      morePosts: data?.morePosts ?? null,
      uniqueCategories: uniqueCategoryArray,
    },
    //revalidate: 60,
  };
}

export async function getStaticPaths() {
  const allPosts = await getAllPostSlugs();

  return {
    paths:
      allPosts.items?.map(({ slug }) => `/digital-marketing-blogs/${slug}`) ??
      [],
    fallback: "blocking",
  };
}
