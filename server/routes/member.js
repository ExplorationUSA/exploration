const express = require('express');
const memberController = require('../controllers/memberController');
const route = express.Router();


route.post('/signup', memberController.validateMember, memberController.createMember, (req, res) =>{
  console.log('member created')
  if(res.locals.message) res.status(200).json({message: res.locals.message});
  else{
  res.status(200).redirect('/');
  }
})

route.post('/login', memberController.verifyMember, (req, res) => {
  console.log('member verified')
  res.status(200).redirect('/');
})

module.exports = route;