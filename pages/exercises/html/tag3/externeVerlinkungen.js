import Link from "next/link";
export default function ExterneVerlinkung() {
  return (
    <div>
      <h2>In Arbeit</h2>
      <p>Entweder habe ich da geschlafen, oder mein git commit ging in die Hose...</p>
      <div className="top">
        <Link href="#top">
          <a>Nach oben</a>
        </Link>
      </div>
    </div>
  )
}