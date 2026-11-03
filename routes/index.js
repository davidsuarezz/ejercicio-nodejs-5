var express = require('express');
var router = express.Router();

// Datos que se cargan desde el servidor (en un caso real vendrían de una base de datos)
const tecnologias = [
  { nombre: 'Node.js', descripcion: 'Entorno de ejecución de JavaScript en el servidor.', imagen: '/images/nodejs.svg' },
  { nombre: 'Express', descripcion: 'Framework web minimalista para Node.js.', imagen: '/images/express.svg' },
  { nombre: 'EJS', descripcion: 'Motor de plantillas con JavaScript embebido en HTML.', imagen: '/images/ejs.svg' },
  { nombre: 'Socket.IO', descripcion: 'Comunicación bidireccional cliente-servidor.', imagen: '/images/socketio.svg' }
];

const apuntes = [
  'npm init / npm install para gestionar dependencias',
  'package.json y package-lock.json',
  'Rutas y middleware en Express',
  'Plantillas con EJS: <% %> y <%= %>',
  'El event loop: no bloquear el hilo principal'
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Sistemas Web I - Node.js',
    tecnologias: tecnologias,
    apuntes: apuntes
  });
});

module.exports = router;
