const express=require("express");
const app = express();
const fs = require('fs')
app.use(express.json());

app.listen(5000, ()=>{
      console.log("server running on localhost:5000...");
  });


  app.get("/teams",(request, response)=>{
     fs.readFile('./teams.json','utf-8',(err, jsonString)=>{
        if(err){
            console.log(err);
            return response.status(500).send('there is error');
        }
        else{
            try{
                const teams= JSON.parse(jsonString);
                response.status(201).send(teams);

            }
            catch(err){
                console.log('error parsing json',err)
            }

        }
     })
});

const data =[];
app.post("/teams",(request, response)=>{
    console.log(request.body);
    data.push(fs.writefile);
    response.status(201).send({
        message: "its written",
    });
});


app.patch("/teams",(req,res)=>{
    console.log(req.body);
    data.push(fs.writefile);
    res.send("updated");
});

app.delete("/courses/:id",(req, res)=>{
    console.log(req.params);
    res.send("deleted");
    fs.readFile('./teams.json','utf-8',(err, jsonString)=>{
        if(err){
            console.log(err);
            return response.status(500).send('there is error');
        }
        else{
            try{
                const teams= JSON.parse(jsonString);
                response.status(201).send(teams);

            }
            catch(err){
                console.log('error parsing json',err)
            }

        }
     })
});