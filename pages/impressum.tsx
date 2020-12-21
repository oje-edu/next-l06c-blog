import Layout from '../components/layout';
import { Container, Row, Card, Button } from 'react-bootstrap'
import Link from 'next/link'


export default function Impressum({ impressums }) {
  return (
    <Layout>
      <Container>
        <h1>§Impressum§</h1>

        <h2>Diensteanbieter</h2>
        <address className="impressum__address">
          Thorsten OJE
          <br />
          Im Luss 40a
          <br />
          74847 Obrigheim
          <br />
          <br />- Deutschland -
        </address>
        <h2>Kontaktmöglichkeiten</h2>

        <strong>E-Mail: </strong>
        <Link href="mailto:ooo.ejo@oje.ooo">
          <a>ooo.ejo@oje.ooo</a>
        </Link>
        <br />

        <strong>Formular: </strong>
        <Link href="/contact"><a>Kontakt</a></Link>

        <h2>Haftungs- und Schutzrechtshinweise</h2>
        <h3>Haftungsausschluss:</h3>

        <p>
          Die Inhalte dieses Onlineangebotes wurden
          sorgfältig und nach unserem aktuellen
          Kenntnisstand erstellt, dienen jedoch nur der
          Information und entfalten keine rechtlich
          bindende Wirkung, sofern es sich nicht um
          gesetzlich verpflichtende Informationen (z.B.
          das Impressum, die Datenschutzerklärung, AGB
          oder verpflichtende Belehrungen von
          Verbrauchern) handelt. Wir behalten uns vor, die
          Inhalte vollständig oder teilweise zu ändern
          oder zu löschen, soweit vertragliche
          Verpflichtungen unberührt bleiben. Alle Angebote
          sind freibleibend und unverbindlich.
        </p>

        <h3>Links auf fremde Webseiten:</h3>
        <p>
          Inhalte fremder Webseiten, auf die wir direkt
          oder indirekt verweisen, liegen außerhalb
          unseres Verantwortungsbereiches und machen wir
          uns nicht zu Eigen. Für alle Inhalte und
          insbesondere für Schäden, die aus der Nutzung
          der in den verlinkten Webseiten aufrufbaren
          Informationen entstehen, haftet allein der
          Anbieter der verlinkten Webseiten.
        </p>

        <h3>Urheberrechte und Markenrechte:</h3>
        <p>
          Alle auf dieser Website dargestellten Inhalte,
          wie Texte, Fotografien, Grafiken, Marken und
          Warenzeichen sind durch die jeweiligen
          Schutzrechte (Urheberrechte, Markenrechte)
          geschützt. Die Verwendung, Vervielfältigung usw.
          unterliegen unseren Rechten oder den Rechten der
          jeweiligen Urheber bzw. Rechteverwalter.
        </p>

        <h3>Hinweise auf Rechtsverstöße:</h3>
        <p>
          Sollten Sie innerhalb unseres Internetauftritts
          Rechtsverstöße bemerken, bitten wir Sie uns auf
          diese hinzuweisen. Wir werden rechtswidrige
          Inhalte und Links nach Kenntnisnahme
          unverzüglich entfernen.
        </p>

        <a
          href="https://datenschutz-generator.de/?l=de"
          title="Rechtstext von Dr. Schwenke - für weitere Informationen bitte anklicken."
          target="_blank"
          rel="noopener noreferrer nofollow"
        >
          Erstellt mit kostenlosem
          Datenschutz-Generator.de von Dr. Thomas Schwenke
        </a>
        <div className="top">
        <Link href="#top">
          <a>Nach oben</a>
        </Link>
      </div>
      </Container>
    </Layout>
  )
} 