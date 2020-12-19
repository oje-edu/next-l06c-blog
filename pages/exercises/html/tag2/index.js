import Layout from '../../../../components/layout'
import TextFormatieren from './textFormatieren'
import Auflistungen from './auflistungen'
export default function Tag2(){
  return (
    <Layout>
      <main>
        <section>
          <h1>Text formatieren</h1>
          <TextFormatieren />
        </section>
        <hr />
        <section>
          <h1>Auflistungen</h1>
          <Auflistungen />
        </section>
      </main>
    </Layout>
  )
}