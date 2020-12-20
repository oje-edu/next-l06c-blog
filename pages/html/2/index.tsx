import Link from 'next/link'
import { Container } from 'react-bootstrap';
import Layout from "../../../components/layout";
import Image from "next/image";
import TextFormatieren from "./textFormatieren";
import Auflistungen from "./auflistungen";
export default function Tag2() {
  return (
    <Layout>
      <Container>
        <nav>
          <h1>Übungen am Tag 2</h1>
          <ol type="1">
            <li>
              <Link href="#text">
                <a>Text formatieren</a>
              </Link>
            </li>
            <li>
              <Link href="#auflistungen">
                <a>Auflistungen</a>
              </Link>
            </li>
            <li>
              <Link href="#badge">
                <a>Auszeichnung</a>
              </Link>
            </li>
          </ol>
        </nav>
      </Container>
      <section id="text">
        <Container>
          <h1>Text formatieren</h1>
          <TextFormatieren />
        </Container>
      </section>
      <hr />
      <section id="auflistungen">
        <Container>
          <h1>Auflistungen</h1>
          <Auflistungen />
        </Container>
      </section>

      <section id="badge">
        <Container>
          <h2>Auszeichnung</h2>
          <p>Badge</p>
          <Image
            src="/assets/images/badges/novice.png"
            alt="HTML Novize!"
            width={5334}
            height={3759}
          />
        </Container>
      </section>
    </Layout>
  );
}
