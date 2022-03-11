// @ts-nocheck
import Head from "next/head"
import Link from "next/link"
import Date from "../components/date"
import Layout, { siteTitle } from "../components/layout"
import utilStyles from "../styles/utils.module.css"
import { getSortedPostsData } from "../utils/posts"

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData: allPostsData,
    },
  }
}

export default function Home({ allPostsData }) {
  console.log(allPostsData)
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          I am a Frontend Developer passionate about building reusable and
          scalable web applications, impacting and helping millions of users
          around the world through writing clean code and consistently learning
          and collaborating with other individuals.
        </p>
        <p>
          <strong>Welcome to my first project using NextJs!!!</strong>
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={`${utilStyles.headingLg}`}>Blog</h2>
        <ul className={`${utilStyles.list}`}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}
