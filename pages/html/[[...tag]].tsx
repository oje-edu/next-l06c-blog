import { useRouter } from "next/router";
import Layout from '../../components/layout';
import { Button } from 'react-bootstrap';

export default function HtmlTag() {
  const router = useRouter()

  function bootMeHome() {
    router.replace('/')
  }



  return (
    <Layout>
      <h1>{router.query.html}</h1>
      <Button variant="info" onClick={bootMeHome}>Start</Button>
    </Layout>
  )
}