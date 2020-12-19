import Head from 'next/head'
import Link from 'next/link'
import useTranslation from "next-translate/useTranslation";
import Layout from "../components/layout";
//import styles from '../styles/Home.module.css'
import Image from 'next/image'


let client = require('contentful').createClient({
  space: process.env.NEXT_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_CONTENTFUL_ACCESS_TOKEN
});

export async function getStaticProps() {
  let data = await client.getEntries({
    content_type: 'article'
  })

  return {
    props: {
      articles: data.items,
    },
    revalidate: 1,
  };
}
export default function Home({ articles }) {
  let { t } = useTranslation();
  return (
    <Layout>
      <main>
      <h1>{t("common:greeting")}</h1>
        <section>
        
          <Image 
            src="/assets/images/scot1.jpg" 
            alt="scottish highlands" 
            width={1263} 
            height={947} 
            quality={80}
            priority 
          />
          <div className="container">
            <h1>Agenda (geplant)</h1>
            <div className="agenda-list">
            <ul>
              {articles.map(article => (
                <li key={article.sys.id}>
                  <Link href={'/articles/' + article.fields.slug}>
                    <a>{article.fields.title}</a>
                  </Link>
                </li>
              ))}
            </ul>
            </div>
          </div>
        </section>  
      </main>
    </Layout>
  )
}
