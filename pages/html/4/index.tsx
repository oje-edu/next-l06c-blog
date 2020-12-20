import Link from "next/link";
import Layout from "../../../../components/layout";
import Image from 'next/image'
import Tabellen from './tabellen';
import Formulare from './formulare';


export default function Tag4 () {
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
              <li>
                <Link href="#badge">
                  <a>Auszeichnung</a>
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
        <section id="badge">
          <h2>Auszeichnung</h2>
          <p>Badge</p>
          <Image
            src="/assets/images/badges/formmaster.png"
            alt="HTML Formular Grossmeister!"
            width={5334}
            height={3759}
          />
        </section>
        <div className="top">
        <Link href="#top">
          <a>Nach oben</a>
        </Link>
      </div>        
      </main>
    </Layout>
  );
}
