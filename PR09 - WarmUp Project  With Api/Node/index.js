const express = require('express');
const fs = require('fs');
const cors = require('cors');
const path = require('path');

const app = express();

const filePath = path.join(__dirname, '/utils/data.json')


app.use(cors({
    origin : 'http://localhost:5173'
}
));


app.use(express.json());

let data = JSON.parse(fs.readFileSync(filePath));

async function handleDelete(Id , res){
  data = await data.filter(product => product.id !== Id);
  fs.writeFileSync("./utils/data.json", JSON.stringify(data));
  res.send(data);
}

app.get('/', (req, res) => {
  res.send(data);
});


app.post('/add' , (req, res)=> {
  const newProduct = { "id" : data.length + 1,...req.body};
  data.push(newProduct);
  console.log(newProduct);
  fs.writeFile("./utils/data.json" , JSON.stringify(data));
  res.send(data);
});

app.put("/edit/:id" , (req, res) => {
  const EditedProduct = { "id" : Number(req.params.id) , ...req.body}
  data.forEach((product , index) => {if(product.id === Number(req.params.id))  {data[index] = EditedProduct}} )
    fs.writeFile("./utils/data.json" , JSON.stringify(data));
  res.send(data);
});

app.delete('/delete/:id', (req, res) => {
  const Id = Number(req.params.id);
  handleDelete(Id ,res)
});

app.listen(3000);