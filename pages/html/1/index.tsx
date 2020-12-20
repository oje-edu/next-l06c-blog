import Layout from '../../../../components/layout'
import Image from 'next/image'
export default function Tag1 () {
  return (
  <Layout>
    <h1>Keine Übung</h1>
    <section id="badge">
      <h2>Auszeichnung</h2>
      <p>Badge</p>
      <Image
        src="/assets/images/badges/schild.png"
        alt="Hier ist dein Schild!"
        width={5334}
        height={3759}
      />
      </section>
  </Layout>)
}