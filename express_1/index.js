const express = require("express");
const app = express();
const port = 5000;
app.use(express.json());

const shopinglist = []


// const shopinglist = [{ id: 1, item: "flour", price: 35 },
// { id: 2, item: 'rice', price: 20 }]
//get
app.get('/list', (req, res) => {


    res.status(200).json({ found: shopinglist.length, list: shopinglist })
});

//post
app.post('/list', (req, res) => {
//ternery
    // const age = 10  testing conditions
    // age > 20 ? console.log('HI') : console.log("byeeee");


    let id = shopinglist[shopinglist.length - 1 ] ? shopinglist[shopinglist.length - 1].id + 1:1


    // let id = shopinglist[shopinglist.length - 1].id + 1;

    shopinglist.push({ id: id, item: req.body.item, price: req.body.price })
    res.status(201).json({ message: 'New list is created !!!' })


})



app.listen(port, () => {
    console.log(`Server is listening on port 500 and also !!!!!!!!!!!!!!!!`);
});
