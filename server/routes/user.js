const express=require('express')
const router=express.Router()
const User = require('../model/User');

router.get('/user/:userId',async (req,res)=>{
  const { userId } = req.params;
  try 
  {
    const response = await User.findById(userId);
    if (!response) 
    {
      return res.status(404).json({ message: 'User not found' });
    }
    return res.status(200).json(response);
   } 
   catch (err) 
   {
     return res.status(500).json({ message: 'Internal Server Error' });
   }
})

module.exports=router;