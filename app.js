// next step :> create generate all funcation to generate all dice random and but it on array to use in ejs 
//

var express = require('express');
const app=express();
var bodyParser = require('body-parser')
let faces=0,number=0;
// set the view engine to ejs
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }))

// use res.render to load up an ejs view file
let generateAll=(faces,number)=>{
number.array.forEach(element => {
  Math.random()
});
}
// index page
app.get('/', function(req, res) {
  res.render('index' );
});
app.post('/res',(req,res)=>{
  faces=req.body.faces || 0;
  number=req.body.dices || 0;
  res.render('respon' , {faces,type: number});
  // res.send();
})


// about page
app.get('/about', function(req, res) {
  res.render('pages/about');
});

app.listen(8080);
console.log('Server is listening on port 8080');