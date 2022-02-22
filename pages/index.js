// @ts-nocheck
import Head from "next/head"
import Layout, { siteTitle } from "../components/layout"
import utilStyles from "../styles/utils.module.css"

export default function Home() {
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
    </Layout>
  )
}
