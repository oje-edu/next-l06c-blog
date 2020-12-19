import Link from "next/link";
import Button from "react-bootstrap/Button";
import Image from "next/image";

export default function Bilder() {
  return (
    <div className="container">
      <h2>Bilder im Web</h2>
      <Image
        src="https://images.pexels.com/photos/567540/pexels-photo-567540.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        alt="cameleon"
        height={650}
        width={940}
        quality={80}
        priority
      />
      <p>
        <Link href="https://images.pexels.com/photos/567540/pexels-photo-567540.jpeg">
          <a>source: images.pexels.com</a>
        </Link>
      </p>
      <h3>Bildgeneratoren</h3>
      <div className="generatorsBtn">
        <Button
          href="https://loremipsum.io/de/21-of-the-best-placeholder-image-generators/"
          target="_blank"
          rel="noreferrer"
        >
          <a>21 Generatoren</a>
        </Button>
      </div>
      <div>
        <Image
          src="https://placekitten.com/800/400"
          alt="Bild einer Katze"
          height={400}
          width={800}
        />
        <p>
          <Link
            href="https://placekitten.com/800/400"
            target="_blank"
            rel="noreferrer"
          >
            <a>source: placekitten.com</a>
          </Link>
        </p>
      </div>
      <div>
        <Image
          src="https://placebear.com/800/400"
          alt="Bild eines Bärs"
          height={400}
          width={800}
        />
        <p>
          <Link
            href="https://placebear.com/800/400"
            target="_blank"
            rel="noreferrer"
          >
            <a>source: placebear.com</a>
          </Link>
        </p>
      </div>

      <div>
        <Image
          src="https://picsum.photos/800/400"
          alt="Zufälliges Bild von picsum.photos "
          height={400}
          width={800}
        />
        <p>
          <Link
            href="https://picsum.photos/800/400"
            target="_blank"
            rel="noreferrer"
          >
            <a>source: picsum.photos</a>
          </Link>
        </p>
      </div>

      <div>
        <Image
          src="https://www.stevensegallery.com/800/400"
          alt="Zufälliges Bild von Steven Seagal the  world best c class actor ;-)"
          height={400}
          width={800}
        />
        <p>
          <Link
            href="https://www.stevensegallery.com/800/400"
            target="_blank"
            rel="noreferrer"
          >
            <a>source: www.stevensegallery.com</a>
          </Link>
        </p>
      </div>
      <div className="top">
        <Link href="#top">
          <a>Nach oben</a>
        </Link>
      </div>
    </div>
    
  );
}
