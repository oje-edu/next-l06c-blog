import Link from 'next/link'
export default function Formulare() {
  return (
    <div>
      <h5>Formulare</h5>
      <div className="customForm">
        <form action="/api/demoKontakt" method="GET">
          <h4>Email-Passwort</h4>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1" className="form-label">Email:</label>
            <input name="email" type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="reiner.zufall@gmail.com" />
            <div id="emailHelp" className="form-text">Wir werden Ihre email-adresse nicht vermarkten.</div>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1" className="form-label">Passwort:</label>
            <input name="password" type="password" className="form-control" id="exampleInputPassword1" />
          </div>
          <div className="form-check">
            <input name="checkbox" type="checkbox" className="form-check-input" id="exampleCheck1" />
            <label className="form-check-label" htmlFor="exampleCheck1">Spamletter bestellen?</label>
          </div>
            <div className="form-group">
              <button type="submit" className="btn btn-primary">HAU WEG!</button>
            </div>
        </form>
      </div>
      <div className="top">
        <Link href="#top">
          <a>Nach oben</a>
        </Link>
      </div>

      <hr />

      <div className="mb-3">
        <h4>Kontaktformular</h4>
        <div className="customForm">
          <form action="/api/demoKontakt" name="contact" method="POST">
            <div className="form-group">
              <label htmlFor="input-firstname" className="form-label">Rufname:</label>
              <input className="form-control" type="text" name="firstname" id="input-firstname" placeholder="Maximilian" />
            </div>
            <div className="form-group">
              <label htmlFor="input-lastname" className="form-label">Familienname:</label>
              <input className="form-control" type="text" name="lastname" id="input-lastname" placeholder="Musterfrau" />
            </div>
            <div className="form-group">
              <label htmlFor="input-email">Email:</label>
              <input className="form-control" type="email" name="email" id="input-email" placeholder="Maximilian.Musterfrau@divers.de" />
            </div>
            <div className="form-group">
              <label htmlFor="textarea-nachricht">Nachricht:</label>
              <textarea className="form-control" name="nachricht" id="textarea-nachricht" cols={50} rows={10}></textarea>
            </div>
            <div className="form-group">
              <button type="submit" className="btn btn-info">Senf abgeben!</button>
            </div>
          </form>
        </div>
      </div>
      <div className="top">
        <Link href="#top">
          <a>Nach oben</a>
        </Link>
      </div>
    </div>
  )
}