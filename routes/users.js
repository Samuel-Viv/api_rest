/*
On utilise le router express pour définir 4 routes.
On exprime ici ce que l'on appel un CRUD pour Ceate, Read, Update, Delete.
Pour déclarer une route dans express: app.verbeHttp(route, fonction).
Ici on utilise le router pour appeler le verebe Http.
router.get('/:id', service.getById);
le callback sera fourni par un service que l'on va déclarer.
Recourir à des services permet de structurer le projet et séparer les diverses logiques.
On pourra se resservir de ces mêmes services pour d'autre entités que users.
 */
const express = require('express');
const router = express.Router();

const service = require('../services/users');
const private = require('../middleware/private');
// La route pour lire les information d'un utilisateur
router.get('/:id', private.checkJWT, service.getById);
// La route pour ajouter un utilisateur
router.put('/add', service.add);
// La route pour modifier un utilisateur
router.patch('/update',private.checkJWT, service.update);
// La route pour supprimer un utilisateur
router.delete('/delete',private.checkJWT, service.delete);

//Ajout de la route authenticate
router.post('/authenticate', service.authenticate);

module.exports = router;
