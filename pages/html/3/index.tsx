import Link from "next/link";
import Layout from "../../../components/layout";
import Image from 'next/image'
import { Container } from 'react-bootstrap'
import InterneVerlinkungen from "./interneVerlinkungen";
import ExterneVerlinkungen from "./externeVerlinkungen";
import Bilder from "./bilder";
import BilderMitRelativenPfad from "./bilderMitRelativenPfad";

export default function Html3() {
  return (
    <Layout>
      <Container>
        <nav>
          <h1>Übungen am Tag 3</h1>
          <ol type="1">
            <li>
              <Link href="#lIntern">
                <a>Interne Verlinkungen</a>
              </Link>
            </li>
            <li>
              <Link href="#lExtern">
                <a>Externe Verlinkungen</a>
              </Link>
            </li>
            <li>
              <Link href="#bExtern">
                <a>Bilder</a>
              </Link>
            </li>
            <li>
              <Link href="#bIntern">
                <a>Bilder mit relativen Pfad</a>
              </Link>
            </li>
            <li>
              <Link href="#badge">
                <a>Auszeichnung</a>
              </Link>
            </li>
          </ol>
        </nav>

        <section id="lIntern">
          <h2>Interne Verlinkungen</h2>
          <InterneVerlinkungen />
        </section>
        <hr />
        <section id="lExtern">
          <h2>Externe Verlinkungen</h2>
          <ExterneVerlinkungen />
        </section>
        <hr />
        <section id="bExtern">
          <h2>Bilder</h2>
          <Bilder />
        </section>
        <hr />
        <section id="bIntern">
          <h2>Bilder mit relativen Pfad</h2>
          <BilderMitRelativenPfad />
        </section>
        <section id="badge">
          <h2>Auszeichnung</h2>
          <p>Badge</p>
          <Image
            src="/assets/images/badges/linkmaster.png"
            alt="HTML Verlinkungs Grossmeister!"
            width={5334}
            height={3759}
          />
        </section>
        <div className="top">
          <Link href="#top">
            <a>Nach oben</a>
          </Link>
        </div>
      </Container>
    </Layout>
  );
}
