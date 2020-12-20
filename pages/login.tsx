import { useState } from "react"
import jwt from 'jsonwebtoken'

import Layout from '../components/layout'


export default function Login() {
  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [message, setMessage] = useState<string>('Du bist nicht angemeldet!')
  const [secret, setSecret] = useState<string>('')
  async function submitForm() {
    const res = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password })
    }).then((t) => t.json())

    const token = res.token

    if(token) {
      const json = jwt.decode(token) as { [key: string]: string }
      setMessage(
        `Ave ${json.username} , morituri te salutant! Ich bin ${json.admin ? 'der grösste!' : 'Gladiator!'}` 
      )

      const res = await fetch('/api/secret', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ token })
      }).then((t) => t.json())

      if(res.secretAdminCode) {
        setSecret(res.secretAdminCode)
      } else {
        setSecret('und besser als RUSSEL CROWE!')
      }

    } else {
      setMessage('Diese 300... irgendwas lief schief! - ERROR')
    }
  }

  return (
    <Layout>
      <h1>DEMO</h1>
      <h5>{message}</h5>
      <h5>Secret: {secret}</h5>
      <form>
        <input type="text" name="username" placeholder="admin" value={username} onChange={e => setUsername(e.target.value)} />
        <input type="password" name="password" placeholder="admin" value={password} onChange={e => setPassword(e.target.value)} />
        <input type="button" value="Anmelden" onClick={submitForm} />
      </form>
      <small><mark><i>Verwende einen anderen Benutzernamen oder Passwort</i></mark></small>
    </Layout>
  )
}