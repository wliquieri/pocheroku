const express = require("express");
const app =express();

const port = process.env.PORT || 8080;

app.get("/", function(req, res){
    res.send("teste");
})

app.listen(port, () =>{
    console.info(`aplicação rodando na porta: ${port}`)
})