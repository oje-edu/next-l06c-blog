export default function TextFormatieren() {
  return (
    <div>
      <h2>Übung - Grundformatierungen (inline Elemente)</h2>
      <p>Dieses Wort: <strong>"Wichtig"</strong> möchten wir im Text hervoheben und damit eine höhere Bedeutung in seinem Textkontext geben.</p>
      <p>Dieses Wort: <b>"Hey"</b> möchten wir im Text nur visuell hervoheben und anfetten.</p>
      <p>Dieses Wort: <em>"Excuse-moi"</em> möchten wir im Text eine andere Betonung in seinem Textkontext geben.</p>
      <p>Diese Wörter: <i>"Ich bin schräg"</i> möchten wir im Text nur visuell kursiv stellen.</p>
      <p>Diese Wörter: <u>"Termin am: 24.12.2020"</u> möchten wir im Text nur visuell unterstreichen.</p>
      <p>Diese Wort: <mark>"Dähmlich"</mark> wollen wir im Text markieren, da es falsch geschrieben wurde.</p>
      <p>In folgenden Beispiel wollen wir kennzeichnen das eine alter Preis nicht mehr stimmt und ersetzt wird:<br />
        "Kaufe 2 Paar Socken zum Preis von 3"<br />
        alter Preis: <s>2,99€</s><br />
        jetzt nur: 4,99€
      </p>
      <p>Im folgenden Beispiel wollen wir Wörter verlinken:<br />
          Eine gute Einleitung zum Thema HTML findet man auf der Webseite{" "}
          <a href="https://developer.mozilla.org/de/docs/Learn/HTML/Einf%C3%BChrung_in_HTML" target="_blank" rel="norefferer">MDN HTML Introduction</a>,
        auf <a href="https://selfhtml.org/" target="_blank" rel="noreferrer">SelfHTML (DE)</a> oder auf{" "}
        <a href="https://www.w3schools.com/" target="_blank" rel="noreferrer">W3Schools</a>.
      </p>
    </div>    
  )
}