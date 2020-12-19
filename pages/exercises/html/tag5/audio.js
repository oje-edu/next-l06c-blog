import Link from 'next/link'
export default function Audio() {
  return (
    <div className="container">
      <h2>Audio in HTML über &lt;audio&gt;</h2>
      <blockquote>
        Das HTML{" "}
        <mark>
          <code>&lt;audio&gt;</code>
        </mark>{" "}
        Element wird zum Einbetten von Sound-Inhalten in Dokumente verwendet. Es
        kann mehrere Audio-Quellen enthalten, diese werden mit der Benutzung des
        src Attributes oder des{" "}
        <mark>
          <code>&lt;source&gt;</code>
        </mark>{" "}
        Elementes angegeben. Der Browser wählt die passendere aus.
      </blockquote>
      <ul>
        <li>
          Eine Liste der unterstützten Formate
          <ul>
            <li>
              <a href="https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Audio_codecs">
                https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Audio_codecs
              </a>
            </li>
            <li>
              <a href="https://en.wikipedia.org/wiki/HTML5_audio">
                https://en.wikipedia.org/wiki/HTML5_audio
              </a>
            </li>
          </ul>
        </li>
        <li>
          Das Audio Element –{" "}
          <a href="https://developer.mozilla.org/de/docs/Web/HTML/Element/audio">
            https://developer.mozilla.org/de/docs/Web/HTML/Element/audio
          </a>
        </li>
      </ul>
      <div>
        <h5>
          nur mp3 mit <code>&lt;audio src</code>
        </h5>
        <audio
          src="/assets/audio/2015-00092-116_harvest-of-happiness.mp3"
          controls
          volume="0.5"
        ></audio>
      </div>
      <div>
        <h5>
          mit ogg und mp3 <code>&lt;source src</code>
        </h5>
        <audio controls>
          <source
            src="/assets/audio/2015-00092-116_harvest-of-happiness.ogg"
            type="audio/ogg"
          />
          <source
            src="/assets/audio/2015-00092-116_harvest-of-happiness.mp3"
            type="audio/mp3"
          />
        </audio>
      </div>
      <small>
        Harvest of Happiness - GEMAfreie Musik von{" "}
        <a href="https://audeeyah.de">https://audeeyah.de</a>{" "}
        Licensed under Creative Commons: By Attribution 4.0 International (CC BY
        4.0)
      </small>
      <div className="top">
        <Link href="#top">
          <a>Nach oben</a>
        </Link>
      </div>
    </div>
  );
}
