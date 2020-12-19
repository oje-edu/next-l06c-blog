export default function Formulare() {
  return (
    <div>
      <h5>Formulare</h5>
      <div>
        <form name="contact" method="POST" data-netlify="true" method="POST" className="customForm">
          <h4>Email-Passwort</h4>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">Email:</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="reiner.zufall@gmail.com" />
            <div id="emailHelp" className="form-text">Wir werden Ihre email-adresse nicht vermarkten.</div>
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">Passwort:</label>
            <input type="password" className="form-control" id="exampleInputPassword1" />
          </div>
          <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
            <label className="form-check-label" for="exampleCheck1">Spamletter bestellen?</label>
          </div>
          <button type="submit" className="btn btn-primary">HAU WEG!</button>
        </form>
      </div>

      <hr />

      <div className="mb-3">
        <h4>Kontaktformular</h4>
        <div className="customForm">
          <form name="contact" method="POST" data-netlify="true">
            <div className="form-group">
              <label for="input-firstname" className="form-label">Rufname:</label>
              <input className="form-control" type="text" name="firstname" id="input-firstname" placeholder="Maximilian" />
            </div>
            <div className="form-group">
              <label for="input-lastname" className="form-label">Familienname:</label>
              <input className="form-control" type="text" name="lastname" id="input-lastname" placeholder="Musterfrau" />
            </div>
            <div className="form-group">
              <label for="input-email">Email:</label>
              <input className="form-control" type="email" name="email" id="input-email" placeholder="Maximilian.Musterfrau@divers.de" />
            </div>
            <div className="form-group">
              <label for="textarea-nachricht">Nachricht:</label>
              <textarea className="form-control" name="nachricht" id="textarea-nachricht" cols="50" rows="10"></textarea>
            </div>
            <div className="form-group">
              <button type="submit" className="btn btn-info">Senf abgeben!</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}