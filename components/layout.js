import Head from "next/head";
import Link from "next/link";
import classes from "../styles/layout.module.css";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import { useRouter } from "next/router";


export default function Layout({ children }) {
  let router = useRouter();

  return (
    <div>
      <Head>
        <title>l06c.oje.ooo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={classes.header} id="top">
        {/* <nav className={classes.nav}> */}
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="/">L06c</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/">Start</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Agenda" id="basic-nav-dropdown">
                <NavDropdown.Item href="/articles/tag1">Tag 1</NavDropdown.Item>
                <NavDropdown.Item href="/articles/tag2">Tag 2</NavDropdown.Item>
                <NavDropdown.Item href="/articles/tag3">Tag 3</NavDropdown.Item>
                <NavDropdown.Item href="/articles/tag4">Tag 4</NavDropdown.Item>
                <NavDropdown.Item href="/articles/tag5">Tag 5</NavDropdown.Item>
                <NavDropdown.Item href="/articles/tag6">Tag 6</NavDropdown.Item>
                <NavDropdown.Item href="/articles/tag7">Tag 7</NavDropdown.Item>
                <NavDropdown.Item href="/articles/tag8">Tag 8</NavDropdown.Item>
                <NavDropdown.Item href="/articles/tag9">Tag 9</NavDropdown.Item>
                <NavDropdown.Item href="/articles/tag10">Tag 10</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="HTML Übungen" id="basic-nav-dropdown">
                <NavDropdown.Item href="/exercises/html/tag1">Tag 1(keine)</NavDropdown.Item>
                <NavDropdown.Item href="/exercises/html/tag2">Tag 2</NavDropdown.Item>
                <NavDropdown.Item href="/exercises/html/tag3">Tag 3</NavDropdown.Item>
                <NavDropdown.Item href="/exercises/html/tag4">Tag 4</NavDropdown.Item>
                <NavDropdown.Item href="/exercises/html/tag5">Tag 5</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="CSS Übungen" id="basic-nav-dropdown">
                <NavDropdown.Item href="/exercises/css/tag1">Tag 6</NavDropdown.Item>
                <NavDropdown.Item href="/exercises/css/tag2">Tag 7</NavDropdown.Item>
                <NavDropdown.Item href="/exercises/css/tag3">Tag 8</NavDropdown.Item>
                <NavDropdown.Item href="/exercises/css/tag4">Tag 9</NavDropdown.Item>
                <NavDropdown.Item href="/exercises/css/tag5">Tag 10</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>
      </header>

      <main className={classes.content}>{children}</main>

      <footer className={classes.footer}>
        <p>©2020 THORsten OJE - build with next - powered by nginx</p>

        <ul>
          {router.locales.map((locale) => (
            <li key={locale}>
              <Link href={router.asPath} locale={locale}>
                <a>{locale}</a>
              </Link>
            </li>
          ))}
        </ul>
      </footer>
    </div>
  );
}