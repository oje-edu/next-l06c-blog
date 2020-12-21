import Link from 'next/link'
import { useState } from "react"
import { Container, Form, Button } from 'react-bootstrap'
export default function Formulare() {
  return (
    <Container>
      <h5>Formulare</h5>
      <div className="customForm">
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email:</Form.Label>
          <Form.Control type="email" placeholder="Deine Email" />
          <Form.Text className="text-muted">
            Natürlich wird die Email zur Vermartung weiterverkauft. Von irgendwas muss ich ja leben.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Passwort</Form.Label>
          <Form.Control type="password" placeholder="Passwort" />
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Hau weg!
        </Button>
      </Form>
      </div>
      <div className="top">
        <Link href="#top">
          <a>Nach oben</a>
        </Link>
      </div>

      <hr />

      <div className="mb-3">
        <h4>Kontaktformular</h4>
        <div className="customForm">
          <form action="/api/demoKontakt" name="contact" method="POST">
            <div className="form-group">
              <label htmlFor="input-firstname" className="form-label">Rufname:</label>
              <input className="form-control" type="text" name="firstname" id="input-firstname" placeholder="Maximilian" />
            </div>
            <div className="form-group">
              <label htmlFor="input-lastname" className="form-label">Familienname:</label>
              <input className="form-control" type="text" name="lastname" id="input-lastname" placeholder="Musterfrau" />
            </div>
            <div className="form-group">
              <label htmlFor="input-email">Email:</label>
              <input className="form-control" type="email" name="email" id="input-email" placeholder="Maximilian.Musterfrau@divers.de" />
            </div>
            <div className="form-group">
              <label htmlFor="textarea-nachricht">Nachricht:</label>
              <textarea className="form-control" name="nachricht" id="textarea-nachricht" cols={50} rows={10}></textarea>
            </div>
            <div className="form-group">
              <button type="submit" className="btn btn-info">Senf abgeben!</button>
            </div>
          </form>
        </div>
      </div>
      <div className="top">
        <Link href="#top">
          <a>Nach oben</a>
        </Link>
      </div>
    </Container>
  )
}