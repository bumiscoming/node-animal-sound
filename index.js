const express = require('express')
let cors = require('cors');
const app = express()

app.use(cors());

app.get('/', function (req, res) {
    res.send('Hello World')
});

app.get('/sound/:name', (req, res)=> {

    const { name } = req.params;

    if(name === "dog") {
        res.json({
            'name' : name,
            'sound' : "멍멍"
        });
    } else if(name === "cat") {
        res.json({
            'name' : name,
            'sound' : "야옹"
        });
    }
});

// app.get('/user/:id', function (req, res) {
//     // const q = req.params;
//     // console.log(q.id);

//     const q = req.query;
//     console.log(q)

//     res.json({'userId' : q.id})
// });

app.listen(3000);