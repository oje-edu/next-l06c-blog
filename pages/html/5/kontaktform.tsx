import Link from 'next/link'
export default function Kontaktform() {
  return (
    <div className="container" id="hausaufgabe">
      <h3>ANNO 1982</h3>
      <p>Lehrer/in/wusstenwirdamalsschonnichtsogenau</p>
      <p>Zeigt mal her Eure Hausaufgaben!</p>
      <p>Alle so, WAS FÜR HAUSAUFGABEN ???</p>
      <h3>ANNO 2021</h3>
      <p>Dozent/in/egalHESSE!</p>
      <p>
        Na, alle gut ins Neue Jahr gerutscht? Prima! Und jetzt müssen wir
        erstmal die neuen GFN Pausenregeln klären. Unterricht bis EUCH der
        Schädel platzt!
      </p>
      <p>
        Aber vorher will ich noch Eure <b>Hausaufgaben</b> sehen!
      </p>
      <p>
        <del>Alle</del> 99.9% so *yeah*.. hier check this out, und das erst, und
        check erstmal mal den diggsten HTML hack in Town out!!!
      </p>
      <p>Ich so, WAS FÜR HAUSAUFGABEN ???</p>
      <p>cu @42heilbronn</p>
      <div className="top">
        <Link href="#top">
          <a>Nach oben</a>
        </Link>
      </div>
    </div>
  );
}
