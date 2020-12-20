import Head from "next/head";
import Link from 'next/link';
import { Container } from "react-bootstrap";
import classes from "../styles/layout.module.scss";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";


import { useRouter } from "next/router";

export default function Layout({ children }) {
  let router = useRouter();

  return (
    <Container className="md-container">
      <Head>
        <title>l06c.oje.ooo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <header className={classes.header} id="top">
          {/* <nav className={classes.nav}> */}
          <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/">L06c</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">        
                <NavDropdown title="HTML Übungen" id="basic-nav-dropdown">
                  <NavDropdown.Item>
                    <Link href="/html/1">
                      <a>Tag 1</a>
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link href="/html/2">
                      <a>Tag 2</a>
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link href="/html/3">
                      <a>Tag 3</a>
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link href="/html/4">
                      <a>Tag 4</a>
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link href="/html/5">
                      <a>Tag 5</a>
                    </Link>
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="CSS Übungen" id="basic-nav-dropdown">
                  <NavDropdown.Item>
                    <Link href="/css/1">
                      <a>Tag 6</a>
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link href="/css/2">
                      <a>Tag 7</a>
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link href="/css/3">
                      <a>Tag 8</a>
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link href="/css/4">
                      <a>Tag 9</a>
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link href="/css/5">
                      <a>Tag 10</a>
                    </Link>
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link>
                  <Link href="/TheEndMyOnlyFriend"><a>Fehler 404</a></Link>
                </Nav.Link>     
              </Nav>
              <Nav className="ml-auto">
                <Nav.Link
                  href="https://linkedin.com/in/thorsten-oje"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </Nav.Link>
                <Nav.Link
                  href="https://github.com/oje-edu"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </Nav.Link>
                <NavDropdown title="Rechtliches" id="basic-nav-dropdown">
                  <NavDropdown.Item>
                    <Link href="/impressum"><a>Impressum</a></Link>

                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link href="/datenschutz">
                      <a>Datenschutz</a>
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item>
                    <Link href="/kontakt"><a>Kontakt</a></Link>
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link>
                  <Link href="/login"><a>Anmelden</a></Link>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </header>
      </Container>
      <Container>
        <main className={classes.content}>{children}</main>
      </Container>
      <Container>
        <footer className={classes.footer}>
          <p>©2020 THORsten OJE - powered by nginx</p>
          {/* <ul>
          {router.locales.map((locale) => (
            <li key={locale}>
              <Link href={router.asPath} locale={locale}>
                <a>{locale}</a>
              </Link>
            </li>
          ))}
        </ul> */}
        </footer>
      </Container>
    </Container>
  );
}
