import Link from "next/link";
import Layout from "../../../../components/layout";
import Image from 'next/image'
import AlleFormulare from './alleFormulare'
import Audio from './audio'
import Video from './video'
import Kontaktform from './kontaktform'


export default function Tag5() {
  return (
    <Layout>
      <main>
        <div>
          <nav>
            <h1>Übungen am Tag 5</h1>
            <ol type="1">
              <li>
                <Link href="#alleFormulare">
                  <a>Alle gängigen Formulare</a>
                </Link>
              </li>
              <li>
                <Link href="#hausaufgabe">
                  <a>Hausaufgabe (Kontaktformular)</a>
                </Link>
              </li>
              <li>
                <Link href="#audio">
                  <a>Audio</a>
                </Link>
              </li>
              <li>
                <Link href="#video">
                  <a>Video</a>
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
        <section id="alleFormulare">
          <h2>Alle gängigen Formulare</h2>
          <AlleFormulare />
        </section>
        <hr />
        <section id="hausaufgabe">
          <h2>Kontaktform (Hausaufgabe)</h2>
          <Kontaktform />
          
        </section>
        <hr />
        <section id="audio">
          <h2>Audio</h2>
          <Audio />
          
        </section>
        <hr />
        <section id="video">
          <h2>Videos</h2>
          <Video />
        </section>
        <section id="badge">
          <h2>Auszeichnung</h2>
          <p>Badge</p>
          <Image
            src="/assets/images/badges/htmlhacker.png"
            alt="BLACKHAT Grossmeister!"
            width={5334}
            height={3759}
            quality={95}
          />
          <div className="top">
            <Link href="#top">
              <a>Nach oben</a>
            </Link>
          </div>
        </section>        
      </main>
    </Layout>
  );
}
