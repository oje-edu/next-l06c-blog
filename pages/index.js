import Head from 'next/head'
import { Container, Row, Card, Button, CardDeck } from 'react-bootstrap'
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
          <Container>
          <Row className="justify-content-md-between">
            <CardDeck>
              {articles.map(article => (
                <Card className="sml-card" key={article.sys.id}>
                  <Card.Body >
                    <Card.Title>Agenda (geplant)</Card.Title>
                      <Card.Text>{article.fields.description}</Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <Button variant="primary" href={'/articles/' + article.fields.slug}>
                      {article.fields.title} 
                    </Button>
                  </Card.Footer>
                </Card>
              ))}
            </CardDeck>
          </Row>
          
          <Row className="justify-content-md-between">
            <Card className="sml-card">
              <Card.Body>
                <Card.Title>Übungen</Card.Title>
                {/* {articles.map(article => (
                  <div key={article.sys.id}>
                    <Card.Text>{article.fields.description}</Card.Text>
                    <Button variant="primary" href={'/articles/' + article.fields.slug}>
                      {article.fields.title} 
                    </Button>
                  </div>
                ))} */}
              </Card.Body>
            </Card>
          </Row>
          </Container>
        </section>  
    </Layout>
  )
}
