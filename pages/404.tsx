import Layout from '../components/layout';
import { Container } from 'react-bootstrap';
export default function Custom404() {
  return (
    <Layout>
      <h1 className="text-center">Opps Fehler! (404)</h1>
      <div className="embed-responsive embed-responsive-16by9">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/OeEzmPs7i_U" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </div>
    </Layout>
  )
}