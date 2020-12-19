import Link from "next/link";
import Layout from "../../../../components/layout";
import InterneVerlinkungen from "./interneVerlinkungen";
import ExterneVerlinkungen from "./externeVerlinkungen";
import Bilder from "./bilder";
import BilderMitRelativenPfad from "./bilderMitRelativenPfad";

export default function Tag3() {
  return (
    <Layout>
      <main>
        <div>
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
            </ol>
          </nav>
        </div>
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
      </main>
    </Layout>
  );
}
