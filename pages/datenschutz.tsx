import Layout from '../components/layout';
import { Container } from 'react-bootstrap';
import Link from 'next/link';

export default function Datenschutz() {
  return(
    <Layout>
    <Container>
    <h1>Datenschutzerklärung</h1>
          <h2>Einleitung</h2>
          <p>
            Mit der folgenden Datenschutzerklärung möchten
            wir Sie darüber aufklären, welche Arten Ihrer
            personenbezogenen Daten (nachfolgend auch kurz
            als 'Daten“ bezeichnet) wir zu welchen Zwecken
            und in welchem Umfang im Rahmen der
            Bereitstellung unserer Applikation verarbeiten.
          </p>
          <br />
          <p>
            Die verwendeten Begriffe sind nicht
            geschlechtsspezifisch.
            <br />
            Stand: 8. Oktober 2020
          </p>
          <br />
          <h2>Inhaltsübersicht</h2>
          <div>
            <ul>
              <li>
                <Link href="#m1870"><a>Einleitung</a></Link>
              </li>
              <li>
                <Link href="#m3"><a>Verantwortlicher</a></Link>
              </li>
              <li>
                <Link href="#mOverview">
                  <a>Übersicht der Verarbeitungen</a>
                </Link>
              </li>
              <li>
                <Link href="#m13">
                  <a>Maßgebliche Rechtsgrundlagen</a>
                </Link>
              </li>
              <li>
                <Link href="#m27"><a>Sicherheitsmaßnahmen</a></Link>
              </li>
              <li>
                <Link href="#m25">
                  <a>Übermittlung und Offenbarung von
                  personenbezogenen Daten</a>
                </Link>
              </li>
              <li>
                <Link href="#m24">
                  <a>Datenverarbeitung in Drittländern</a>
                </Link>
              </li>
              <li>
                <a href="#m134">Einsatz von Cookies</a>
              </li>
              <li>
                <Link href="#m225">
                  <a>Bereitstellung des Onlineangebotes und
                  Webhosting</a>
                </Link>
              </li>
              <li>
                <Link href="#m367">
                  <a>Registrierung, Anmeldung und Nutzerkonto</a>
                </Link>
              </li>
              <li>
                <Link href="#m451"><a>Single-Sign-On-Anmeldung</a></Link>
              </li>
              <li>
                <Link href="#m104">
                  <a>Blogs und Publikationsmedien</a>
                </Link>
              </li>
              <li>
                <Link href="#m182"><a>Kontaktaufnahme</a></Link>
              </li>
              <li>
                <Link href="#m391">
                  <a>Kommunikation via Messenger</a>
                </Link>
              </li>
              <li>
                <Link href="#m328">
                 <a>Plugins und eingebettete Funktionen sowie
                  Inhalte
                </a>
                </Link>
              </li>
              <li>
                <Link href="#m12"><a>Löschung von Daten</a></Link>
              </li>
              <li>
                <Link href="#m15">
                  <a>Änderung und Aktualisierung der
                  Datenschutzerklärung
                </a>
                </Link>
              </li>
              <li>
                <Link href="#m10">
                 <a>Rechte der betroffenen Personen
                </a>
                </Link>
              </li>
              <li>
                <Link href="#m42"><a>Begriffsdefinitionen</a></Link>
              </li>
            </ul>
          </div>
          <h2 id="m3">Verantwortlicher</h2>
          <address>
            Thorsten OJE <br />
            - OJE.ooo - <br />
            <br />
            Im Luss 40a
            <br />
            74847 Obrigheim
            <br />
            <br />- DEUTSCHLAND -
          </address>
          <h3>E-Mail-Adresse:</h3>
          <Link href="mailto:ooo.ejo@oje.ooo">
            <a>ooo.ejo@oje.ooo</a>
            </Link>
          <h3>Impressum:</h3>{" "}
          <Link href="/impressum"><a>Impressum</a></Link>

          <br />
          <h2 id="mOverview">
            Übersicht der Verarbeitungen
          </h2>
          <p>
            Die nachfolgende Übersicht fasst die Arten der
            verarbeiteten Daten und die Zwecke ihrer
            Verarbeitung zusammen und verweist auf die
            betroffenen Personen.
          </p>
          <h3>Arten der verarbeiteten Daten</h3>
          <ul>
            <li>
              <p>
                Event-Daten (Facebook) ('Event-Daten' sind
                Daten, die z. B. via Facebook-Pixel (via
                Apps oder auf anderen Wegen) von uns an
                Facebook übermittelt werden können und sich
                auf Personen oder deren Handlungen beziehen;
                Zu den Daten gehören z. B. Angaben über
                Besuche auf Websites, Interaktionen mit
                Inhalten, Funktionen, Installationen von
                Apps, Käufe von Produkten, etc.; die
                Event-Daten werden zwecks Bildung von
                Zielgruppen für Inhalte und
                Werbeinformationen (Custom Audiences)
                verarbeitet; Event Daten beinhalten nicht
                die eigentlichen Inhalte (wie z. B.
                verfasste Kommentare), keine
                Login-Informationen und keine
                Kontaktinformationen (also keine Namen,
                E-Mail-Adressen und Telefonnummern). Event
                Daten werden durch Facebook nach maximal
                zwei Jahren gelöscht, die aus ihnen
                gebildeten Zielgruppen mit der Löschung
                unseres Facebook-Kontos).
              </p>
            </li>
            <li>
              <p>Bestandsdaten (z.B. Namen, Adressen).</p>
            </li>
            <li>
              <p>
                Inhaltsdaten (z.B. Eingaben in
                Onlineformularen).
              </p>
            </li>
            <li>
              <p>
                Kontaktdaten (z.B. E-Mail, Telefonnummern).
              </p>
            </li>
            <li>
              <p>
                Meta-/Kommunikationsdaten (z.B.
                Geräte-Informationen, IP-Adressen).
              </p>
            </li>
            <li>
              <p>
                Nutzungsdaten (z.B. besuchte Webseiten,
                Interesse an Inhalten, Zugriffszeiten).
              </p>
            </li>
          </ul>
          <h3>Kategorien betroffener Personen</h3>
          <ul>
            <li>
              <p>Kommunikationspartner.</p>
            </li>
            <li>
              <p>
                Nutzer (z.B. Webseitenbesucher, Nutzer von
                Onlinediensten).
              </p>
            </li>
          </ul>
          <h3>Zwecke der Verarbeitung</h3>
          <ul>
            <li>
              <p>Anmeldeverfahren.</p>
            </li>
            <li>
              <p>
                Bereitstellung unseres Onlineangebotes und
                Nutzerfreundlichkeit.
              </p>
            </li>
            <li>
              <p>Content Delivery Network (CDN).</p>
            </li>
            <li>
              <p>
                Direktmarketing (z.B. per E-Mail oder
                postalisch).
              </p>
            </li>
            <li>
              <p>
                Feedback (z.B. Sammeln von Feedback via
                Online-Formular).
              </p>
            </li>
            <li>
              <p>
                Interessenbasiertes und verhaltensbezogenes
                Marketing.
              </p>
            </li>
            <li>
              <p>Kontaktanfragen und Kommunikation.</p>
            </li>
            <li>
              <p>
                Profiling (Erstellen von Nutzerprofilen).
              </p>
            </li>
            <li>
              <p>Sicherheitsmaßnahmen.</p>
            </li>
            <li>
              <p>
                Tracking (z.B.
                interessens-/verhaltensbezogenes Profiling,
                Nutzung von Cookies).
              </p>
            </li>
            <li>
              <p>
                Erbringung vertragliche Leistungen und
                Kundenservice.
              </p>
            </li>
            <li>
              <p>
                Verwaltung und Beantwortung von Anfragen.
              </p>
            </li>
          </ul>
          <h3 id="m13">Maßgebliche Rechtsgrundlagen</h3>
          <p>
            Im Folgenden teilen wir die Rechtsgrundlagen der
            Datenschutzgrundverordnung (DSGVO), auf deren
            Basis wir die personenbezogenen Daten
            verarbeiten, mit. Bitte beachten Sie, dass
            zusätzlich zu den Regelungen der DSGVO die
            nationalen Datenschutzvorgaben in Ihrem bzw.
            unserem Wohn- und Sitzland gelten können.
            Sollten ferner im Einzelfall speziellere
            Rechtsgrundlagen maßgeblich sein, teilen wir
            Ihnen diese in der Datenschutzerklärung mit.
          </p>
          <ul>
            <li>
              <h3>
                Einwilligung (Art. 6 Abs. 1 S. 1 lit. a.
                DSGVO)
              </h3>
              <p>
                - Die betroffene Person hat ihre
                Einwilligung in die Verarbeitung der sie
                betreffenden personenbezogenen Daten für
                einen spezifischen Zweck oder mehrere
                bestimmte Zwecke gegeben.
              </p>
            </li>
            <li>
              <h3>
                Vertragserfüllung und vorvertragliche
                Anfragen (Art. 6 Abs. 1 S. 1 lit. b. DSGVO)
              </h3>
              <p>
                - Die Verarbeitung ist für die Erfüllung
                eines Vertrags, dessen Vertragspartei die
                betroffene Person ist, oder zur Durchführung
                vorvertraglicher Maßnahmen erforderlich, die
                auf Anfrage der betroffenen Person erfolgen.
              </p>
            </li>
            <li>
              <h3>
                Berechtigte Interessen (Art. 6 Abs. 1 S. 1
                lit. f. DSGVO)
              </h3>
              <p>
                - Die Verarbeitung ist zur Wahrung der
                berechtigten Interessen des Verantwortlichen
                oder eines Dritten erforderlich, sofern
                nicht die Interessen oder Grundrechte und
                Grundfreiheiten der betroffenen Person, die
                den Schutz personenbezogener Daten
                erfordern, überwiegen.
              </p>
            </li>
          </ul>
          <h3>
            Nationale Datenschutzregelungen in Deutschland:
          </h3>
          <p>
            Zusätzlich zu den Datenschutzregelungen der
            Datenschutz-Grundverordnung gelten nationale
            Regelungen zum Datenschutz in Deutschland.
            Hierzu gehört insbesondere das Gesetz zum Schutz
            vor Missbrauch personenbezogener Daten bei der
            Datenverarbeitung (Bundesdatenschutzgesetz –
            BDSG). Das BDSG enthält insbesondere
            Spezialregelungen zum Recht auf Auskunft, zum
            Recht auf Löschung, zum Widerspruchsrecht, zur
            Verarbeitung besonderer Kategorien
            personenbezogener Daten, zur Verarbeitung für
            andere Zwecke und zur Übermittlung sowie
            automatisierten Entscheidungsfindung im
            Einzelfall einschließlich Profiling. Des
            Weiteren regelt es die Datenverarbeitung für
            Zwecke des Beschäftigungsverhältnisses (§ 26
            BDSG), insbesondere im Hinblick auf die
            Begründung, Durchführung oder Beendigung von
            Beschäftigungsverhältnissen sowie die
            Einwilligung von Beschäftigten. Ferner können
            Landesdatenschutzgesetze der einzelnen
            Bundesländer zur Anwendung gelangen.
          </p>
          <h2 id="m27">Sicherheitsmaßnahmen</h2>
          <p>
            Wir treffen nach Maßgabe der gesetzlichen
            Vorgaben unter Berücksichtigung des Stands der
            Technik, der Implementierungskosten und der Art,
            des Umfangs, der Umstände und der Zwecke der
            Verarbeitung sowie der unterschiedlichen
            Eintrittswahrscheinlichkeiten und des Ausmaßes
            der Bedrohung der Rechte und Freiheiten
            natürlicher Personen geeignete technische und
            organisatorische Maßnahmen, um ein dem Risiko
            angemessenes Schutzniveau zu gewährleisten.
          </p>
          <p>
            Zu den Maßnahmen gehören insbesondere die
            Sicherung der Vertraulichkeit, Integrität und
            Verfügbarkeit von Daten durch Kontrolle des
            physischen und elektronischen Zugangs zu den
            Daten als auch des sie betreffenden Zugriffs,
            der Eingabe, der Weitergabe, der Sicherung der
            Verfügbarkeit und ihrer Trennung. Des Weiteren
            haben wir Verfahren eingerichtet, die eine
            Wahrnehmung von Betroffenenrechten, die Löschung
            von Daten und Reaktionen auf die Gefährdung der
            Daten gewährleisten. Ferner berücksichtigen wir
            den Schutz personenbezogener Daten bereits bei
            der Entwicklung bzw. Auswahl von Hardware,
            Software sowie Verfahren entsprechend dem
            Prinzip des Datenschutzes, durch
            Technikgestaltung und durch
            datenschutzfreundliche Voreinstellungen.
          </p>
          <h3>Kürzung der IP-Adresse:</h3>
          <p>
            Sofern es uns möglich ist oder eine Speicherung
            der IP-Adresse nicht erforderlich ist, kürzen
            wir oder lassen Ihre IP-Adresse kürzen. Im Fall
            der Kürzung der IP-Adresse, auch als
            'IP-Masking' bezeichnet, wird das letzte Oktett,
            d.h., die letzten beiden Zahlen einer
            IP-Adresse, gelöscht (die IP-Adresse ist in
            diesem Kontext eine einem Internetanschluss
            durch den Online-Zugangs-Provider individuell
            zugeordnete Kennung). Mit der Kürzung der
            IP-Adresse soll die Identifizierung einer Person
            anhand ihrer IP-Adresse verhindert oder
            wesentlich erschwert werden.
          </p>
          <h3>SSL-Verschlüsselung (https):</h3>
          <p>
            {" "}
            Um Ihre via unser Online-Angebot übermittelten
            Daten zu schützen, nutzen wir eine
            SSL-Verschlüsselung. Sie erkennen derart
            verschlüsselte Verbindungen an dem Präfix
            https:// in der Adresszeile Ihres Browsers.
          </p>
          <h2 id="m25">
            Übermittlung und Offenbarung von
            personenbezogenen Daten
          </h2>
          <p>
            Im Rahmen unserer Verarbeitung von
            personenbezogenen Daten kommt es vor, dass die
            Daten an andere Stellen, Unternehmen, rechtlich
            selbstständige Organisationseinheiten oder
            Personen übermittelt oder sie ihnen gegenüber
            offengelegt werden. Zu den Empfängern dieser
            Daten können z.B. Zahlungsinstitute im Rahmen
            von Zahlungsvorgängen, mit IT-Aufgaben
            beauftragte Dienstleister oder Anbieter von
            Diensten und Inhalten, die in eine Webseite
            eingebunden werden, gehören. In solchen Fall
            beachten wir die gesetzlichen Vorgaben und
            schließen insbesondere entsprechende Verträge
            bzw. Vereinbarungen, die dem Schutz Ihrer Daten
            dienen, mit den Empfängern Ihrer Daten ab.
          </p>
          <h2 id="m24">
            Datenverarbeitung in Drittländern
          </h2>
          <p>
            Sofern wir Daten in einem Drittland (d.h.,
            außerhalb der Europäischen Union (EU), des
            Europäischen Wirtschaftsraums (EWR)) verarbeiten
            oder die Verarbeitung im Rahmen der
            Inanspruchnahme von Diensten Dritter oder der
            Offenlegung bzw. Übermittlung von Daten an
            andere Personen, Stellen oder Unternehmen
            stattfindet, erfolgt dies nur im Einklang mit
            den gesetzlichen Vorgaben.
          </p>
          <p>
            Vorbehaltlich ausdrücklicher Einwilligung oder
            vertraglich oder gesetzlich erforderlicher
            Übermittlung verarbeiten oder lassen wir die
            Daten nur in Drittländern mit einem anerkannten
            Datenschutzniveau, vertraglichen Verpflichtung
            durch sogenannte Standardschutzklauseln der
            EU-Kommission, beim Vorliegen von
            Zertifizierungen oder verbindlicher internen
            Datenschutzvorschriften verarbeiten (Art. 44 bis
            49 DSGVO, Informationsseite der EU-Kommission:
            <a
              href="https://ec.europa.eu/info/law/law-topic/data-protection/international-dimension-data-protection_de"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://ec.europa.eu/info/law/law-topic/data-protection/international-dimension-data-protection_de
            </a>
            ).
          </p>
          <h2 id="m134">Einsatz von Cookies</h2>
          <p>
            Cookies sind Textdateien, die Daten von
            besuchten Websites oder Domains enthalten und
            von einem Browser auf dem Computer des Benutzers
            gespeichert werden. Ein Cookie dient in erster
            Linie dazu, die Informationen über einen
            Benutzer während oder nach seinem Besuch
            innerhalb eines Onlineangebotes zu speichern. Zu
            den gespeicherten Angaben können z.B. die
            Spracheinstellungen auf einer Webseite, der
            Loginstatus, ein Warenkorb oder die Stelle, an
            der ein Video geschaut wurde, gehören. Zu dem
            Begriff der Cookies zählen wir ferner andere
            Technologien, die die gleichen Funktionen wie
            Cookies erfüllen (z.B., wenn Angaben der Nutzer
            anhand pseudonymer Onlinekennzeichnungen
            gespeichert werden, auch als 'Nutzer-IDs'
            bezeichnet)
          </p>
          <h3>
            Die folgenden Cookie-Typen und Funktionen werden
            unterschieden:
          </h3>
          <ul>
            <li>
              <h3>
                Temporäre Cookies (auch: Session- oder
                Sitzungs-Cookies):
              </h3>
              <p>
                Temporäre Cookies werden spätestens
                gelöscht, nachdem ein Nutzer ein
                Online-Angebot verlassen und seinen Browser
                geschlossen hat.
              </p>
            </li>
            <li>
              <h3>Permanente Cookies:</h3>
              <p>
                Permanente Cookies bleiben auch nach dem
                Schließen des Browsers gespeichert. So kann
                beispielsweise der Login-Status gespeichert
                oder bevorzugte Inhalte direkt angezeigt
                werden, wenn der Nutzer eine Website erneut
                besucht. Ebenso können die Interessen von
                Nutzern, die zur Reichweitenmessung oder zu
                Marketingzwecken verwendet werden, in einem
                solchen Cookie gespeichert werden.
              </p>
            </li>
            <li>
              <h3>First-Party-Cookies:</h3>
              <p>
                First-Party-Cookies werden von uns selbst
                gesetzt.
              </p>
            </li>
            <li>
              <h3>
                Third-Party-Cookies (auch:
                Drittanbieter-Cookies):
              </h3>
              <p>
                Drittanbieter-Cookies werden hauptsächlich
                von Werbetreibenden (sog. Dritten)
                verwendet, um Benutzerinformationen zu
                verarbeiten.
              </p>
            </li>
            <li>
              <h3>
                Notwendige (auch: essentielle oder unbedingt
                erforderliche) Cookies:
              </h3>
              <p>
                Cookies können zum einen für den Betrieb
                einer Webseite unbedingt erforderlich sein
                (z.B. um Logins oder andere Nutzereingaben
                zu speichern oder aus Gründen der
                Sicherheit).
              </p>
            </li>
            <li>
              <h3>
                Statistik-, Marketing- und
                Personalisierungs-Cookies
              </h3>
              <p>
                : Ferner werden Cookies im Regelfall auch im
                Rahmen der Reichweitenmessung eingesetzt
                sowie dann, wenn die Interessen eines
                Nutzers oder sein Verhalten (z.B. Betrachten
                bestimmter Inhalte, Nutzen von Funktionen
                etc.) auf einzelnen Webseiten in einem
                Nutzerprofil gespeichert werden. Solche
                Profile dienen dazu, den Nutzern z.B.
                Inhalte anzuzeigen, die ihren potentiellen
                Interessen entsprechen. Dieses Verfahren
                wird auch als 'Tracking', d.h.,
                Nachverfolgung der potentiellen Interessen
                der Nutzer bezeichnet. Soweit wir Cookies
                oder 'Tracking'-Technologien einsetzen,
                informieren wir Sie gesondert in unserer
                Datenschutzerklärung oder im Rahmen der
                Einholung einer Einwilligung.
              </p>
            </li>
          </ul>
          <h3>Hinweise zu Rechtsgrundlagen: </h3>
          <p>
            Auf welcher Rechtsgrundlage wir Ihre
            personenbezogenen Daten mit Hilfe von Cookies
            verarbeiten, hängt davon ab, ob wir Sie um eine
            Einwilligung bitten. Falls dies zutrifft und Sie
            in die Nutzung von Cookies einwilligen, ist die
            Rechtsgrundlage der Verarbeitung Ihrer Daten die
            erklärte Einwilligung. Andernfalls werden die
            mithilfe von Cookies verarbeiteten Daten auf
            Grundlage unserer berechtigten Interessen (z.B.
            an einem betriebswirtschaftlichen Betrieb
            unseres Onlineangebotes und dessen Verbesserung)
            verarbeitet oder, wenn der Einsatz von Cookies
            erforderlich ist, um unsere vertraglichen
            Verpflichtungen zu erfüllen.
          </p>
          <h3>Speicherdauer: </h3>
          <p>
            Sofern wir Ihnen keine expliziten Angaben zur
            Speicherdauer von permanenten Cookies mitteilen
            (z. B. im Rahmen eines sog. Cookie-Opt-Ins),
            gehen Sie bitte davon aus, dass die
            Speicherdauer bis zu zwei Jahre betragen kann.
          </p>
          <h3>
            Allgemeine Hinweise zum Widerruf und Widerspruch
            (Opt-Out):
          </h3>
          <p>
            Abhängig davon, ob die Verarbeitung auf
            Grundlage einer Einwilligung oder gesetzlichen
            Erlaubnis erfolgt, haben Sie jederzeit die
            Möglichkeit, eine erteilte Einwilligung zu
            widerrufen oder der Verarbeitung Ihrer Daten
            durch Cookie-Technologien zu widersprechen
            (zusammenfassend als 'Opt-Out' bezeichnet). Sie
            können Ihren Widerspruch zunächst mittels der
            Einstellungen Ihres Browsers erklären, z.B.,
            indem Sie die Nutzung von Cookies deaktivieren
            (wobei hierdurch auch die Funktionsfähigkeit
            unseres Onlineangebotes eingeschränkt werden
            kann). Ein Widerspruch gegen den Einsatz von
            Cookies zu Zwecken des Onlinemarketings kann
            auch mittels einer Vielzahl von Diensten, vor
            allem im Fall des Trackings, über die Webseiten
            <a
              href="https://optout.aboutads.info"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://optout.aboutads.info
            </a>
            und
            <a
              href="https://www.youronlinechoices.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.youronlinechoices.com/
            </a>
            erklärt werden. Daneben können Sie weitere
            Widerspruchshinweise im Rahmen der Angaben zu
            den eingesetzten Dienstleistern und Cookies
            erhalten.
          </p>
          <h3>
            Verarbeitung von Cookie-Daten auf Grundlage
            einer Einwilligung
          </h3>
          <p>
            : Bevor wir Daten im Rahmen der Nutzung von
            Cookies verarbeiten oder verarbeiten lassen,
            bitten wir die Nutzer um eine jederzeit
            widerrufbare Einwilligung. Bevor die
            Einwilligung nicht ausgesprochen wurde, werden
            allenfalls Cookies eingesetzt, die für den
            Betrieb unseres Onlineangebotes unbedingt
            erforderlich sind.
          </p>
          <ul className="m-elements">
            <li>
              <h3>Verarbeitete Datenarten:</h3>
              <p>
                Nutzungsdaten (z.B. besuchte Webseiten,
                Interesse an Inhalten, Zugriffszeiten),
                Meta-/Kommunikationsdaten (z.B.
                Geräte-Informationen, IP-Adressen).
              </p>
            </li>
            <li>
              <h3>Betroffene Personen:</h3>
              <p>
                Nutzer (z.B. Webseitenbesucher, Nutzer von
                Onlinediensten).
              </p>
            </li>
            <li>
              <h3>Rechtsgrundlagen:</h3>
              <p>
                Einwilligung (Art. 6 Abs. 1 S. 1 lit. a.
                DSGVO), Berechtigte Interessen (Art. 6 Abs.
                1 S. 1 lit. f. DSGVO).
              </p>
            </li>
          </ul>
          <h2 id="m225">
            Bereitstellung des Onlineangebotes und
            Webhosting
          </h2>
          <p>
            Um unser Onlineangebot sicher und effizient
            bereitstellen zu können, nehmen wir die
            Leistungen von einem oder mehreren
            Webhosting-Anbietern in Anspruch, von deren
            Servern (bzw. von ihnen verwalteten Servern) das
            Onlineangebot abgerufen werden kann. Zu diesen
            Zwecken können wir Infrastruktur- und
            Plattformdienstleistungen, Rechenkapazität,
            Speicherplatz und Datenbankdienste sowie
            Sicherheitsleistungen und technische
            Wartungsleistungen in Anspruch nehmen.
          </p>
          <p>
            Zu den im Rahmen der Bereitstellung des
            Hostingangebotes verarbeiteten Daten können alle
            die Nutzer unseres Onlineangebotes betreffenden
            Angaben gehören, die im Rahmen der Nutzung und
            der Kommunikation anfallen. Hierzu gehören
            regelmäßig die IP-Adresse, die notwendig ist, um
            die Inhalte von Onlineangeboten an Browser
            ausliefern zu können, und alle innerhalb unseres
            Onlineangebotes oder von Webseiten getätigten
            Eingaben.
          </p>
          <h3>E-Mail-Versand und -Hosting:</h3>
          <p>
            Die von uns in Anspruch genommenen
            Webhosting-Leistungen umfassen ebenfalls den
            Versand, den Empfang sowie die Speicherung von
            E-Mails. Zu diesen Zwecken werden die Adressen
            der Empfänger sowie Absender als auch weitere
            Informationen betreffend den E-Mailversand (z.B.
            die beteiligten Provider) sowie die Inhalte der
            jeweiligen E-Mails verarbeitet. Die vorgenannten
            Daten können ferner zu Zwecken der Erkennung von
            SPAM verarbeitet werden. Wir bitten darum, zu
            beachten, dass E-Mails im Internet grundsätzlich
            nicht verschlüsselt versendet werden. Im
            Regelfall werden E-Mails zwar auf dem
            Transportweg verschlüsselt, aber (sofern kein
            sogenanntes
            Ende-zu-Ende-Verschlüsselungsverfahren
            eingesetzt wird) nicht auf den Servern, von
            denen sie abgesendet und empfangen werden. Wir
            können daher für den Übertragungsweg der E-Mails
            zwischen dem Absender und dem Empfang auf
            unserem Server keine Verantwortung übernehmen.
          </p>
          <h3>Erhebung von Zugriffsdaten und Logfiles:</h3>
          <p>
            Wir selbst (bzw. unser Webhostinganbieter)
            erheben Daten zu jedem Zugriff auf den Server
            (sogenannte Serverlogfiles). Zu den
            Serverlogfiles können die Adresse und Name der
            abgerufenen Webseiten und Dateien, Datum und
            Uhrzeit des Abrufs, übertragene Datenmengen,
            Meldung über erfolgreichen Abruf, Browsertyp
            nebst Version, das Betriebssystem des Nutzers,
            Referrer URL (die zuvor besuchte Seite) und im
            Regelfall IP-Adressen und der anfragende
            Provider gehören.
          </p>
          <p>
            Die Serverlogfiles können zum einen zu Zwecken
            der Sicherheit eingesetzt werden, z.B., um eine
            Überlastung der Server zu vermeiden
            (insbesondere im Fall von missbräuchlichen
            Angriffen, sogenannten DDoS-Attacken) und zum
            anderen, um die Auslastung der Server und ihre
            Stabilität sicherzustellen.
          </p>
          <h3>Content-Delivery-Network:</h3>
          <p>
            Wir setzen ein 'Content-Delivery-Network' (CDN)
            ein. Ein CDN ist ein Dienst, mit dessen Hilfe
            Inhalte eines Onlineangebotes, insbesondere
            große Mediendateien, wie Grafiken oder
            Programm-Skripte, mit Hilfe regional verteilter
            und über das Internet verbundener Server
            schneller und sicherer ausgeliefert werden
            können.
          </p>
          <ul className="m-elements">
            <li>
              <h3>Verarbeitete Datenarten:</h3>
              <p>
                {" "}
                Inhaltsdaten (z.B. Eingaben in
                Onlineformularen), Nutzungsdaten (z.B.
                besuchte Webseiten, Interesse an Inhalten,
                Zugriffszeiten), Meta-/Kommunikationsdaten
                (z.B. Geräte-Informationen, IP-Adressen).
              </p>
            </li>
            <li>
              <h3>Betroffene Personen:</h3>
              <p>
                {" "}
                Nutzer (z.B. Webseitenbesucher, Nutzer von
                Onlinediensten).
              </p>
            </li>
            <li>
              <h3>Zwecke der Verarbeitung:</h3>
              <p> Content Delivery Network (CDN).</p>
            </li>
            <li>
              <h3>Rechtsgrundlagen:</h3>
              <p>
                {" "}
                Berechtigte Interessen (Art. 6 Abs. 1 S. 1
                lit. f. DSGVO).
              </p>
            </li>
          </ul>
          <h2 id="m367">
            Registrierung, Anmeldung und Nutzerkonto
          </h2>
          <p>
            Nutzer können ein Nutzerkonto anlegen. Im Rahmen
            der Registrierung werden den Nutzern die
            erforderlichen Pflichtangaben mitgeteilt und zu
            Zwecken der Bereitstellung des Nutzerkontos auf
            Grundlage vertraglicher Pflichterfüllung
            verarbeitet. Zu den verarbeiteten Daten gehören
            insbesondere die Login-Informationen (Name,
            Passwort sowie eine E-Mail-Adresse). Die im
            Rahmen der Registrierung eingegebenen Daten
            werden für die Zwecke der Nutzung des
            Nutzerkontos und dessen Zwecks verwendet.
          </p>
          <p>
            Die Nutzer können über Vorgänge, die für deren
            Nutzerkonto relevant sind, wie z.B. technische
            Änderungen, per E-Mail informiert werden. Wenn
            Nutzer ihr Nutzerkonto gekündigt haben, werden
            deren Daten im Hinblick auf das Nutzerkonto,
            vorbehaltlich einer gesetzlichen
            Aufbewahrungspflicht, gelöscht. Es obliegt den
            Nutzern, ihre Daten bei erfolgter Kündigung vor
            dem Vertragsende zu sichern. Wir sind
            berechtigt, sämtliche während der Vertragsdauer
            gespeicherte Daten des Nutzers unwiederbringlich
            zu löschen.
          </p>
          <p>
            Im Rahmen der Inanspruchnahme unserer
            Registrierungs- und Anmeldefunktionen sowie der
            Nutzung des Nutzerkontos speichern wir die
            IP-Adresse und den Zeitpunkt der jeweiligen
            Nutzerhandlung. Die Speicherung erfolgt auf
            Grundlage unserer berechtigten Interessen als
            auch jener der Nutzer an einem Schutz vor
            Missbrauch und sonstiger unbefugter Nutzung.
            Eine Weitergabe dieser Daten an Dritte erfolgt
            grundsätzlich nicht, es sei denn, sie ist zur
            Verfolgung unserer Ansprüche erforderlich oder
            es besteht eine gesetzliche Verpflichtung
            hierzu.
          </p>
          <h3>Online-Forum:</h3>
          <p>
            {" "}
            Die Teilnahme am Forum setzt eine Registrierung
            voraus, bei der, vorbehaltlich anderer Angaben
            im Registrierungsformular, ein oder Ihr Name,
            ein Kennwort und die E-Mail-Adresse, an welche
            die Zugangsdaten versendet werden, angegeben
            werden müssen. Aus Gründen der Sicherheit sollte
            das Kennwort dem Stand der Technik entsprechen,
            also kompliziert sein (hierauf werden Nutzer
            notfalls im Rahmen der Registrierung
            hingewiesen) und nicht an anderer Stelle
            verwendet werden. Die Beiträge im Forum sind für
            die Öffentlichkeit sichtbar, es sei denn, deren
            Sichtbarkeit ist auf bestimmte Mitglieder oder
            Mitgliedergruppen beschränkt. Die Beiträge der
            Verfasser werden mit deren Namen, sofern
            registriert oder angegeben, dem Zeitpunkt und
            dem Eintragsinhalt gespeichert. Bei Anmeldungen
            und beim Verfassen von Einträgen werden ferner
            die IP-Adressen der Nutzer gespeichert, falls
            die Einträge einen unzulässigen Inhalt aufweisen
            sollten und die IP-Adressen der Rechtsverfolgung
            dienen könnten. Der Verantwortliche behält sich
            vor, die Anmeldungen und Einträge auf Grundlage
            einer sachgerechten Abwägung zu löschen.
          </p>
          <h3>Zwei-Faktor-Authentifizierung:</h3>
          <p>
            {" "}
            Die Zwei-Faktor-Authentifizierung bietet eine
            zusätzliche Sicherheitsebene für Ihr
            Benutzerkonto und stellt sicher, dass nur Sie
            auf Ihr Konto zugreifen können, auch, wenn
            jemand anderes Ihr Passwort kennt.
          </p>
          <p>
            Zu diesem Zweck müssen Sie zusätzlich zu Ihrem
            Passwort eine weitere Authentifizierungsmaßnahme
            durchführen (z.B. einen an ein mobiles Gerät
            gesandten Code eingeben). Wir werden Sie über
            das von uns eingesetzte Verfahren informieren.
          </p>
          <ul className="m-elements">
            <li>
              <h3>Verarbeitete Datenarten:</h3>
              <p>
                {" "}
                Bestandsdaten (z.B. Namen, Adressen),
                Kontaktdaten (z.B. E-Mail, Telefonnummern),
                Inhaltsdaten (z.B. Eingaben in
                Onlineformularen), Meta-/Kommunikationsdaten
                (z.B. Geräte-Informationen, IP-Adressen),
                Nutzungsdaten (z.B. besuchte Webseiten,
                Interesse an Inhalten, Zugriffszeiten).
              </p>
            </li>
            <li>
              <h3>Betroffene Personen:</h3>
              <p>
                {" "}
                Nutzer (z.B. Webseitenbesucher, Nutzer von
                Onlinediensten).
              </p>
            </li>
            <li>
              <h3>Zwecke der Verarbeitung:</h3>
              <p>
                {" "}
                Erbringung vertragliche Leistungen und
                Kundenservice, Sicherheitsmaßnahmen,
                Verwaltung und Beantwortung von Anfragen.
              </p>
            </li>
            <li>
              <h3>Rechtsgrundlagen:</h3>
              <p>
                {" "}
                Einwilligung (Art. 6 Abs. 1 S. 1 lit. a.
                DSGVO), Vertragserfüllung und
                vorvertragliche Anfragen (Art. 6 Abs. 1 S. 1
                lit. b. DSGVO), Berechtigte Interessen (Art.
                6 Abs. 1 S. 1 lit. f. DSGVO).
              </p>
            </li>
          </ul>
          <h2 id="m451">Single-Sign-On-Anmeldung</h2>
          <p>
            Als 'Single-Sign-On“ oder
            'Single-Sign-On-Anmeldung bzw.
            '-Authentifizierung“ werden Verfahren
            bezeichnet, die es Nutzern erlauben, sich mit
            Hilfe eines Nutzerkontos bei einem Anbieter von
            Single-Sign-On-Verfahren (z.B. einem sozialen
            Netzwerk), auch bei unserem Onlineangebot,
            anzumelden. Voraussetzung der
            Single-Sign-On-Authentifizierung ist, dass die
            Nutzer bei dem jeweiligen
            Single-Sign-On-Anbieter registriert sind und die
            erforderlichen Zugangsdaten in dem dafür
            vorgesehenen Onlineformular eingeben, bzw. schon
            bei dem Single-Sign-On-Anbieter angemeldet sind
            und die Single-Sign-On-Anmeldung via
            Schaltfläche bestätigen.
          </p>
          <p>
            Die Authentifizierung erfolgt direkt bei dem
            jeweiligen Single-Sign-On-Anbieter. Im Rahmen
            einer solchen Authentifizierung erhalten wir
            eine Nutzer-ID mit der Information, dass der
            Nutzer unter dieser Nutzer-ID beim jeweiligen
            Single-Sign-On-Anbieter eingeloggt ist und eine
            für uns für andere Zwecke nicht weiter nutzbare
            ID (sog 'User Handle“). Ob uns zusätzliche Daten
            übermittelt werden, hängt allein von dem
            genutzten Single-Sign-On-Verfahren ab, von den
            gewählten Datenfreigaben im Rahmen der
            Authentifizierung und zudem davon, welche Daten
            Nutzer in den Privatsphäre- oder sonstigen
            Einstellungen des Nutzerkontos beim
            Single-Sign-On-Anbieter freigegeben haben. Es
            können je nach Single-Sign-On-Anbieter und der
            Wahl der Nutzer verschiedene Daten sein, in der
            Regel sind es die E-Mail-Adresse und der
            Benutzername. Das im Rahmen des
            Single-Sign-On-Verfahrens eingegebene Passwort
            bei dem Single-Sign-On-Anbieter ist für uns
            weder einsehbar, noch wird es von uns
            gespeichert.
          </p>
          <p>
            Die Nutzer werden gebeten, zu beachten, dass
            deren bei uns gespeicherte Angaben automatisch
            mit ihrem Nutzerkonto beim
            Single-Sign-On-Anbieter abgeglichen werden
            können, dies jedoch nicht immer möglich ist oder
            tatsächlich erfolgt. Ändern sich z.B. die
            E-Mail-Adressen der Nutzer, müssen sie diese
            manuell in ihrem Nutzerkonto bei uns ändern.
          </p>
          <p>
            Die Single-Sign-On-Anmeldung können wir, sofern
            mit den Nutzern vereinbart, im Rahmen der oder
            vor der Vertragserfüllung einsetzen, soweit die
            Nutzer darum gebeten wurden, im Rahmen einer
            Einwilligung verarbeiten und setzen sie
            ansonsten auf Grundlage der berechtigten
            Interessen unsererseits und der Interessen der
            Nutzer an einem effektiven und sicheren
            Anmeldesystem ein.
          </p>
          <p>
            Sollten Nutzer sich einmal entscheiden, die
            Verknüpfung ihres Nutzerkontos beim
            Single-Sign-On-Anbieter nicht mehr für das
            Single-Sign-On-Verfahren nutzen zu wollen,
            müssen sie diese Verbindung innerhalb ihres
            Nutzerkontos beim Single-Sign-On-Anbieter
            aufheben. Möchten Nutzer deren Daten bei uns
            löschen, müssen sie ihre Registrierung bei uns
            kündigen.
          </p>
          <h3>Facebook Single-Sign-On:</h3>
          <p>
            {" "}
            Wir sind gemeinsam mit Facebook Irland Ltd. für
            die Erhebung oder den Erhalt im Rahmen einer
            Übermittlung (jedoch nicht die weitere
            Verarbeitung) von 'Event-Daten', die Facebook
            mittels der
            Facebook-Single-Sign-On-Anmeldeverfahren, die
            auf unserem Onlineangebot ausgeführt werden,
            erhebt oder im Rahmen einer Übermittlung zu
            folgenden Zwecken erhält, gemeinsam
            verantwortlich: a) Anzeige von Inhalten
            Werbeinformationen, die den mutmaßlichen
            Interessen der Nutzer entsprechen; b) Zustellung
            kommerzieller und transaktionsbezogener
            Nachrichten (z. B. Ansprache von Nutzern via
            Facebook-Messenger); c) Verbesserung der
            Anzeigenauslieferung und Personalisierung von
            Funktionen und Inhalten (z. B. Verbesserung der
            Erkennung, welche Inhalte oder
            Werbeinformationen mutmaßlich den Interessen der
            Nutzer entsprechen). Wir haben mit Facebook eine
            spezielle Vereinbarung abgeschlossen ('Zusatz
            für Verantwortliche',{" "}
            <a
              href="https://www.facebook.com/legal/controller_addendum"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.facebook.com/legal/controller_addendum
            </a>
            ), in der insbesondere geregelt wird, welche
            Sicherheitsmaßnahmen Facebook beachten muss (
            <a
              href="https://www.facebook.com/legal/terms/data_security_terms"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.facebook.com/legal/terms/data_security_terms
            </a>
            ) und in der Facebook sich bereit erklärt hat
            die Betroffenenrechte zu erfüllen (d. h. Nutzer
            können z. B. Auskünfte oder Löschungsanfragen
            direkt an Facebook richten). Hinweis: Wenn
            Facebook uns Messwerte, Analysen und Berichte
            bereitstellt (die aggregiert sind, d. h. keine
            Angaben zu einzelnen Nutzern erhalten und für
            uns anonym sind), dann erfolgt diese
            Verarbeitung nicht im Rahmen der gemeinsamen
            Verantwortlichkeit, sondern auf Grundlage eines
            Auftragsverarbeitungsvertrages
            ('Datenverarbeitungsbedingungen ',{" "}
            <a
              href="https://www.facebook.com/legal/terms/dataprocessing"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.facebook.com/legal/terms/dataprocessing
            </a>
            ), der 'Datensicherheitsbedingungen' (
            <a
              href="https://www.facebook.com/legal/terms/data_security_terms"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.facebook.com/legal/terms/data_security_terms
            </a>
            ) sowie im Hinblick auf die Verarbeitung in den
            USA auf Grundlage von Standardvertragsklauseln
            ('Facebook-EU-Datenübermittlungszusatz,{" "}
            <a
              href="https://www.facebook.com/legal/EU_data_transfer_addendum"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.facebook.com/legal/EU_data_transfer_addendum
            </a>
            ). Die Rechte der Nutzer (insbesondere auf
            Auskunft, Löschung, Widerspruch und Beschwerde
            bei zuständiger Aufsichtsbehörde), werden durch
            die Vereinbarungen mit Facebook nicht
            eingeschränkt.
          </p>
          <h3>Instagram Single-Sign-On:</h3>
          <p>
            {" "}
            Wir sind gemeinsam mit Facebook Irland Ltd. für
            die Erhebung oder den Erhalt im Rahmen einer
            Übermittlung (jedoch nicht die weitere
            Verarbeitung) von 'Event-Daten', die Facebook
            mittels der
            Instagram-Single-Sign-On-Anmeldeverfahren, die
            auf unserem Onlineangebot ausgeführt werden,
            erhebt oder im Rahmen einer Übermittlung zu
            folgenden Zwecken erhält, gemeinsam
            verantwortlich: a) Anzeige von Inhalten
            Werbeinformationen, die den mutmaßlichen
            Interessen der Nutzer entsprechen; b) Zustellung
            kommerzieller und transaktionsbezogener
            Nachrichten (z. B. Ansprache von Nutzern via
            Facebook-Messenger); c) Verbesserung der
            Anzeigenauslieferung und Personalisierung von
            Funktionen und Inhalten (z. B. Verbesserung der
            Erkennung, welche Inhalte oder
            Werbeinformationen mutmaßlich den Interessen der
            Nutzer entsprechen). Wir haben mit Facebook eine
            spezielle Vereinbarung abgeschlossen ('Zusatz
            für Verantwortliche',{" "}
            <a
              href="https://www.facebook.com/legal/controller_addendum"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.facebook.com/legal/controller_addendum
            </a>
            ), in der insbesondere geregelt wird, welche
            Sicherheitsmaßnahmen Facebook beachten muss ({" "}
            <a
              href="https://www.facebook.com/legal/terms/data_security_terms"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.facebook.com/legal/terms/data_security_terms
            </a>
            ) und in der Facebook sich bereit erklärt hat
            die Betroffenenrechte zu erfüllen (d. h. Nutzer
            können z. B. Auskünfte oder Löschungsanfragen
            direkt an Facebook richten). Hinweis: Wenn
            Facebook uns Messwerte, Analysen und Berichte
            bereitstellt (die aggregiert sind, d. h. keine
            Angaben zu einzelnen Nutzern erhalten und für
            uns anonym sind), dann erfolgt diese
            Verarbeitung nicht im Rahmen der gemeinsamen
            Verantwortlichkeit, sondern auf Grundlage eines
            Auftragsverarbeitungsvertrages
            ('Datenverarbeitungsbedingungen ',{" "}
            <a
              href="https://www.facebook.com/legal/terms/dataprocessing"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.facebook.com/legal/terms/dataprocessing
            </a>
            ) , der 'Datensicherheitsbedingungen' ({" "}
            <a
              href="https://www.facebook.com/legal/terms/data_security_terms"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.facebook.com/legal/terms/data_security_terms
            </a>
            ) sowie im Hinblick auf die Verarbeitung in den
            USA auf Grundlage von Standardvertragsklauseln
            ('Facebook-EU-Datenübermittlungszusatz,{" "}
            <a
              href="https://www.facebook.com/legal/EU_data_transfer_addendum"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.facebook.com/legal/EU_data_transfer_addendum
            </a>
            ). Die Rechte der Nutzer (insbesondere auf
            Auskunft, Löschung, Widerspruch und Beschwerde
            bei zuständiger Aufsichtsbehörde), werden durch
            die Vereinbarungen mit Facebook nicht
            eingeschränkt.
          </p>
          <ul className="m-elements">
            <li>
              <h3>Verarbeitete Datenarten:</h3>
              <p>
                {" "}
                Bestandsdaten (z.B. Namen, Adressen),
                Kontaktdaten (z.B. E-Mail, Telefonnummern),
                Event-Daten (Facebook) ('Event-Daten' sind
                Daten, die z. B. via Facebook-Pixel (via
                Apps oder auf anderen Wegen) von uns an
                Facebook übermittelt werden können und sich
                auf Personen oder deren Handlungen beziehen;
                Zu den Daten gehören z. B. Angaben über
                Besuche auf Websites, Interaktionen mit
                Inhalten, Funktionen, Installationen von
                Apps, Käufe von Produkten, etc.; die
                Event-Daten werden zwecks Bildung von
                Zielgruppen für Inhalte und
                Werbeinformationen (Custom Audiences)
                verarbeitet; Event Daten beinhalten nicht
                die eigentlichen Inhalte (wie z. B.
                verfasste Kommentare), keine
                Login-Informationen und keine
                Kontaktinformationen (also keine Namen,
                E-Mail-Adressen und Telefonnummern). Event
                Daten werden durch Facebook nach maximal
                zwei Jahren gelöscht, die aus ihnen
                gebildeten Zielgruppen mit der Löschung
                unseres Facebook-Kontos).
              </p>
            </li>
            <li>
              <h3>Betroffene Personen:</h3>
              <p>
                {" "}
                Nutzer (z.B. Webseitenbesucher, Nutzer von
                Onlinediensten).
              </p>
            </li>
            <li>
              <h3>Zwecke der Verarbeitung:</h3>
              <p>
                {" "}
                Erbringung vertragliche Leistungen und
                Kundenservice, Anmeldeverfahren.
              </p>
            </li>
            <li>
              <h3>Rechtsgrundlagen:</h3>
              <p>
                {" "}
                Einwilligung (Art. 6 Abs. 1 S. 1 lit. a.
                DSGVO), Vertragserfüllung und
                vorvertragliche Anfragen (Art. 6 Abs. 1 S. 1
                lit. b. DSGVO), Berechtigte Interessen (Art.
                6 Abs. 1 S. 1 lit. f. DSGVO).
              </p>
            </li>
          </ul>
          <h2>Eingesetzte Dienste und Diensteanbieter:</h2>
          <ul className="m-elements">
            <li>
              <h3>Facebook Single-Sign-On:</h3>
              <p>
                {" "}
                Authentifizierungsdienst; Dienstanbieter:{" "}
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://www.facebook.com
                </a>
                , Facebook Ireland Ltd., 4 Grand Canal
                Square, Grand Canal Harbour, Dublin 2,
                Irland, Mutterunternehmen: Facebook, 1
                Hacker Way, Menlo Park, CA 94025, USA;
                Website:{" "}
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://www.facebook.com
                </a>
                ; Datenschutzerklärung:{" "}
                <a
                  href="https://www.facebook.com/about/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://www.facebook.com/about/privacy
                </a>
                ; Widerspruchsmöglichkeit (Opt-Out):{" "}
                <a
                  href="https://www.facebook.com/settings?tab=ads"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://www.facebook.com/settings?tab=ads
                </a>
                .
              </p>
            </li>
            <li>
              <h3>Google Single-Sign-On:</h3>
              <p>
                {" "}
                Authentifizierungsdienst; Dienstanbieter:
                Google Ireland Limited, Gordon House, Barrow
                Street, Dublin 4, Irland, Mutterunternehmen:
                Google LLC, 1600 Amphitheatre Parkway,
                Mountain View, CA 94043, USA; Website:{" "}
                <a
                  href="https://www.google.de"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://www.google.de
                </a>
                ; Datenschutzerklärung:{" "}
                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://policies.google.com/privacy
                </a>
                ; Widerspruchsmöglichkeit (Opt-Out):
                Einstellungen für die Darstellung von
                Werbeeinblendungen:{" "}
                <a
                  href="https://adssettings.google.com/authenticated"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://adssettings.google.com/authenticated
                </a>
                .
              </p>
            </li>
            <li>
              <h3>Instagram Single-Sign-On:</h3>
              <p>
                {" "}
                Authentifizierungsdienst; Dienstanbieter:
                Instagram Inc., 1601 Willow Road, Menlo
                Park, CA, 94025, USA; Website:{" "}
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://www.instagram.com
                </a>
                ; Datenschutzerklärung:{" "}
                <a
                  href="https://instagram.com/about/legal/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://instagram.com/about/legal/privacy
                </a>
                .
              </p>
            </li>
            <li>
              <h3>Microsoft Single-Sign-On:</h3>
              <p>
                {" "}
                Authentifizierungsdienst; Dienstanbieter:
                Microsoft Corporation, One Microsoft Way,
                Redmond, WA 98052-6399 USA; Website:{" "}
                <a
                  href="https://www.microsoft.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://www.microsoft.com
                </a>
                ; Datenschutzerklärung:{" "}
                <a
                  href="https://privacy.microsoft.com/de-de/privacystatement"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://privacy.microsoft.com/de-de/privacystatement
                </a>
                , Sicherheitshinweise:{" "}
                <a
                  href="https://www.microsoft.com/de-de/trustcenter"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://www.microsoft.com/de-de/trustcenter
                </a>
                .
              </p>
            </li>
            <li>
              <h3>Twitter Single-Sign-On:</h3>
              <p>
                {" "}
                Authentifizierungsdienst; Dienstanbieter:
                Twitter Inc., 1355 Market Street, Suite 900,
                San Francisco, CA 94103, USA; Website:{" "}
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://twitter.com
                </a>
                ; Datenschutzerklärung:{" "}
                <a
                  href="https://twitter.com/de/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://twitter.com/de/privacy
                </a>
                ; Widerspruchsmöglichkeit (Opt-Out):{" "}
                <a
                  href="https://twitter.com/personalization"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://twitter.com/personalization
                </a>
                .
              </p>
            </li>
          </ul>
          <h2 id="m104">Blogs und Publikationsmedien</h2>
          <p>
            Wir nutzen Blogs oder vergleichbare Mittel der
            Onlinekommunikation und Publikation (nachfolgend
            'Publikationsmedium'). Die Daten der Leser
            werden für die Zwecke des Publikationsmediums
            nur insoweit verarbeitet, als es für dessen
            Darstellung und die Kommunikation zwischen
            Autoren und Lesern oder aus Gründen der
            Sicherheit erforderlich ist. Im Übrigen
            verweisen wir auf die Informationen zur
            Verarbeitung der Besucher unseres
            Publikationsmediums im Rahmen dieser
            Datenschutzhinweise.
          </p>
          <h3>Kommentare und Beiträge:</h3>
          <p>
            Wenn Nutzer Kommentare oder sonstige Beiträge
            hinterlassen, können ihre IP-Adressen auf
            Grundlage unserer berechtigten Interessen
            gespeichert werden. Das erfolgt zu unserer
            Sicherheit, falls jemand in Kommentaren und
            Beiträgen widerrechtliche Inhalte hinterlässt
            (Beleidigungen, verbotene politische Propaganda
            etc.). In diesem Fall können wir selbst für den
            Kommentar oder Beitrag belangt werden und sind
            daher an der Identität des Verfassers
            interessiert.
          </p>
          <p>
            Des Weiteren behalten wir uns vor, auf Grundlage
            unserer berechtigten Interessen die Angaben der
            Nutzer zwecks Spamerkennung zu verarbeiten.
          </p>
          <p>
            Auf derselben Rechtsgrundlage behalten wir uns
            vor, im Fall von Umfragen die IP-Adressen der
            Nutzer für deren Dauer zu speichern und Cookies
            zu verwenden, um Mehrfachabstimmungen zu
            vermeiden.
          </p>
          <p>
            Die im Rahmen der Kommentare und Beiträge
            mitgeteilten Informationen zur Person, etwaige
            Kontakt- sowie Webseiteninformationen als auch
            die inhaltlichen Angaben werden von uns bis zum
            Widerspruch der Nutzer dauerhaft gespeichert.
          </p>
          <h3>Kommentarabonnements:</h3>
          <p>
            {" "}
            Die Nachfolgekommentare können von Nutzern mit
            deren Einwilligung abonniert werden. Die Nutzer
            erhalten eine Bestätigungsemail, um zu
            überprüfen, ob sie der Inhaber der eingegebenen
            Emailadresse sind. Nutzer können laufende
            Kommentarabonnements jederzeit abbestellen. Die
            Bestätigungsemail wird Hinweise zu den
            Widerrufsmöglichkeiten enthalten. Für die Zwecke
            des Nachweises der Einwilligung der Nutzer
            speichern wir den Anmeldezeitpunkt nebst der
            IP-Adresse der Nutzer und löschen diese
            Informationen, wenn Nutzer sich von dem
            Abonnement abmelden.
          </p>
          <p>
            Sie können den Empfang unseres Abonnements
            jederzeit kündigen, d.h., Ihre Einwilligungen
            widerrufen. Wir können die ausgetragenen
            E-Mail-Adressen bis zu drei Jahren auf Grundlage
            unserer berechtigten Interessen speichern, bevor
            wir sie löschen, um eine ehemals gegebene
            Einwilligung nachweisen zu können. Die
            Verarbeitung dieser Daten wird auf den Zweck
            einer möglichen Abwehr von Ansprüchen
            beschränkt. Ein individueller Löschungsantrag
            ist jederzeit möglich, sofern zugleich das
            ehemalige Bestehen einer Einwilligung bestätigt
            wird.
          </p>
          <h3>Profilbilder von Gravatar:</h3>
          <p>
            Wir setzen innerhalb unseres Onlineangebotes und
            insbesondere im Blog den Dienst Gravatar ein.
          </p>
          <p>
            Gravatar ist ein Dienst, bei dem sich Nutzer
            anmelden und Profilbilder und ihre
            E-Mail-Adressen hinterlegen können. Wenn Nutzer
            mit der jeweiligen E-Mail-Adresse auf anderen
            Onlinepräsenzen (vor allem in Blogs) Beiträge
            oder Kommentare hinterlassen, können deren
            Profilbilder neben den Beiträgen oder
            Kommentaren dargestellt werden. Hierzu wird die
            von den Nutzern mitgeteilte E-Mail-Adresse an
            Gravatar zwecks Prüfung, ob zu ihr ein Profil
            gespeichert ist, verschlüsselt übermittelt. Dies
            ist der einzige Zweck der Übermittlung der
            E-Mail-Adresse. Sie wird nicht für andere Zwecke
            verwendet, sondern danach gelöscht.
          </p>
          <p>
            Die Nutzung von Gravatar erfolgt auf Grundlage
            unserer berechtigten Interessen, da wir mit
            Hilfe von Gravatar den Beitrags- und
            Kommentarverfassern die Möglichkeit bieten, ihre
            Beiträge mit einem Profilbild zu
            personalisieren.
          </p>
          <p>
            Durch die Anzeige der Bilder bringt Gravatar die
            IP-Adresse der Nutzer in Erfahrung, da dies für
            eine Kommunikation zwischen einem Browser und
            einem Onlineservice notwendig ist.
          </p>
          <p>
            Wenn Nutzer nicht möchten, dass ein mit ihrer
            E-Mail-Adresse bei Gravatar verknüpftes
            Benutzerbild in den Kommentaren erscheint,
            sollten sie zum Kommentieren eine E-Mail-Adresse
            nutzen, welche nicht bei Gravatar hinterlegt
            ist. Wir weisen ferner darauf hin, dass es auch
            möglich ist eine anonyme oder gar keine
            E-Mail-Adresse zu verwenden, falls die Nutzer
            nicht wünschen, dass die eigene E-Mail-Adresse
            an Gravatar übersendet wird. Nutzer können die
            Übertragung der Daten komplett verhindern, indem
            sie unser Kommentarsystem nicht nutzen.
          </p>
          <ul className="m-elements">
            <li>
              <h3>Verarbeitete Datenarten:</h3>
              <p>
                {" "}
                Bestandsdaten (z.B. Namen, Adressen),
                Kontaktdaten (z.B. E-Mail, Telefonnummern),
                Inhaltsdaten (z.B. Eingaben in
                Onlineformularen), Nutzungsdaten (z.B.
                besuchte Webseiten, Interesse an Inhalten,
                Zugriffszeiten), Meta-/Kommunikationsdaten
                (z.B. Geräte-Informationen, IP-Adressen).
              </p>
            </li>
            <li>
              <h3>Betroffene Personen:</h3>
              <p>
                {" "}
                Nutzer (z.B. Webseitenbesucher, Nutzer von
                Onlinediensten).
              </p>
            </li>
            <li>
              <h3>Zwecke der Verarbeitung:</h3>
              <p>
                {" "}
                Erbringung vertragliche Leistungen und
                Kundenservice, Feedback (z.B. Sammeln von
                Feedback via Online-Formular),
                Sicherheitsmaßnahmen, Verwaltung und
                Beantwortung von Anfragen, Kontaktanfragen
                und Kommunikation, Bereitstellung unseres
                Onlineangebotes und Nutzerfreundlichkeit.
              </p>
            </li>
            <li>
              <h3>Rechtsgrundlagen:</h3>
              <p>
                {" "}
                Vertragserfüllung und vorvertragliche
                Anfragen (Art. 6 Abs. 1 S. 1 lit. b. DSGVO),
                Berechtigte Interessen (Art. 6 Abs. 1 S. 1
                lit. f. DSGVO), Einwilligung (Art. 6 Abs. 1
                S. 1 lit. a. DSGVO).
              </p>
            </li>
          </ul>
          <h2>Eingesetzte Dienste und Diensteanbieter:</h2>
          <ul className="m-elements">
            <li>
              <h3>Profilbilder von Gravatar:</h3>
              <p>
                {" "}
                Profilbilder; Dienstanbieter: Automattic
                Inc., 60 29th Street #343, San Francisco, CA
                94110, USA; Website:{" "}
                <a
                  href="https://automattic.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://automattic.com
                </a>
                ; Datenschutzerklärung:{" "}
                <a
                  href="https://automattic.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://automattic.com/privacy
                </a>
                .
              </p>
            </li>
          </ul>
          <h2 id="m182">Kontaktaufnahme</h2>
          <p>
            Bei der Kontaktaufnahme mit uns (z.B. per
            Kontaktformular, E-Mail, Telefon oder via
            soziale Medien) werden die Angaben der
            anfragenden Personen verarbeitet, soweit dies
            zur Beantwortung der Kontaktanfragen und
            etwaiger angefragter Maßnahmen erforderlich ist.
          </p>
          <p>
            Die Beantwortung der Kontaktanfragen im Rahmen
            von vertraglichen oder vorvertraglichen
            Beziehungen erfolgt zur Erfüllung unserer
            vertraglichen Pflichten oder zur Beantwortung
            von (vor)vertraglichen Anfragen und im Übrigen
            auf Grundlage der berechtigten Interessen an der
            Beantwortung der Anfragen.
          </p>
          <ul className="m-elements">
            <li>
              <h3>Verarbeitete Datenarten:</h3>
              <p>
                {" "}
                Bestandsdaten (z.B. Namen, Adressen),
                Kontaktdaten (z.B. E-Mail, Telefonnummern),
                Inhaltsdaten (z.B. Eingaben in
                Onlineformularen), Nutzungsdaten (z.B.
                besuchte Webseiten, Interesse an Inhalten,
                Zugriffszeiten), Meta-/Kommunikationsdaten
                (z.B. Geräte-Informationen, IP-Adressen).
              </p>
            </li>
            <li>
              <h3>Betroffene Personen:</h3>
              <p> Kommunikationspartner.</p>
            </li>
            <li>
              <h3>Zwecke der Verarbeitung:</h3>{" "}
              <p>Kontaktanfragen und Kommunikation.</p>
            </li>
            <li>
              <h3>Rechtsgrundlagen:</h3>
              <p>
                {" "}
                Vertragserfüllung und vorvertragliche
                Anfragen (Art. 6 Abs. 1 S. 1 lit. b. DSGVO),
                Berechtigte Interessen (Art. 6 Abs. 1 S. 1
                lit. f. DSGVO).
              </p>
            </li>
          </ul>
          <h2 id="m391">Kommunikation via Messenger</h2>
          <p>
            Wir setzen zu Zwecken der Kommunikation
            Messenger ein und bitten daher darum, die
            nachfolgenden Hinweise zur Funktionsfähigkeit
            der Messenger, zur Verschlüsselung, zur Nutzung
            der Metadaten der Kommunikation und zu Ihren
            Widerspruchsmöglichkeiten zu beachten.
          </p>
          <p>
            Sie können uns auch auf alternativen Wegen, z.B.
            via Telefon oder E-Mail, kontaktieren. Bitte
            nutzen Sie die Ihnen mitgeteilten
            Kontaktmöglichkeiten oder die innerhalb unseres
            Onlineangebotes angegebenen
            Kontaktmöglichkeiten.
          </p>
          <p>
            Im Fall einer Ende-zu-Ende-Verschlüsselung von
            Inhalten (d.h., der Inhalt Ihrer Nachricht und
            Anhänge) weisen wir darauf hin, dass die
            Kommunikationsinhalte (d.h., der Inhalt der
            Nachricht und angehängte Bilder) von Ende zu
            Ende verschlüsselt werden. Das bedeutet, dass
            der Inhalt der Nachrichten nicht einsehbar ist,
            nicht einmal durch die Messenger-Anbieter
            selbst. Sie sollten immer eine aktuelle Version
            der Messenger mit aktivierter Verschlüsselung
            nutzen, damit die Verschlüsselung der
            Nachrichteninhalte sichergestellt ist.
          </p>
          <p>
            Wir weisen unsere Kommunikationspartner jedoch
            zusätzlich darauf hin, dass die Anbieter der
            Messenger zwar nicht den Inhalt einsehen, aber
            in Erfahrung bringen können, dass und wann
            Kommunikationspartner mit uns kommunizieren
            sowie technische Informationen zum verwendeten
            Gerät der Kommunikationspartner und je nach
            Einstellungen ihres Gerätes auch
            Standortinformationen (sogenannte Metadaten)
            verarbeitet werden.
          </p>
          <h3>Hinweise zu Rechtsgrundlagen: </h3>
          <p>
            {" "}
            Sofern wir Kommunikationspartner vor der
            Kommunikation mit ihnen via Messenger um eine
            Erlaubnis bitten, ist die Rechtsgrundlage
            unserer Verarbeitung ihrer Daten deren
            Einwilligung. Im Übrigen, falls wir nicht um
            eine Einwilligung bitten und sie z.B. von sich
            aus Kontakt mit uns aufnehmen, nutzen wir
            Messenger im Verhältnis zu unseren
            Vertragspartnern sowie im Rahmen der
            Vertragsanbahnung als eine vertragliche Maßnahme
            und im Fall anderer Interessenten und
            Kommunikationspartner auf Grundlage unserer
            berechtigten Interessen an einer schnellen und
            effizienten Kommunikation und Erfüllung der
            Bedürfnisse unser Kommunikationspartner an der
            Kommunikation via Messenger. Ferner weisen wir
            Sie darauf hin, dass wir die uns mitgeteilten
            Kontaktdaten ohne Ihre Einwilligung nicht
            erstmalig an die Messenger übermitteln.
          </p>
          <h3>Widerruf, Widerspruch und Löschung:</h3>
          <p>
            {" "}
            Sie können jederzeit eine erteilte Einwilligung
            widerrufen und der Kommunikation mit uns via
            Messenger jederzeit widersprechen. Im Fall der
            Kommunikation via Messenger löschen wir die
            Nachrichten entsprechend unseren generellen
            Löschrichtlinien (d.h. z.B., wie oben
            beschrieben, nach Ende vertraglicher
            Beziehungen, im Kontext von
            Archivierungsvorgaben etc.) und sonst, sobald
            wir davon ausgehen können, etwaige Auskünfte der
            Kommunikationspartner beantwortet zu haben, wenn
            kein Rückbezug auf eine vorhergehende
            Konversation zu erwarten ist und der Löschung
            keine gesetzlichen Aufbewahrungspflichten
            entgegenstehen.
          </p>
          <h3>
            Vorbehalt des Verweises auf andere
            Kommunikationswege:
          </h3>
          <p>
            Zum Abschluss möchten wir darauf hinweisen, dass
            wir uns aus Gründen Ihrer Sicherheit
            vorbehalten, Anfragen über Messenger nicht zu
            beantworten. Das ist der Fall, wenn z.B.
            Vertragsinterna besonderer Geheimhaltung
            bedürfen oder eine Antwort über Messenger den
            formellen Ansprüchen nicht genügt. In solchen
            Fällen verweisen wir Sie auf adäquatere
            Kommunikationswege.
          </p>
          <h3>Mastodon-Instanz:</h3>
          <p>
            {" "}
            Wir bieten eine sogenannte Instanz, also einen
            Server an, mittels dessen Teilnehmer des
            Mastodon-Netzwerks kommunizieren können. Wir
            weisen darauf hin, dass wir die Metadaten, d.h.,
            die Kommunikationspartner, den Zeitpunkt der
            Kommunikation und die IP-Adressen, soweit dies
            zum Betrieb der Instanz, zur Durchführung der
            Nachrichtenübermittlung und zur Gewährleistung
            der Sicherheit erforderlich ist, im Rahmen der
            Erbringung unser vertraglichen Pflichten
            verarbeiten.
          </p>
          <p>
            Vorbehaltlich anderweitiger Einstellungen
            sollten Mastodon-Nutzer davon ausgehen, dass
            deren Nachrichten und die Personen, denen sie
            folgen, öffentlich sind. Dies gilt nicht für
            Direktnachrichten, die zwischen den
            Mastodon-Nutzern gesendet werden. Alle
            Nachrichten sind im Klartext (d.h., nicht Ende
            zu Ende verschlüsselt) auf unserem Server
            gespeichert und werden nur zur Ausführung der
            Mastodon-Instanz verarbeitet. In diesem
            Zusammenhang erhalten die Administratoren der
            Instanz Einsicht in die folgenden Angaben zu
            jeweiligen Konten: Profilname, Anzeigename,
            Berechtigungsstufe auf der Instanz, hinterlegte
            E-Mail-Adresse, letzte IP-Adresse bei Aufruf der
            Instanz, Zeitpunkt des letzten Zugriffs auf die
            Instanz und die Größe der Dateianhänge.
          </p>
          <p>
            Es werden Cookies von einer Dauer von einem Jahr
            gespeichert, um die Nutzer der Instanz
            automatisch wiedererkennen zu können.
          </p>
          <p>
            Ferner bitten wir, zu beachten, dass wir nur für
            die unsere, nicht aber für andere
            Mastodon-Instanzen verantwortlich sind.
          </p>
          <ul className="m-elements">
            <li>
              <h3>Verarbeitete Datenarten:</h3>
              <p>
                {" "}
                Kontaktdaten (z.B. E-Mail, Telefonnummern),
                Nutzungsdaten (z.B. besuchte Webseiten,
                Interesse an Inhalten, Zugriffszeiten),
                Meta-/Kommunikationsdaten (z.B.
                Geräte-Informationen, IP-Adressen),
                Inhaltsdaten (z.B. Eingaben in
                Onlineformularen).
              </p>
            </li>
            <li>
              <h3>Betroffene Personen:</h3>{" "}
              <p>Kommunikationspartner.</p>
            </li>
            <li>
              <h3>Zwecke der Verarbeitung:</h3>{" "}
              <p>
                Kontaktanfragen und Kommunikation,
                Direktmarketing (z.B. per E-Mail oder
                postalisch).
              </p>
            </li>
            <li>
              <h3>Rechtsgrundlagen:</h3>
              <p>
                Einwilligung (Art. 6 Abs. 1 S. 1 lit. a.
                DSGVO), Berechtigte Interessen (Art. 6 Abs.
                1 S. 1 lit. f. DSGVO).
              </p>
            </li>
          </ul>
          <h2 id="m328">
            Plugins und eingebettete Funktionen sowie
            Inhalte
          </h2>
          <p>
            Wir binden in unser Onlineangebot Funktions- und
            Inhaltselemente ein, die von den Servern ihrer
            jeweiligen Anbieter (nachfolgend bezeichnet als
            'Drittanbieter”) bezogen werden. Dabei kann es
            sich zum Beispiel um Grafiken, Videos oder
            Social-Media-Schaltflächen sowie Beiträge
            handeln (nachfolgend einheitlich bezeichnet als
            'Inhalte”).
          </p>
          <p>
            Die Einbindung setzt immer voraus, dass die
            Drittanbieter dieser Inhalte die IP-Adresse der
            Nutzer verarbeiten, da sie ohne die IP-Adresse
            die Inhalte nicht an deren Browser senden
            könnten. Die IP-Adresse ist damit für die
            Darstellung dieser Inhalte oder Funktionen
            erforderlich. Wir bemühen uns, nur solche
            Inhalte zu verwenden, deren jeweilige Anbieter
            die IP-Adresse lediglich zur Auslieferung der
            Inhalte verwenden. Drittanbieter können ferner
            sogenannte Pixel-Tags (unsichtbare Grafiken,
            auch als 'Web Beacons' bezeichnet) für
            statistische oder Marketingzwecke verwenden.
            Durch die 'Pixel-Tags' können Informationen, wie
            der Besucherverkehr auf den Seiten dieser
            Webseite, ausgewertet werden. Die pseudonymen
            Informationen können ferner in Cookies auf dem
            Gerät der Nutzer gespeichert werden und unter
            anderem technische Informationen zum Browser und
            zum Betriebssystem, zu verweisenden Webseiten,
            zur Besuchszeit sowie weitere Angaben zur
            Nutzung unseres Onlineangebotes enthalten als
            auch mit solchen Informationen aus anderen
            Quellen verbunden werden.
          </p>
          <h3>Hinweise zu Rechtsgrundlagen:</h3>
          <p>
            {" "}
            Sofern wir die Nutzer um deren Einwilligung in
            den Einsatz der Drittanbieter bitten, ist die
            Rechtsgrundlage der Verarbeitung von Daten die
            Einwilligung. Ansonsten werden die Daten der
            Nutzer auf Grundlage unserer berechtigten
            Interessen (d.h. Interesse an effizienten,
            wirtschaftlichen und empfängerfreundlichen
            Leistungen) verarbeitet. In diesem Zusammenhang
            möchten wir Sie auch auf die Informationen zur
            Verwendung von Cookies in dieser
            Datenschutzerklärung hinweisen.
          </p>
          <h3>Facebook-Plugins und -Inhalte:</h3>
          <p>
            Wir sind gemeinsam mit Facebook Irland Ltd. für
            die Erhebung oder den Erhalt im Rahmen einer
            Übermittlung (jedoch nicht die weitere
            Verarbeitung) von 'Event-Daten', die Facebook
            mittels der Facebook-Social-Plugins (und
            Einbettungsfunktionen für Inhalte), die auf
            unserem Onlineangebot ausgeführt werden, erhebt
            oder im Rahmen einer Übermittlung zu folgenden
            Zwecken erhält, gemeinsam verantwortlich: a)
            Anzeige von Inhalten sowie Werbeinformationen,
            die den mutmaßlichen Interessen der Nutzer
            entsprechen; b) Zustellung kommerzieller und
            transaktionsbezogener Nachrichten (z. B.
            Ansprache von Nutzern via Facebook-Messenger);
            c) Verbesserung der Anzeigenauslieferung und
            Personalisierung von Funktionen und Inhalten (z.
            B. Verbesserung der Erkennung, welche Inhalte
            oder Werbeinformationen mutmaßlich den
            Interessen der Nutzer entsprechen). Wir haben
            mit Facebook eine spezielle Vereinbarung
            abgeschlossen ('Zusatz für Verantwortliche',{" "}
            <a
              href="https://www.facebook.com/legal/controller_addendum"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.facebook.com/legal/controller_addendum
            </a>
            ), in der insbesondere geregelt wird, welche
            Sicherheitsmaßnahmen Facebook beachten muss ({" "}
            <a
              href="https://www.facebook.com/legal/terms/data_security_terms"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.facebook.com/legal/terms/data_security_terms
            </a>
            ) und in der Facebook sich bereit erklärt hat
            die Betroffenenrechte zu erfüllen (d. h. Nutzer
            können z. B. Auskünfte oder Löschungsanfragen
            direkt an Facebook richten). Hinweis: Wenn
            Facebook uns Messwerte, Analysen und Berichte
            bereitstellt (die aggregiert sind, d. h. keine
            Angaben zu einzelnen Nutzern erhalten und für
            uns anonym sind), dann erfolgt diese
            Verarbeitung nicht im Rahmen der gemeinsamen
            Verantwortlichkeit, sondern auf Grundlage eines
            Auftragsverarbeitungsvertrages
            ('Datenverarbeitungsbedingungen ',{" "}
            <a
              href="https://www.facebook.com/legal/terms/dataprocessing"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.facebook.com/legal/terms/dataprocessing
            </a>
            ) , der 'Datensicherheitsbedingungen' ({" "}
            <a
              href="https://www.facebook.com/legal/terms/data_security_terms"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.facebook.com/legal/terms/data_security_terms
            </a>
            ) sowie im Hinblick auf die Verarbeitung in den
            USA auf Grundlage von Standardvertragsklauseln
            ('Facebook-EU-Datenübermittlungszusatz,{" "}
            <a
              href="https://www.facebook.com/legal/EU_data_transfer_addendum"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.facebook.com/legal/EU_data_transfer_addendum
            </a>
            ). Die Rechte der Nutzer (insbesondere auf
            Auskunft, Löschung, Widerspruch und Beschwerde
            bei zuständiger Aufsichtsbehörde), werden durch
            die Vereinbarungen mit Facebook nicht
            eingeschränkt.
          </p>
          <h3>Instagram-Plugins und -Inhalte:</h3>
          <p>
            {" "}
            Wir sind gemeinsam mit Facebook Irland Ltd. für
            die Erhebung oder den Erhalt im Rahmen einer
            Übermittlung (jedoch nicht die weitere
            Verarbeitung) von 'Event-Daten', die Facebook
            mittels Funktionen von Instagram (z. B.
            Einbettungsfunktionen für Inhalte), die auf
            unserem Onlineangebot ausgeführt werden, erhebt
            oder im Rahmen einer Übermittlung zu folgenden
            Zwecken erhält, gemeinsam verantwortlich: a)
            Anzeige von Inhalten sowie Werbeinformationen,
            die den mutmaßlichen Interessen der Nutzer
            entsprechen; b) Zustellung kommerzieller und
            transaktionsbezogener Nachrichten (z. B.
            Ansprache von Nutzern via Facebook-Messenger);
            c) Verbesserung der Anzeigenauslieferung und
            Personalisierung von Funktionen und Inhalten (z.
            B. Verbesserung der Erkennung, welche Inhalte
            oder Werbeinformationen mutmaßlich den
            Interessen der Nutzer entsprechen). Wir haben
            mit Facebook eine spezielle Vereinbarung
            abgeschlossen ('Zusatz für Verantwortliche',{" "}
            <a
              href="https://www.facebook.com/legal/controller_addendum"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.facebook.com/legal/controller_addendum
            </a>
            ), in der insbesondere geregelt wird, welche
            Sicherheitsmaßnahmen Facebook beachten muss ({" "}
            <a
              href="https://www.facebook.com/legal/terms/data_security_terms"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.facebook.com/legal/terms/data_security_terms
            </a>
            ) und in der Facebook sich bereit erklärt hat
            die Betroffenenrechte zu erfüllen (d. h. Nutzer
            können z. B. Auskünfte oder Löschungsanfragen
            direkt an Facebook richten). Hinweis: Wenn
            Facebook uns Messwerte, Analysen und Berichte
            bereitstellt (die aggregiert sind, d. h. keine
            Angaben zu einzelnen Nutzern erhalten und für
            uns anonym sind), dann erfolgt diese
            Verarbeitung nicht im Rahmen der gemeinsamen
            Verantwortlichkeit, sondern auf Grundlage eines
            Auftragsverarbeitungsvertrages
            ('Datenverarbeitungsbedingungen ',{" "}
            <a
              href="https://www.facebook.com/legal/terms/dataprocessing"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.facebook.com/legal/terms/dataprocessing
            </a>
            ) , der 'Datensicherheitsbedingungen' ({" "}
            <a
              href="https://www.facebook.com/legal/terms/data_security_terms"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.facebook.com/legal/terms/data_security_terms
            </a>
            ) sowie im Hinblick auf die Verarbeitung in den
            USA auf Grundlage von Standardvertragsklauseln
            ('Facebook-EU-Datenübermittlungszusatz,{" "}
            <a
              href="https://www.facebook.com/legal/EU_data_transfer_addendum"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.facebook.com/legal/EU_data_transfer_addendum
            </a>
            ). Die Rechte der Nutzer (insbesondere auf
            Auskunft, Löschung, Widerspruch und Beschwerde
            bei zuständiger Aufsichtsbehörde), werden durch
            die Vereinbarungen mit Facebook nicht
            eingeschränkt.
          </p>
          <ul className="m-elements">
            <li>
              <h3>Verarbeitete Datenarten:</h3>
              <p>
                {" "}
                Nutzungsdaten (z.B. besuchte Webseiten,
                Interesse an Inhalten, Zugriffszeiten),
                Meta-/Kommunikationsdaten (z.B.
                Geräte-Informationen, IP-Adressen),
                Event-Daten (Facebook) ('Event-Daten' sind
                Daten, die z. B. via Facebook-Pixel (via
                Apps oder auf anderen Wegen) von uns an
                Facebook übermittelt werden können und sich
                auf Personen oder deren Handlungen beziehen;
                Zu den Daten gehören z. B. Angaben über
                Besuche auf Websites, Interaktionen mit
                Inhalten, Funktionen, Installationen von
                Apps, Käufe von Produkten, etc.; die
                Event-Daten werden zwecks Bildung von
                Zielgruppen für Inhalte und
                Werbeinformationen (Custom Audiences)
                verarbeitet; Event Daten beinhalten nicht
                die eigentlichen Inhalte (wie z. B.
                verfasste Kommentare), keine
                Login-Informationen und keine
                Kontaktinformationen (also keine Namen,
                E-Mail-Adressen und Telefonnummern). Event
                Daten werden durch Facebook nach maximal
                zwei Jahren gelöscht, die aus ihnen
                gebildeten Zielgruppen mit der Löschung
                unseres Facebook-Kontos), Kontaktdaten (z.B.
                E-Mail, Telefonnummern), Inhaltsdaten (z.B.
                Eingaben in Onlineformularen), Bestandsdaten
                (z.B. Namen, Adressen).
              </p>
            </li>
            <li>
              <h3>Betroffene Personen:</h3>
              <p>
                {" "}
                Nutzer (z.B. Webseitenbesucher, Nutzer von
                Onlinediensten), Kommunikationspartner.
              </p>
            </li>
            <li>
              <h3>Zwecke der Verarbeitung:</h3>
              <p>
                {" "}
                Bereitstellung unseres Onlineangebotes und
                Nutzerfreundlichkeit, Erbringung
                vertragliche Leistungen und Kundenservice,
                Kontaktanfragen und Kommunikation,
                Direktmarketing (z.B. per E-Mail oder
                postalisch), Tracking (z.B.
                interessens-/verhaltensbezogenes Profiling,
                Nutzung von Cookies), Interessenbasiertes
                und verhaltensbezogenes Marketing, Profiling
                (Erstellen von Nutzerprofilen),
                Sicherheitsmaßnahmen, Verwaltung und
                Beantwortung von Anfragen.
              </p>
            </li>
            <li>
              <h3>Rechtsgrundlagen:</h3>
              <p>
                Berechtigte Interessen (Art. 6 Abs. 1 S. 1
                lit. f. DSGVO), Einwilligung (Art. 6 Abs. 1
                S. 1 lit. a. DSGVO), Vertragserfüllung und
                vorvertragliche Anfragen (Art. 6 Abs. 1 S. 1
                lit. b. DSGVO).
              </p>
            </li>
          </ul>
          <h2>Eingesetzte Dienste und Diensteanbieter:</h2>
          <ul className="m-elements">
            <li>
              <h3>Facebook-Plugins und -Inhalte:</h3>
              <p>
                {" "}
                Facebook Social Plugins und Inhalte - Hierzu
                können z.B. Inhalte wie Bilder, Videos oder
                Texte und Schaltflächen gehören, mit denen
                Nutzer Inhalte dieses Onlineangebotes
                innerhalb von Facebook teilen können. Die
                Liste und das Aussehen der Facebook Social
                Plugins können hier eingesehen werden:{" "}
                <a
                  href="https://developers.facebook.com/docs/plugins/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://developers.facebook.com/docs/plugins/
                </a>
                ; Dienstanbieter: Facebook Ireland Ltd., 4
                Grand Canal Square, Grand Canal Harbour,
                Dublin 2, Irland, Mutterunternehmen:
                Facebook, 1 Hacker Way, Menlo Park, CA
                94025, USA; Website:{" "}
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://www.facebook.com
                </a>
                ; Datenschutzerklärung:{" "}
                <a
                  href="https://www.facebook.com/about/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://www.facebook.com/about/privacy
                </a>
                ; Widerspruchsmöglichkeit (Opt-Out):
                Einstellungen für Werbeanzeigen:{" "}
                <a
                  href="https://www.facebook.com/settings?tab=ads"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://www.facebook.com/settings?tab=ads
                </a>
                .
              </p>
            </li>
            <li>
              <h3>Font Awesome:</h3>
              <p>
                {" "}
                Darstellung von Schriftarten und Symbolen;
                Dienstanbieter: Fonticons, Inc. ,6 Porter
                Road Apartment 3R, Cambridge, MA 02140, USA;
                Website:{" "}
                <a
                  href="https://fontawesome.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://fontawesome.com/
                </a>
                ; Datenschutzerklärung:{" "}
                <a
                  href="https://fontawesome.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://fontawesome.com/privacy
                </a>
                .
              </p>
            </li>
            <li>
              <h3>Giphy:</h3>
              <p>
                {" "}
                Eingebettete Plugins und -Inhalte - Hierzu
                können z.B. Inhalte wie Bilder, Videos oder
                Texte und Schaltflächen gehören;
                Dienstanbieter: Giphy, Inc., 416 West 13th
                Street, Suite 207 New York, NY 10014, USA;
                Website:{" "}
                <a
                  href="https://giphy.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://giphy.com
                </a>
                ; Datenschutzerklärung:{" "}
                <a
                  href="https://support.giphy.com/hc/en-us/articles/360032872931"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://support.giphy.com/hc/en-us/articles/360032872931
                </a>
                .
              </p>
            </li>
            <li>
              <h3>Google Fonts:</h3>
              <p>
                {" "}
                Wir binden die Schriftarten ('Google Fonts')
                des Anbieters Google ein, wobei die Daten
                der Nutzer allein zu Zwecken der Darstellung
                der Schriftarten im Browser der Nutzer
                verwendet werden. Die Einbindung erfolgt auf
                Grundlage unserer berechtigten Interessen an
                einer technisch sicheren, wartungsfreien und
                effizienten Nutzung von Schriftarten, deren
                einheitlicher Darstellung sowie unter
                Berücksichtigung möglicher lizenzrechtlicher
                Restriktionen für deren Einbindung.
                Dienstanbieter: Google Ireland Limited,
                Gordon House, Barrow Street, Dublin 4,
                Irland, Mutterunternehmen: Google LLC, 1600
                Amphitheatre Parkway, Mountain View, CA
                94043, USA; Website:{" "}
                <a
                  href="https://fonts.google.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://fonts.google.com/
                </a>
                ; Datenschutzerklärung:{" "}
                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://policies.google.com/privacy
                </a>
                .
              </p>
            </li>
            <li>
              <h3>Instagram-Plugins und -Inhalte:</h3>
              <p>
                Instagram Plugins und -Inhalte - Hierzu
                können z.B. Inhalte wie Bilder, Videos oder
                Texte und Schaltflächen gehören, mit denen
                Nutzer Inhalte dieses Onlineangebotes
                innerhalb von Instagram teilen können.
                Dienstanbieter:{" "}
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://www.instagram.com
                </a>
                , Instagram Inc., 1601 Willow Road, Menlo
                Park, CA, 94025, USA; Website:{" "}
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://www.instagram.com
                </a>
                ; Datenschutzerklärung:{" "}
                <a
                  href="https://instagram.com/about/legal/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://instagram.com/about/legal/privacy
                </a>
                .
              </p>
            </li>
            <li>
              <h3>LinkedIn-Plugins und -Inhalte:</h3>
              <p>
                {" "}
                LinkedIn-Plugins und -Inhalte- Hierzu können
                z.B. Inhalte wie Bilder, Videos oder Texte
                und Schaltflächen gehören, mit denen Nutzer
                Inhalte dieses Onlineangebotes innerhalb von
                LinkedIn teilen können. Dienstanbieter:
                LinkedIn Ireland Unlimited Company, Wilton
                Place, Dublin 2, Irland; Website:{" "}
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://www.linkedin.com
                </a>
                ; Datenschutzerklärung:{" "}
                <a
                  href="https://www.linkedin.com/legal/privacy-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://www.linkedin.com/legal/privacy-policy
                </a>
                ; Widerspruchsmöglichkeit (Opt-Out):{" "}
                <a
                  href="https://www.linkedin.com/psettings/guest-controls/retargeting-opt-out"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://www.linkedin.com/psettings/guest-controls/retargeting-opt-out
                </a>
                .
              </p>
            </li>
            <li>
              <h3>Twitter-Plugins und -Inhalte:</h3>
              <p>
                {" "}
                Twitter Plugins und -Schaltflächen - Hierzu
                können z.B. Inhalte wie Bilder, Videos oder
                Texte und Schaltflächen gehören, mit denen
                Nutzer Inhalte dieses Onlineangebotes
                innerhalb von Twitter teilen können.
                Dienstanbieter: Twitter Inc., 1355 Market
                Street, Suite 900, San Francisco, CA 94103,
                USA; Website:{" "}
                <a
                  href="https://twitter.com/de"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://twitter.com/de
                </a>
                ; Datenschutzerklärung:{" "}
                <a
                  href="https://twitter.com/de/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://twitter.com/de/privacy
                </a>
                .
              </p>
            </li>
            <li>
              <h3>Typekit-Schriftarten von Adobe:</h3>
              <p>
                {" "}
                Wir binden die Schriftarten ('Typekit
                fonts') des Anbieters Adobe ein, wobei die
                Daten der Nutzer allein zu Zwecken der
                Darstellung der Schriftarten im Browser der
                Nutzer verwendet werden. Die Einbindung
                erfolgt auf Grundlage unserer berechtigten
                Interessen an einer technisch sicheren,
                wartungsfreien und effizienten Nutzung von
                Schriftarten, deren einheitlicher
                Darstellung sowie unter Berücksichtigung
                möglicher lizenzrechtlicher Restriktionen
                für deren Einbindung. Dienstanbieter: Adobe
                Systems Software Ireland Limited, 4-6
                Riverwalk, Citywest Business Campus, Dublin
                24, Irland; Website:{" "}
                <a
                  href="https://www.adobe.com/de"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://www.adobe.com/de
                </a>
                ; Datenschutzerklärung:{" "}
                <a
                  href="https://www.adobe.com/de/privacy.html"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://www.adobe.com/de/privacy.html
                </a>
                .
              </p>
            </li>
            <li>
              <h3>YouTube-Videos:</h3>
              <p>
                {" "}
                Videoinhalte; Dienstanbieter: Google Ireland
                Limited, Gordon House, Barrow Street, Dublin
                4, Irland, Mutterunternehmen: Google LLC,
                1600 Amphitheatre Parkway, Mountain View, CA
                94043, USA; Website:{" "}
                <a
                  href="https://www.youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://www.youtube.com
                </a>
                ; Datenschutzerklärung:{" "}
                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://policies.google.com/privacy
                </a>
                ; Widerspruchsmöglichkeit (Opt-Out):
                Opt-Out-Plugin:{" "}
                <a
                  href="https://tools.google.com/dlpage/gaoptout?hl=de"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://tools.google.com/dlpage/gaoptout?hl=de
                </a>
                , Einstellungen für die Darstellung von
                Werbeeinblendungen:{" "}
                <a
                  href="https://adssettings.google.com/authenticated"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://adssettings.google.com/authenticated
                </a>
                .
              </p>
            </li>
          </ul>
          <h2 id="m12">Löschung von Daten</h2>
          <p>
            Die von uns verarbeiteten Daten werden nach
            Maßgabe der gesetzlichen Vorgaben gelöscht,
            sobald deren zur Verarbeitung erlaubten
            Einwilligungen widerrufen werden oder sonstige
            Erlaubnisse entfallen (z.B., wenn der Zweck der
            Verarbeitung dieser Daten entfallen ist oder sie
            für den Zweck nicht erforderlich sind).
          </p>
          <p>
            Sofern die Daten nicht gelöscht werden, weil sie
            für andere und gesetzlich zulässige Zwecke
            erforderlich sind, wird deren Verarbeitung auf
            diese Zwecke beschränkt. D.h., die Daten werden
            gesperrt und nicht für andere Zwecke
            verarbeitet. Das gilt z.B. für Daten, die aus
            handels- oder steuerrechtlichen Gründen
            aufbewahrt werden müssen oder deren Speicherung
            zur Geltendmachung, Ausübung oder Verteidigung
            von Rechtsansprüchen oder zum Schutz der Rechte
            einer anderen natürlichen oder juristischen
            Person erforderlich ist.
          </p>
          <p>
            Weitere Hinweise zu der Löschung von
            personenbezogenen Daten können ferner im Rahmen
            der einzelnen Datenschutzhinweise dieser
            Datenschutzerklärung erfolgen.
          </p>
          <h2 id="m15">
            Änderung und Aktualisierung der
            Datenschutzerklärung
          </h2>
          <p>
            Wir bitten Sie, sich regelmäßig über den Inhalt
            unserer Datenschutzerklärung zu informieren. Wir
            passen die Datenschutzerklärung an, sobald die
            Änderungen der von uns durchgeführten
            Datenverarbeitungen dies erforderlich machen.
            Wir informieren Sie, sobald durch die Änderungen
            eine Mitwirkungshandlung Ihrerseits (z.B.
            Einwilligung) oder eine sonstige individuelle
            Benachrichtigung erforderlich wird.
          </p>
          <p>
            Sofern wir in dieser Datenschutzerklärung
            Adressen und Kontaktinformationen von
            Unternehmen und Organisationen angeben, bitten
            wir zu beachten, dass die Adressen sich über die
            Zeit ändern können und bitten die Angaben vor
            Kontaktaufnahme zu prüfen.
          </p>
          <h2 id="m10">Rechte der betroffenen Personen</h2>
          <p>
            Ihnen stehen als Betroffene nach der DSGVO
            verschiedene Rechte zu, die sich insbesondere
            aus Art. 15 bis 21 DSGVO ergeben:
          </p>
          <ul>
            <li>
              <h3>Widerspruchsrecht:</h3>
              <p>
                {" "}
                Sie haben das Recht, aus Gründen, die sich
                aus Ihrer besonderen Situation ergeben,
                jederzeit gegen die Verarbeitung der Sie
                betreffenden personenbezogenen Daten, die
                aufgrund von Art. 6 Abs. 1 lit. e oder f
                DSGVO erfolgt, Widerspruch einzulegen; dies
                gilt auch für ein auf diese Bestimmungen
                gestütztes Profiling. Werden die Sie
                betreffenden personenbezogenen Daten
                verarbeitet, um Direktwerbung zu betreiben,
                haben Sie das Recht, jederzeit Widerspruch
                gegen die Verarbeitung der Sie betreffenden
                personenbezogenen Daten zum Zwecke
                derartiger Werbung einzulegen; dies gilt
                auch für das Profiling, soweit es mit
                solcher Direktwerbung in Verbindung steht.
              </p>
            </li>
            <li>
              <h3>Widerrufsrecht bei Einwilligungen:</h3>
              <p>
                {" "}
                Sie haben das Recht, erteilte Einwilligungen
                jederzeit zu widerrufen.
              </p>
            </li>
            <li>
              <h3>Auskunftsrecht:</h3>
              <p>
                Sie haben das Recht, eine Bestätigung
                darüber zu verlangen, ob betreffende Daten
                verarbeitet werden und auf Auskunft über
                diese Daten sowie auf weitere Informationen
                und Kopie der Daten entsprechend den
                gesetzlichen Vorgaben.
              </p>
            </li>
            <li>
              <h3>Recht auf Berichtigung:</h3>
              <p>
                {" "}
                Sie haben entsprechend den gesetzlichen
                Vorgaben das Recht, die Vervollständigung
                der Sie betreffenden Daten oder die
                Berichtigung der Sie betreffenden
                unrichtigen Daten zu verlangen.
              </p>
            </li>
            <li>
              <h3>
                Recht auf Löschung und Einschränkung der
                Verarbeitung:
              </h3>
              <p>
                Sie haben nach Maßgabe der gesetzlichen
                Vorgaben das Recht, zu verlangen, dass Sie
                betreffende Daten unverzüglich gelöscht
                werden, bzw. alternativ nach Maßgabe der
                gesetzlichen Vorgaben eine Einschränkung der
                Verarbeitung der Daten zu verlangen.
              </p>
            </li>
            <li>
              <h3>Recht auf Datenübertragbarkeit:</h3>
              <p>
                {" "}
                Sie haben das Recht, Sie betreffende Daten,
                die Sie uns bereitgestellt haben, nach
                Maßgabe der gesetzlichen Vorgaben in einem
                strukturierten, gängigen und
                maschinenlesbaren Format zu erhalten oder
                deren Übermittlung an einen anderen
                Verantwortlichen zu fordern.
              </p>
            </li>
            <li>
              <h3>Beschwerde bei Aufsichtsbehörde:</h3>
              <p>
                Sie haben ferner nach Maßgabe der
                gesetzlichen Vorgaben das Recht, bei einer
                Aufsichtsbehörde, insbesondere in dem
                Mitgliedstaat Ihres gewöhnlichen
                Aufenthaltsorts, Ihres Arbeitsplatzes oder
                des Orts des mutmaßlichen Verstoßes
                Beschwerde einzulegen, wenn Sie der Ansicht
                sind, dass die Verarbeitung der Sie
                betreffenden personenbezogenen Daten gegen
                die DSGVO verstößt.
              </p>
            </li>
          </ul>
          <h2 id="m42">Begriffsdefinitionen</h2>
          <p>
            In diesem Abschnitt erhalten Sie eine Übersicht
            über die in dieser Datenschutzerklärung
            verwendeten Begrifflichkeiten. Viele der
            Begriffe sind dem Gesetz entnommen und vor allem
            im Art. 4 DSGVO definiert. Die gesetzlichen
            Definitionen sind verbindlich. Die nachfolgenden
            Erläuterungen sollen dagegen vor allem dem
            Verständnis dienen. Die Begriffe sind
            alphabetisch sortiert.
          </p>
          <ul className="glossary">
            <li>
              <h3>Content Delivery Network (CDN):</h3>
              <p>
                {" "}
                Ein 'Content Delivery Network' (CDN) ist ein
                Dienst, mit dessen Hilfe Inhalte eines
                Onlineangebotes, insbesondere große
                Mediendateien, wie Grafiken oder
                Programm-Skripte mit Hilfe regional
                verteilter und über das Internet verbundener
                Server, schneller und sicherer ausgeliefert
                werden können.
              </p>
            </li>
            <li>
              <h3>
                Interessenbasiertes und verhaltensbezogenes
                Marketing:
              </h3>
              <p>
                Von interessens- und/oder
                verhaltensbezogenem Marketing spricht man,
                wenn potentielle Interessen von Nutzern an
                Anzeigen und sonstigen Inhalten möglichst
                genau vorbestimmt werden. Dies geschieht
                anhand von Angaben zu deren Vorverhalten
                (z.B. Aufsuchen von bestimmten Webseiten und
                Verweilen auf diesen, Kaufverhaltens oder
                Interaktion mit anderen Nutzern), die in
                einem sogenannten Profil gespeichert werden.
                Zu diesen Zwecken werden im Regelfall
                Cookies eingesetzt.
              </p>
            </li>
            <li>
              <h3>Personenbezogene Daten:</h3>
              <p>
                'Personenbezogene Daten' sind alle
                Informationen, die sich auf eine
                identifizierte oder identifizierbare
                natürliche Person (im Folgenden 'betroffene
                Person“) beziehen; als identifizierbar wird
                eine natürliche Person angesehen, die direkt
                oder indirekt, insbesondere mittels
                Zuordnung zu einer Kennung wie einem Namen,
                zu einer Kennnummer, zu Standortdaten, zu
                einer Online-Kennung (z.B. Cookie) oder zu
                einem oder mehreren besonderen Merkmalen
                identifiziert werden kann, die Ausdruck der
                physischen, physiologischen, genetischen,
                psychischen, wirtschaftlichen, kulturellen
                oder sozialen Identität dieser natürlichen
                Person sind.
              </p>
            </li>
            <li>
              <h3>Profiling:</h3>
              <p>
                {" "}
                Als 'Profiling“ wird jede Art der
                automatisierten Verarbeitung
                personenbezogener Daten bezeichnet, die
                darin besteht, dass diese personenbezogenen
                Daten verwendet werden, um bestimmte
                persönliche Aspekte, die sich auf eine
                natürliche Person beziehen (je nach Art des
                Profilings gehören dazu Informationen
                betreffend das Alter, das Geschlecht,
                Standortdaten und Bewegungsdaten,
                Interaktion mit Webseiten und deren
                Inhalten, Einkaufsverhalten, soziale
                Interaktionen mit anderen Menschen) zu
                analysieren, zu bewerten oder, um sie
                vorherzusagen (z.B. die Interessen an
                bestimmten Inhalten oder Produkten, das
                Klickverhalten auf einer Webseite oder den
                Aufenthaltsort). Zu Zwecken des Profilings
                werden häufig Cookies und Web-Beacons
                eingesetzt.
              </p>
            </li>
            <li>
              <h3>Tracking:</h3>
              <p>
                Vom 'Tracking“ spricht man, wenn das
                Verhalten von Nutzern über mehrere
                Onlineangebote hinweg nachvollzogen werden
                kann. Im Regelfall werden im Hinblick auf
                die genutzten Onlineangebote Verhaltens- und
                Interessensinformationen in Cookies oder auf
                Servern der Anbieter der
                Trackingtechnologien gespeichert
                (sogenanntes Profiling). Diese Informationen
                können anschließend z.B. eingesetzt werden,
                um den Nutzern Werbeanzeigen anzuzeigen, die
                voraussichtlich deren Interessen
                entsprechen.
              </p>
            </li>
            <li>
              <h3>Verantwortlicher:</h3>
              <p>
                Als 'Verantwortlicher“ wird die natürliche
                oder juristische Person, Behörde,
                Einrichtung oder andere Stelle, die allein
                oder gemeinsam mit anderen über die Zwecke
                und Mittel der Verarbeitung von
                personenbezogenen Daten entscheidet,
                bezeichnet.
              </p>
            </li>
            <li>
              <h3>Verarbeitung:</h3>
              <p>
                'Verarbeitung' ist jeder mit oder ohne Hilfe
                automatisierter Verfahren ausgeführte
                Vorgang oder jede solche Vorgangsreihe im
                Zusammenhang mit personenbezogenen Daten.
                Der Begriff reicht weit und umfasst
                praktisch jeden Umgang mit Daten, sei es das
                Erheben, das Auswerten, das Speichern, das
                Übermitteln oder das Löschen.
              </p>
            </li>
          </ul>
          <p className="seal">
            <a
              href="https://datenschutz-generator.de/?l=de"
              title="Rechtstext von Dr. Schwenke - für weitere Informationen bitte anklicken."
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              Erstellt mit kostenlosem
              Datenschutz-Generator.de von Dr. Thomas
              Schwenke
            </a>
          </p>
      <div className="top">
        <Link href="#top">
          <a>Nach oben</a>
        </Link>
      </div>
    </Container>
    </Layout>
  )
} 