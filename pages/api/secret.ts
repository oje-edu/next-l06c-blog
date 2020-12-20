import { NextApiRequest, NextApiResponse } from "next";
import jwt, { JsonWebTokenError } from 'jsonwebtoken'
const KEY = 'Thisistheend,beautifulfriendThisistTheend,myonlyfriendTheendofourelaborateplansTheendofevrythingthatstandsTheend'

export default function(req: NextApiRequest, res: NextApiResponse) {
  const { token } = req.body

  const { admin } = jwt.verify(token, KEY) as { [key: string]: boolean }

  if(admin) {
    res.json({ secretAdminCode: 'HAIL CAESAR'})
  } else {
    res.json({ admin: false })
  }
}