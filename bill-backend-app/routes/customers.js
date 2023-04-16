const express = require('express')
const router = express.Router()

//on charge un middleware externe qui sert à contrôler qu'on a bien un params :id dans les requêtes
const verifyParams = require('../middleware/verifyParams')

// on importe le contrôleur des routes
const ctrl = require('../controlllers/customers.js')

// récupère la liste des clients
router.get('/', ctrl.getCustomers)

// récupère les nbr derniers clients
router.get('/lastcustomers/:nbr', ctrl.getLastCustomers)

// récupère un client en fonction de son id
router.get('/:id', verifyParams, ctrl.getCustomer)
// créer un nouveau client
router.post('/', ctrl.postCustomer)
// modifie un client en fonction de son id
router.patch('/:id', verifyParams, ctrl.patchCustomer)
// supprime un client en fonction de son id
router.delete('/:id', verifyParams, ctrl.deleteCustomer)


module.exports = router
