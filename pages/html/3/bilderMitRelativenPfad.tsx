import Link from 'next/link'
import Image from "next/image";
export default function BilderMitRelativenPfad() {
  return (
    <div className="container">
      <Image
        src="/assets/images/buddhabrot1.jpg"
        alt="Ein Meme ©Spruch von Thorsten OJE"
        height={331}
        width={500}
        quality={80}
      />
      <Image
        src="/assets/images/scottish.jpg"
        alt="Scottish Highland Mutterkuh mit einem Kalb ©Thorsten OJE"
        height={1000}
        width={1334}
        quality={95}
      />
      <Image
        src="/assets/images/stonewall.jpg"
        alt="Steinwall in Breitenstein/Eberbach ©Thorsten OJE"
        height={1057}
        width={1585}
        quality={95}
      />
      <div className="top">
        <Link href="#top">
          <a>Nach oben</a>
        </Link>
      </div>
    </div>
  );
}
