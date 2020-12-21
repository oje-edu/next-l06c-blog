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
          <Navbar bg="light" variant="light" expand="lg">
            <Navbar.Brand href="/">L06c</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto purple">        
                <NavDropdown title="HTML Übungen" id="basic-nav-dropdown">
                  <NavDropdown.Item>
                    <Link href="/html/1">
                      <Nav.Link as="a" href="/html/1">Tag 1</Nav.Link>
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link href="/html/2">
                      <Nav.Link as="a" href="/html/2">Tag 2</Nav.Link>
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link href="/html/3">
                      <Nav.Link as="a" href="/html/3">Tag 3</Nav.Link>
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link href="/html/4">
                      <Nav.Link as="a" href="/html/4">Tag 4</Nav.Link>
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link href="/html/5">
                      <Nav.Link as="a" href="/html/5">Tag 5</Nav.Link>
                    </Link>
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="CSS Übungen" id="css-nav-dropdown">
                  <NavDropdown.Item>
                    <Link href="/css/1">
                      <Nav.Link as="a" href="/css/1">Tag 6</Nav.Link>
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link href="/css/2">
                      <Nav.Link as ="a" href="/css/2">Tag 7</Nav.Link>
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link href="/css/3">
                      <Nav.Link as="a" href="/css/3">Tag 8</Nav.Link>
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link href="/css/4">
                      <Nav.Link as="a" href="/css/4">Tag 9</Nav.Link>
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link href="/css/5">
                      <Nav.Link as="a" href="/css/5">Tag 10</Nav.Link>
                    </Link>
                  </NavDropdown.Item>
                </NavDropdown>
                  <Link href="/TheEndMyOnlyFriend">
                    <Nav.Link as="a" href="/TheEndMyOnlyFriend">Fehler 404</Nav.Link>
                  </Link>
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
                <NavDropdown title="Rechtliches" id="rechtliches-nav-dropdown">
                  <NavDropdown.Item>
                    <Link href="/impressum">
                      <Nav.Link as="a" href="/impressum">Impressum</Nav.Link>
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link href="/datenschutz">
                      <Nav.Link as="a" href="/datenschutz">Datenschutz</Nav.Link>
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item>
                    <Link href="/kontakt">
                      <Nav.Link as="a" href="/kontakt">Kontakt</Nav.Link>
                    </Link>
                  </NavDropdown.Item>
                </NavDropdown>
                  <Link href="/login">
                    <Nav.Link as="a" href="/login">Anmelden</Nav.Link>
                  </Link>
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
