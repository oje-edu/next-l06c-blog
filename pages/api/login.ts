import { NextApiRequest, NextApiResponse } from "next";
import jwt from 'jsonwebtoken'

const KEY = 'Thisistheend,beautifulfriendThisistTheend,myonlyfriendTheendofourelaborateplansTheendofevrythingthatstandsTheend'

export default function (req: NextApiRequest, res: NextApiResponse) {
  if(!req.body) {
    res.statusCode = 404
    res.end('This my only friend ist the end. ERROR')
    return    
  }
  const { username, password } = req.body
  res.json({
    token: jwt.sign({
      username,
      admin: username === 'admin' && password === 'admin'
    }, KEY)
  })
}