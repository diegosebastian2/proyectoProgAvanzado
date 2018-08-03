'use strict';
var Productos_model = require("../models/productos_models");
var express = require('express');
var router = express.Router();

var p = new Productos_model();
/* GET home page. */
router.get('/', function(req, res, next) {


p.getProductos()
.then((resultado)=>{res.json(resultado)})
//.then((resultado)=>{res.string('Sarasa')})
.catch(error=>{console.log('Registro no encontrado');});

});

module.exports = router;
