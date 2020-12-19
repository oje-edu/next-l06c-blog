import Link from 'next/link'
export default function AlleFormulare() {
  return (
    <div className="container">
      <h5>Alle Formularfelder</h5>
      <div className="customForm">
        <form action="mailer/contact.php" method="POST">
          <div className="form-group">
            <label htmlFor="input-text" className="form-label">
              Type: text
            </label>
            <input
              className="form-control"
              type="text"
              name="text"
              id="input-text"
              placeholder="Text eingeben..."
            />
          </div>
          <div className="form-group">
            <label htmlFor="input-text-disabled" className="form-label">
              Type: text (nur lesbar)
            </label>
            <input
              className="form-control"
              type="text"
              name="text-disabled"
              id="input-text-disabled"
              placeholder="Text eingeben...HAHA"
              readOnly
            />
          </div>

          <div className="form-group">
            <label htmlFor="input-number">Type: number</label>
            <input
              className="form-control"
              type="number"
              name="number"
              id="input-number"
              step="0.58763"
              min="0"
              max="1000"
            />
          </div>

          <div className="form-group">
            <label htmlFor="input-range">Type: range</label>
            <div>
              <span>0</span>
              <input
                className="form-range"
                type="range"
                name="range"
                id="input-range"
                step="0.58763"
                min="0"
                max="1000"
                // value="50"
              />
              <span className="range-value">10.000</span>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="input-date">Type: date</label>
            <input
              type="date"
              className="form-control"
              name="date"
              id="input-date"
              // value="2020-12-18"
              min="1920-01-01"
              max="2049-12-31"
            />
          </div>

          <div className="form-group">
            <label htmlFor="input-month">Type: month</label>
            <input
              type="month"
              className="form-control"
              name="month"
              id="input-month"
              // value="2020-12"
              min="1920-01"
              max="2049-12"
            />
          </div>

          <div className="form-group">
            <label htmlFor="input-month">Type: time</label>
            <input
              type="time"
              className="form-control"
              name="time"
              id="input-time"
              min="08:30"
              max="16:30"
            />
          </div>

          <div className="form-group">
            <label htmlFor="input-color">Type: color</label>
            <input
              type="color"
              className="form-control"
              name="color"
              id="input-color"
              // value="#4a0979"
            />
          </div>

          <div className="form-group">
            <label htmlFor="input-url">Type: url</label>
            <input
              type="url"
              className="form-control"
              name="url"
              id="input-url"
              placeholder="https://google.de"
            />
          </div>

          <div className="form-group">
            <label htmlFor="input-tel">Type: tel</label>
            <input
              type="tel"
              className="form-control"
              name="tel"
              id="input-tel"
              minLength="6"
              maxLength="12"
            />
          </div>

          <div className="form-group">
            <label htmlFor="input-password">Type: password</label>
            <input
              type="password"
              className="form-control"
              name="password"
              id="input-password"
              minLength="8"
              maxLength="36"
            />
          </div>

          <div className="form-group">
            <label htmlFor="input-hidden">Type: hidden</label>
            <input
              type="hidden"
              name="hidden"
              id="input-hidden"
              // value="[ARTIKEL-NR]"
            />
          </div>
          <hr />

          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              name="checkbox"
              id="input-checkbox"
            />
            <label className="form-check-label" htmlFor="input-checkbox">
              Type: checkbox
            </label>
          </div>

          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              name="agb"
              id="input-cb-agb"
            />
            <label className="form-check-label" htmlFor="input-cb-agb">
              AGB gelesen
            </label>
          </div>
          <hr />

          <div className="form-group">
            <div className="form-check">
              <label className="form-radio-label" htmlFor="input-radio">
                Type: radio(gaga)
              </label>
              <input
                type="radio"
                className="form-check-input"
                name="radio"
                id="input-radio"
              />
            </div>
          </div>
          <div className="form-group">
            <div className="form-check form-check-inline">
              <input
                type="radio"
                className="form-check-input"
                name="gender"
                id="input-radio-male"
              />
              <label className="form-radio-label" htmlFor="input-radio-male">
                Männlich
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                type="radio"
                className="form-check-input"
                name="gender"
                id="input-radio-female"
              />
              <label className="form-radio-label" htmlFor="input-radio-female">
                Weiblich
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                type="radio"
                className="form-check-input"
                name="gender"
                id="input-radio-notsure"
              />
              <label className="form-radio-label" htmlFor="input-radio-notsure">
                Nicht sicher
              </label>
            </div>
          </div>
          <hr />

          <div className="form-group">
            <label htmlFor="input-search">Type: search</label>
            <input
              type="search"
              className="form-control"
              name="search"
              id="input-search"
              list="fruit-list"
            />
            <datalist id="fruit-list">
              <option>Banane</option>
              <option>ErdBär</option>
              <option>HimBär</option>
              <option>BrumBär</option>
            </datalist>
          </div>

          <div className="form-group">
            <label htmlFor="select-country">Select Country</label>
            <select name="country" id="select-country" className="form-select">
              <optgroup label="Europa">
                <option value="de">Deutschland</option>
                <option value="at">Austria</option>
                <option value="nl">Tulpen</option>
              </optgroup>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="input-file">Type: file</label>
            <input
              type="file"
              className="form-control"
              name="file"
              id="input-file"
              accept="image/png, image/gif, image/jpeg"
            />
          </div>
          <div className="form-group">
            <label htmlFor="input-firstname" className="form-label">
              Rufname:
            </label>
            <input
              className="form-control"
              type="text"
              name="firstname"
              id="input-firstname"
              placeholder="Maximilian"
            />
          </div>
          <div className="form-group">
            <label htmlFor="input-lastname" className="form-label">
              Familienname:
            </label>
            <input
              className="form-control"
              type="text"
              name="lastname"
              id="input-lastname"
              placeholder="Musterfrau"
            />
          </div>

          <div className="form-group">
            <label htmlFor="input-email">Email:</label>
            <input
              className="form-control"
              type="email"
              name="email"
              id="input-email"
              placeholder="Ihre Email Adresse..."
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="textarea-nachricht">Nachricht:</label>
            <textarea
              className="form-control"
              name="nachricht"
              id="textarea-nachricht"
              cols="50"
              rows="10"
            ></textarea>
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-info">
              Senf abgeben!
            </button>
          </div>
        </form>
      </div>
      <div className="top">
        <Link href="#top">
          <a>Nach oben</a>
        </Link>
      </div>
    </div>
  );
}
