const express = require("express")
const mysql = require("mysql2")
const bodyParser = require("body-parser")
const cors = require("cors")

const app = express()

app.use(cors()) 
app.use(bodyParser.json()) 

app.get('/',(req,res)=>{
    res.send("Server root link........")
})

const port = 4000    
    const host = "127.0.0.1" 
app.post('/register',(req,res)=>
{
    const data = req.body
    console.log(data)

    const db = mysql.createConnection({
        host:"localhost",
        user:"root",
        password:"Mumma@123",
        database:"crud"
    })

    const sql=`insert into users (name,age,mobile,email,password) values('${data.name}',${data.age},'${data.mobile}','${data.email}','${data.password}')`
    db.connect((err)=>
    {   
        try{
            if(err)
            {
                throw err
            }
        db.query(sql,(err,result)=>
        {
            if(err)
            {
                throw err;
            }
            console.log("1 row inserted")
            res.send("Register successfully")
        })
         }catch(err)
        {
            console.log(err)
        }
    })    
    
       
    })

    app.post('/login',(req,res)=>
    {
        const data = req.body
        console.log(data)
    
        const db = mysql.createConnection({
            host:"localhost",
            user:"root",
            password:"Mumma@123",
            database:"crud"
        })

        db.connect((err)=>{
            try{
            if(err)
            {
                throw err
            }
const sql=`select * from users where email='${data.email}' and password = '${data.password}';`
            db.query(sql,(err,result,fields)=>{

                console.table(result)
                console.table(fields)

                if(result.length>0){
                    res.send("true")
                }
                else{
                    res.send("false")
                }
            })
        }catch(err){
            console.error(err)
        }
    })

    })

    app.get("/getusers",(req,res)=>{
        const db = mysql.createConnection({
            host:"localhost",
        user:"root",
        password:"Mumma@123",
        database:"crud"
        })

        db.connect((err)=>{
            try{

                if(err){
                    throw err
                }
                db.query("select * from users where 1",(err,result)=>{
                    if(err){
                        throw err
                    }
                    res.json(result)
                })

            }catch(err){
                console.error(err)
            }
        })
        
    })

    app.post("/update",(req,res)=>{
        const data = req.body
        const sql =`update users set name='${data.name}',age='${data.age}',mobile='${data.mobile}',email='${data.email}' where id='${data.id}';`


        const db = mysql.createConnection({
            host:"localhost",
            user:"root",
            password:"Mumma@123",
            database:"crud"
        })

        db.connect((err)=>{
            try{
                if(err) throw err
                db.query(sql,(err,result)=>{
                    if(err) throw err
                   if(result.affectedRows>0){
                    res.send("true")

                   }
                   else[
                    res.send("false")
                   ]
                })

            }catch(err){
                console.error(err)
            }
        })
    })
    
    app.post("/deleteuser",(req,res)=>{
       
        const id = req.body.id

        const db = mysql.createConnection({
            host:"localhost",
            user:"root",
            password:"Mumma@123",
            database:"crud"
        })
            try{
               
                db.connect((err)=>{
                    if(err) throw err
                    const sql=`delete from users where id='${id}'`

                    db.query(sql,(err,result)=>{
                        if(err) throw err
                        if(result.affectedRows>0)
                        {
                            res.send(true)
                        }
                        else{
                            res.send(false)
                        }

                    })
                })
            }catch(error){
                console.error(err)
            }
    })

    app.listen(port,host,()=>{
        console.log(`Node Server Started on http://${host}:${port}`)
    })


