import Link from "next/link";
import Layout from "../../../../components/layout";
import Tabellen from './tabellen';
import Formulare from './formulare';


export default function Tag4() {
  return (
    <Layout>
      <main>
        <div>
          <nav>
            <h1>Übungen am Tag 4</h1>
            <ol type="1">
              <li>
                <Link href="#tabellen">
                  <a>Tabellen</a>
                </Link>
              </li>
              <li>
                <Link href="#formulare">
                  <a>Formulare</a>
                </Link>
              </li>
            </ol>
          </nav>
        </div>
        <section id="tabellen">
          <h2>Tabellen</h2>
          <Tabellen />
        </section>
        <hr />
        <section id="formulare">
          <h2>Formulare</h2>
          <Formulare />
        </section>
      </main>
    </Layout>
  );
}
