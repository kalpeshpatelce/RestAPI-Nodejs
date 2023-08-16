var Db  = require('./dboperations');
var order = require('./Computers');
const dboperations = require('./dboperations');
const sql = require('mssql');
const fs = require('fs');

const validateApiKey = require('./apiKeyMiddleware');

const path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
const { MAX } = require('mssql');
var app = express();
var router = express.Router();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use('/api', router);
//app.use('/', router);
app.use(express.static(path.join(__dirname, 'public')));

//app.use(express.json());


//const httpsServer = https.createServer(credentials, app);
//const port = 8090;

//httpsServer.listen(port, () => {
//  console.log(`Server running on port ${port}`);
//});

router.use((request,response,next)=>{
   console.log('middleware');
   next();
})


// Default Page
// Set up the router
router.route('/')
  .get((req, res) => {
   console.log(req);
    // Send the 'index.html' file as the default page
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
  });

  

// Get Single ALL Computer Using 
router.route('/computers').get(validateApiKey,(request,response)=>{
   console.log('Get ALL Computer Trigger')
    dboperations.getComputers().then(result => {
       response.json(result[0]);
    })

})

// Get Single Computer Records
router.route('/computers/:id').get((request,response)=>{
   console.log('Get Single Computer Trigger')
   dboperations.getComputer(request.params.id).then(result => {
      console.log(request.params.id)
      response.json(result[0]);
   })

})


//Delete Single Computer Records
router.route('/computers/:id').delete((request,response)=>{
   console.log('Delete Single Computer Trigger')
   dboperations.DeleteComputer(request.params.id).then(result => {
      console.log(request.params.id)
      response.json("Record Deleted Successfully");
   })

})



//Add single computer Record
router.route('/computers').post((request,response)=>{
   console.log('Insert Single Computer Trigger')
//   console.log("-----------------------");
//   console.log(request.body.PCSerialNo);
//   console.log("-----------------------");
//   if ('PCSerialNo' in request.body) {
//      console.log(request.body.PCSerialNo);
//    } else {
//      console.log('PCSerialNo key is not present in the request body');
//    }
//console.log("API Page:",request.body);
let order = {...request.body}
 
   dboperations.AddComputer(order).then(result => {
      //response.json(result[0]);
      console.log("-----------------------");
      console.log(result);
      console.log("-----------------------");
      response.json(result);
   })

})

//Update single Computer records
router.route('/computers/:id').put((request,response)=>{
   console.log('Update Single Computer Trigger')
   let Serialid = request.params.id
   console.log(Serialid);
   console.log("-----------------------");
   let order = {...request.body}
   console.log(order);
          dboperations.UpdateComputer(Serialid,order).then(result => {
          response.json("Record Updated Successfully");
      })
   })
   

  
   
var port = process.env.PORT || 8091;
app.listen(port);
console.log('Order API is runnning at ' + port);