var express = require('express');
var router = express.Router();

// Usuarios de ejemplo (solo para el ejercicio; más adelante se guardarán en una base de datos)
const usuarios = {
  alumno: '1234',
  admin: 'admin'
};

/* GET login page. */
router.get('/', function(req, res, next) {
  res.render('login', { title: 'Iniciar sesión', error: null, ok: null });
});

/* POST login: comprueba las credenciales enviadas por el formulario. */
router.post('/', function(req, res, next) {
  const { username, password } = req.body;

  if (username && usuarios[username] === password) {
    return res.render('login', {
      title: 'Iniciar sesión',
      error: null,
      ok: 'Bienvenido, ' + username + '. Credenciales correctas.'
    });
  }

  res.status(401).render('login', {
    title: 'Iniciar sesión',
    error: 'Usuario o contraseña incorrectos.',
    ok: null
  });
});

module.exports = router;
