import Link from 'next/link'

export default function Video() {
  return (
    <div>
      <h2>Video in HTML über &lt;video&gt;</h2>
      <blockquote>
        Das HTML{" "}
        <mark>
          <code>&lt;video&gt;</code>
        </mark>{" "}
        Element wird verwendet, um Videos einzubetten. Es kann verschiedene
        Quellen für Videos enthalten, die im src Attribut oder im{" "}
        <mark>
          <code>&lt;source&gt;</code>
        </mark>{" "}
        Element repräsentiert werden. Der Webbrowser wählt dann die für ihn
        passende Quelle aus.
      </blockquote>
      <ul>
        <li>
          Eine Liste der unterstützten Formate:
          <ul>
            <li>
              <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Supported_media_formats">
                https://developer.mozilla.org/en-US/docs/Web/HTML/Supported_media_formats
              </a>
            </li>
            <li>
              <a href="https://en.wikipedia.org/wiki/HTML5_video">
                https://en.wikipedia.org/wiki/HTML5_video
              </a>
            </li>
            <li>
              <a href="https://www.freecodecamp.org/news/video-formats-for-the-web/">
                https://www.freecodecamp.org/news/video-formats-for-the-web/
              </a>
            </li>
          </ul>
        </li>
        <li>
          Das Video Element –
          <a href="https://developer.mozilla.org/de/docs/Web/HTML/Element/video">
            https://developer.mozilla.org/de/docs/Web/HTML/Element/video
          </a>
        </li>
        <li>
          Das Web Video Text Tracks Format (WebVTT)
          <a href="https://developer.mozilla.org/en-US/docs/Web/API/WebVTT_API">
            https://developer.mozilla.org/en-US/docs/Web/API/WebVTT_API
          </a>
        </li>
      </ul>
        <h5>
          nur mp4 mit <code>&lt;video src...</code>
        </h5>
        <div className="embed-responsive embed-responsive-16by9">
          <video
            src="/assets/video/countdown_short.mp4"
            controls
            autoPlay
            muted
          >
            <track src="/assets/video/countdown.de.vtt" default />
          </video>
        </div>
        <h5>
          mit h265.mp4, webm und mp4 <code>&lt;source src...</code>
        </h5>
        <div className="embed-responsive embed-responsive-16by9">
          <video controls autoPlay muted>
            <source
              src="/assets/video/countdown_short.webm"
              type="video/webm"
            />
            <source src="/assets/video/countdown_short.mp4" type="video/mp4" />
            <source src="/assets/video/countdown_short_h265.mp4" />
          </video>
        </div>
        <h5>embed iframe</h5>
        <div className="embed-responsive embed-responsive-16by9">
          <iframe
            className="embed-responsive-item"
            src="https://www.youtube.com/embed/pp3sYjG-gyQ"
            allowFullScreen
          ></iframe>
        </div>

      <div className="top">
        <Link href="#top">
          <a>Nach oben</a>
        </Link>
      </div>
    </div>
  );
}
