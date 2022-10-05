const express = require('express'); 
const PORT = 3500; 

const app = express(); 

app.use('/graphql', (req,res)=>{
    req.send('Welcome to our Apollo App')
})

app.listen(PORT, ()=>{
    console.log(`Server is running on port: ${PORT}`)
})