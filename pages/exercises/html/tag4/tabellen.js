import Link from "next/link";
import Image from "next/image";

export default function Tabellen() {
  return (
    <div>
      <div className="group border">
        <h5>Film Liste (css mittels id)</h5>
        <table id="table-01">
          <thead>
            <tr>
              <th>Nr.</th>
              <th>Cover</th>
              <th>Filmtitel</th>
              <th>Genre</th>
              <th>Jahr</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>
                <Image
                  src="/assets/images/movies/bloodin.jpg"
                  alt="blood in blood out"
                  height={268}
                  width={182}
                />
              </td>
              <td>
                <Link
                  href="https://www.imdb.com/title/tt0106469/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <a>Blood in, blood out</a>
                </Link>
              </td>
              <td>Drama</td>
              <td>1993</td>
            </tr>
            <tr>
              <td>2</td>
              <td>
                <Image
                  src="/assets/images/movies/hurricance.jpg"
                  alt="hurricane"
                  height={268}
                  width={182}
                />
              </td>
              <td>
                <Link
                  href="https://www.imdb.com/title/tt0174856/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <a>Hurricane</a>
                </Link>
              </td>
              <td>Drama, Biography</td>
              <td>1999</td>
            </tr>
            <tr>
              <td>3</td>
              <td>
                <Image
                  src="/assets/images/movies/moneyball.jpg"
                  alt="Moneyball"
                  height={268}
                  width={182}
                />
              </td>
              <td>
                <Link
                  href="https://www.imdb.com/title/tt1210166/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <a>Die Kunst zu gewinnen</a>
                </Link>
              </td>
              <td>Drama, Biography</td>
              <td>2011</td>
            </tr>
            <tr>
              <td>4</td>
              <td>
                <Image
                  src="/assets/images/movies/sieben.jpg"
                  alt="Seven"
                  height={268}
                  width={182}
                />
              </td>
              <td>
                <Link
                  href="https://www.imdb.com/title/tt0114369/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <a>Sieben</a>
                </Link>
              </td>
              <td>Drama, Mystery</td>
              <td>1995</td>
            </tr>
            <tr>
              <td>5</td>
              <td>
                <Image
                  src="/assets/images/movies/memento.jpg"
                  alt="Memento"
                  height={268}
                  width={182}
                />
              </td>
              <td>
                <Link
                  href="https://www.imdb.com/title/tt0209144/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <a>Memento</a>
                </Link>
              </td>
              <td>Thriller, Mystery</td>
              <td>2000</td>
            </tr>
          </tbody>
        </table>
        <div className="top">
          <Link href="#top">
            <a>Nach oben</a>
          </Link>
        </div>
      </div>
      <hr />
      <div className="group">
        <h5>Film Liste (css mittels class)</h5>
        <table className="custom_table">
          <thead>
            <tr>
              <th>Nr.</th>
              <th>Cover</th>
              <th>Filmtitel</th>
              <th>Genre</th>
              <th>Jahr</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>
                <Image
                  src="/assets/images/movies/bloodin.jpg"
                  alt="blood in blood out"
                  height={268}
                  width={182}
                />
              </td>
              <td>
                <Link
                  href="https://www.imdb.com/title/tt0106469/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <a>Blood in, blood out</a>
                </Link>
              </td>
              <td>Drama</td>
              <td>1993</td>
            </tr>
            <tr>
              <td>2</td>
              <td>
                <Image
                  src="/assets/images/movies/hurricance.jpg"
                  alt="hurricane"
                  height={268}
                  width={182}
                />
              </td>
              <td>
                <Link
                  href="https://www.imdb.com/title/tt0174856/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <a>Hurricane</a>
                </Link>
              </td>
              <td>Drama, Biography</td>
              <td>1999</td>
            </tr>
            <tr>
              <td>3</td>
              <td>
                <Image
                  src="/assets/images/movies/moneyball.jpg"
                  alt="Moneyball"
                  height={268}
                  width={182}
                />
              </td>
              <td>
                <Link
                  href="https://www.imdb.com/title/tt1210166/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <a>Die Kunst zu gewinnen</a>
                </Link>
              </td>
              <td>Drama, Biography</td>
              <td>2011</td>
            </tr>
            <tr>
              <td>4</td>
              <td>
                <Image
                  src="/assets/images/movies/sieben.jpg"
                  alt="Seven"
                  height={268}
                  width={182}
                />
              </td>
              <td>
                <Link
                  href="https://www.imdb.com/title/tt0114369/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <a>Sieben</a>
                </Link>
              </td>
              <td>Drama, Mystery</td>
              <td>1995</td>
            </tr>
            <tr>
              <td>5</td>
              <td>
                <Image
                  src="/assets/images/movies/memento.jpg"
                  alt="Memento"
                  height={268}
                  width={182}
                />
              </td>
              <td>
                <Link
                  href="https://www.imdb.com/title/tt0209144/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <a>Memento</a>
                </Link>
              </td>
              <td>Thriller, Mystery</td>
              <td>2000</td>
            </tr>
          </tbody>
        </table>
        <div className="top">
          <Link href="#top">
            <a>Nach oben</a>
          </Link>
        </div>
      </div>
      <hr />
      <div className="group">
        <h5>Film Liste (css mittels class</h5>
        <table className="custom_table">
          <thead>
            <tr>
              <th>Nr.</th>
              <th>Cover</th>
              <th>Filmtitel</th>
              <th>Genre</th>
              <th>Jahr</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>
                <Image
                  src="/assets/images/movies/bloodin.jpg"
                  alt="blood in blood out"
                  height={268}
                  width={182}
                />
              </td>
              <td>
                <Link
                  href="https://www.imdb.com/title/tt0106469/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <a>Blood in, blood out</a>
                </Link>
              </td>
              <td>Drama</td>
              <td>1993</td>
            </tr>
            <tr>
              <td>2</td>
              <td>
                <Image
                  src="/assets/images/movies/hurricance.jpg"
                  alt="hurricane"
                  height={268}
                  width={182}
                />
              </td>
              <td>
                <Link
                  href="https://www.imdb.com/title/tt0174856/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <a>Hurricane</a>
                </Link>
              </td>
              <td>Drama, Biography</td>
              <td>1999</td>
            </tr>
            <tr>
              <td>3</td>
              <td>
                <Image
                  src="/assets/images/movies/moneyball.jpg"
                  alt="Moneyball"
                  height={268}
                  width={182}
                />
              </td>
              <td>
                <Link
                  href="https://www.imdb.com/title/tt1210166/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <a>Die Kunst zu gewinnen</a>
                </Link>
              </td>
              <td>Drama, Biography</td>
              <td>2011</td>
            </tr>
            <tr>
              <td>4</td>
              <td>
                <Image
                  src="/assets/images/movies/sieben.jpg"
                  alt="Seven"
                  height={268}
                  width={182}
                />
              </td>
              <td>
                <Link
                  href="https://www.imdb.com/title/tt0114369/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <a>Sieben</a>
                </Link>
              </td>
              <td>Drama, Mystery</td>
              <td>1995</td>
            </tr>
            <tr>
              <td>5</td>
              <td>
                <Image
                  src="/assets/images/movies/memento.jpg"
                  alt="Memento"
                  height={268}
                  width={182}
                />
              </td>
              <td>
                <Link
                  href="https://www.imdb.com/title/tt0209144/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <a>Memento</a>
                </Link>
              </td>
              <td>Thriller, Mystery</td>
              <td>2000</td>
            </tr>
          </tbody>
        </table>
        <div className="top">
          <Link href="#top">
            <a>Nach oben</a>
          </Link>
        </div>
      </div>
    </div>
  );
}
