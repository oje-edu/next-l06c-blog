import { useRouter } from "next/router";
import Layout from '../../components/layout';
import { Button } from 'react-bootstrap';

import { GetStaticPaths, GetStaticProps } from 'next'

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    revalidate: 10,
    props: {
      myFavNumber: Math.random()
    }
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [{
      params: 
        { tag: '1'}},
      {params:  
        { tag: '2'}},
      {params:  
        { tag: '3'}},
      {params:  
        { tag: '4'}},
      {params:  
        { tag: '5'},
    }],
    fallback: false
  }
}

export default function HtmlTag(props) {
  const router = useRouter()

  if (router.isFallback) {
    return <h1>Irgendein schwachsinn wird geladen...</h1>
  }

  function bootMeHome() {
    router.replace('/')
  }



  return (
    <Layout>
      <h1>{props.myFavNumber}</h1>
      <Button variant="info" onClick={bootMeHome}>Start</Button>
    </Layout>
  )
}