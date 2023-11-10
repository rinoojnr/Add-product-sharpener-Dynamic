const fs = require('fs');
const path = require('path');
const rootDir = require('../util/path')


const filePathe = path.join(rootDir,'data','cart.json');
module.exports = class Cart{
    static addProdect(id,productPrice){
        fs.readFile(filePathe,(err,data)=>{
            let cart = {product : [],totalPrice : 0};
            if(!err){
                cart = JSON.parse(data);
            }
            const existingProductIndex = cart.product.findIndex(p=>p.id ==id);
            const existingProduct =cart.product[existingProductIndex];
            let updatingProduct;
            if(existingProduct){
                updatingProduct ={...existingProduct};
                updatingProduct.qty +=1;
                cart.product = [...cart.product]
                cart.product[existingProductIndex] = updatingProduct;
            }else{
                updatingProduct ={id:id ,qty:1};
                cart.product = [...cart.product,updatingProduct]
            }
            cart.totalPrice = cart.totalPrice +  +  productPrice; 
            fs.writeFile(filePathe,JSON.stringify(cart),(err)=>{
                console.log(err);
            })
        })
    }
}