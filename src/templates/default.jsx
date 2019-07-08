import React from "react";
import { graphql } from "gatsby";
import MDXRenderer from "gatsby-mdx/mdx-renderer";

import Header from "../components/header/header.jsx";

import styles from "./default.module.css";
import "../css/defaults.css";
import "../css/colors.css";
import "../css/typography.css";
import Footer from "../components/footer/footer.jsx";
import Breadcrumbs from "../components/breadcrumbs/breadcrumbs.jsx";
import DateFormat from "../components/date/date.jsx";

const DefaultTemplate = ({ data: { mdx } }) => {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.heroImage}>
          <Header
            heroImage={mdx.frontmatter.heroImage.publicURL}
            heroAlt={mdx.frontmatter.heroAlt}
            heroCredit={mdx.frontmatter.heroCredit}
          />
        </div>
        <div className={styles.layout}>
          <Breadcrumbs>
            <a href="https://www1.wdr.de">WDR</a>
            <a href="/">Data</a>
            <a href="#">{mdx.frontmatter.title}</a>
          </Breadcrumbs>
          <article className={styles.main}>
            <DateFormat date={new Date(mdx.frontmatter.pub_date)} />
            <MDXRenderer>{mdx.code.body}</MDXRenderer>
          </article>
          <Breadcrumbs>
            <a href="https://www1.wdr.de">WDR</a>
            <a href="/">Data</a>
            <a href="#">{mdx.frontmatter.title}</a>
          </Breadcrumbs>
        </div>
      </div>
      <Footer />
    </>
  );
};

export const pageQuery = graphql`
  query DefaultQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      frontmatter {
        title
        heroImage {
          publicURL
        }
        heroAlt
        heroCredit
        pub_date
      }
      code {
        body
      }
    }
  }
`;
export default DefaultTemplate;
