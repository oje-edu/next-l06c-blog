import { NextApiRequest, NextApiResponse } from "next";

// endpoint http://localhost:3000/api/demoKontakt
export default function (req: NextApiRequest, res: NextApiResponse) {

  console.log('REQUEST BODY', req.query)
  const { method, body } = req

  if (req.method === 'POST') {
    res.setHeader('X-Custom-Header', 'u used the POST method so we are open to hire people!')
    res.setHeader('Set-Cookie', 'GLOBALProtector!')
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify({
        'gesendet mittels POST' : body,
    }))
  }
  if (req.method === 'GET') {
    res.setHeader('X-Custom-Header', 'u used the GET method to submit plaintext passwords. Sorry we are NOT open to hire people!')
    res.setHeader('Set-Cookie', 'l337haxx0r!11elf!!') 
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify({
        'gesendet mittels GET' : body,
    }))
  }
}