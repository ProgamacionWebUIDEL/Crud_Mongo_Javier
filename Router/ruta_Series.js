const express = require('express'),
    router = express.Router(),
    serie = require('../Controlers/controle_Serie');

router.use('/Series',serie);
module.exports = router;