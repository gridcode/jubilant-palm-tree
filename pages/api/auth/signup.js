import nextConnect from 'next-connect'
import {useSignupValidator} from 'validators'
import connectDb from 'middleware/db'
import shortid from 'shortid'
import User from 'models/User';
export const config = {
  api: {
    externalResolver: true,
    bodyParser: {
      sizeLimit: '1mb',
    },
  },
}

const handler = nextConnect();

handler.use(useSignupValidator).post(async (req, res)=>{
  await connectDb();
  const {name, email, password} = req.body
  User.findOne({email: email}).exec((err, user)=>{
    if(user){
      return res.status(409).json({message:"Email is taken"})
    }
    let username = shortid.generate();

    let newUser = new User({
      name, email, password, username
    })
    newUser.save((err, success)=>{
      if(err){
        return res.status(400).json({
          error: err
        })
      }
      res.json({
        user: success,
        message: "Signup success"
      })
    })
  })
})

export default handler;