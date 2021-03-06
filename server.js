const express = require("express");
const cors = require('cors')
const mongoose = require('mongoose');
const requireDir = require('require-dir');

// Iniciando o App
const app = express();
app.use(express.json());
app.use(cors());

// Iniciando o DB
mongoose.connect(
    'mongodb://localhost:27017/nodeapi',
    { useUnifiedTopology: true, 
    useNewUrlParser:true}
);

requireDir('./src/models');

// const Product = mongoose.model('Product');

//rotas
app.use('/api',require('./src/routes'));


//  primeira rota
// app.get("/",(req,res)=>{
//     Product.create({
//         title:'React Native',
//         description: 'Build native apps with React',
//         url: 'http://github.com/facebook/react-native'
//     })
    
//     return  res.send('Hello rocketseat'); 
// });

app.listen(3001);