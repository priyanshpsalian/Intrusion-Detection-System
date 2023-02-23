const express = require('express');
const cors = require("cors");

const app = express();

app.use(
    cors({
        origin:"http://localhost:3000",
    })
)
app.use(express.json());


let obj = {
        us1 :"100",
        us2 :"100",
    infra :"0",
    bell :"0",
    lockBr :"0"
};

let back = {
    alert :"0",
    known :"0"
};

    
app.get('/', (req, res) => {
    res.send("Home page")
});

// app.get('/api/:id', (req, res) => {
//     obj.push(req.params.id);
//     res.send(obj);
// });
app.get('/api', (req, res) => { //esp reads
    res.send(obj);
});

app.get('/api/testing', (req, res) => { //esp reads
    res.send({
        us1 :"320",
        us2 :"195",
        infra :"1",
        bell :"0",
        lockBr :"1"
    });
});

app.get('/api/ring', (req, res) => { //esp reads
    res.send(back.alert);
});

// app.post('/api/set', (req, res) => {

//     obj = {
//         us1: parseInt(req.query.l1),
//     };
//     console.log(req.query);
//      res.send(obj);
// });

app.post('/api/alert', (req,res) => {
    back.alert= req.body.alert;
    res.send("sucessful")
})

app.post('/api/known', (req,res) => {
    back.known= req.body.known;
    res.send("sucessful")
})

app.post('/api/set', (req, res) => {

    obj = {
        us1: req.body.us1,
        us2 :req.body.us2,
        infra :req.body.infra,
        bell :req.body.bell,
        lockBr :req.body.lockBr
    };
    console.log(req.body);
    res.send(back);
});



//PORT ENVIRONMENT VARIABLE debug : heroku logs -t --app esp8266-api-testing
const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}..`));