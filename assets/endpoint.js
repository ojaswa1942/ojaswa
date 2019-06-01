const express=require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');

const app=express();

app.use(cors());
app.use(bodyParser.json());

app.post('/ojaswa', (req, res) => {
  const {name, email} = req.body;
  const date = new Date();

  if(email.length && name.length){
    fs.appendFile('./out/ojaswa.log',`Name: ${name}, Email: ${email}, Time: ${date} \n`, err =>{
      if(err)
        res.status(500).json(err);
      res.status(200).json("Thanks for coming!");
    });
  }
  else
    res.status(400).json('Give me something');
});

const PORT = process.env.PORT;
app.listen(PORT, ()=>{
	console.log(`We are on on port ${PORT}!`);
})