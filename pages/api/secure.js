import nextConnect from 'next-connect'
const handler = nextConnect();
import {requireSignIn} from 'middleware/auth'
handler.use(requireSignIn).get((req, res)=>{
  res.send("Authorized")
})

export default handler;