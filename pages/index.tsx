import Head from "next/head";
import { Container, Row, Col, Card, Button, CardDeck } from "react-bootstrap";
import Link from "next/link";
import useTranslation from "next-translate/useTranslation";
import Layout from "../components/layout";
//import styles from '../styles/Home.module.css'
import Image from "next/image";

let client = require("contentful").createClient({
  space: process.env.NEXT_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_CONTENTFUL_ACCESS_TOKEN,
});

export async function getStaticProps() {
  let data = await client.getEntries({
    content_type: "article",
  });

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
        <a href="https://d3q33rbmdkxzj.cloudfront.net/1589466137456_aFz3CE.png" target="_blank" rel="noreferrer">
        <Image
          src="/assets/images/parrotFreedom.jpg"
          alt="Parrot Security Linux - https://d3q33rbmdkxzj.cloudfront.net/1589466137456_aFz3CE.png"
          width={1191}
          height={670}
          quality={80}
          priority
        />
        </a>

        <Row className="justify-content-md-between">
          <Col>
            <CardDeck>
              {articles.map((article) => (
                <Card bg="primary" text="white" key={article.sys.id}>
                  <Card.Body>
                    <Card.Title>Agenda</Card.Title>
                    <Card.Text>{article.fields.description}</Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <Button
                      variant="success"
                      href={"/articles/" + article.fields.slug}
                    >
                      {article.fields.title}
                    </Button>
                  </Card.Footer>
                </Card>
              ))}
            </CardDeck>
          </Col>
        </Row>

        <Row className="justify-content-md-between">
          <Col>
            <CardDeck>
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
            </CardDeck>
          </Col>
        </Row>
      </section>
    </Layout>
  );
}
