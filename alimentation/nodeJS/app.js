const http = require('http')
const app = require('express')()
const bodyParser = require('body-parser')
const mysql =require('mysql')
const server =http.createServer(app)
const port = 8090

const db = mysql.createConnection({
    'host':'localhost',
    'database' : 'alimentation',
	'user':'root',
	'password':''
})
db.connect((err) => {
    if(!err)
        console.log('Vous ete connecté a la bd')
    else
        console.log(err.message)
})



app.use(bodyParser.urlencoded({ extended: false }))
.use(bodyParser.json()) 
app.set('view engine ', 'ejs') 


.get('/', (req, res) => {
    res.render('index.ejs')
})



.post(('/traitement'), (req, res) =>{

    let values = [req.body.nom, req.body.prenom, req.body.pseudo, req.body.email, req.body.message]
    
    
    db.query("INSERT INTO `user`(`nom`, `prenom`, `pseudo`, `email`, `message`) VALUES (?, ?, ?, ?, ,?)", values, (results, err) => {

        if(!err){
            
            infos = req.body
            res.render('home.ejs', { infos })
        }
        else {
            console.log(err.message)
            res.send('Error lors enregitrement')
        } 
             

    })
    
})


server.listen(port, (err) => {
    if(!err)
        console.log('server operationnel')
    else
        console.log(err.message)
}) 