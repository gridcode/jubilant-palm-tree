export default (req,res) => {
  res.removeHeader('token')
  res.removeHeader('user')
  res.json({"message":"Signout success"})
}