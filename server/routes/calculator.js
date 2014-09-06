/**
 * Created by guillermo on 06/09/2014.
 */
'use strict';
/**
 * The router
 */
var router = require('express').Router();

/**
 * Validate param number1
 */
router.param('number1', function(req, res, next, number1) {
    if (isNaN(number1)) {
        res.statusCode = 400;
        return res.send({error: "Parameter number1 is not a number"});
    }

    req.number1 = number1;
    next();
});

/**
 * Validate param number2
 */
router.param('number2', function(req, res, next, number2) {
    if (isNaN(number2)) {
        res.statusCode = 400;
        return res.send({error: "Parameter number2 is not a number"});
    }

    req.number2 = number2;
    next();
});

/**
 * Handles the sum operation
 */
router.get('/sum/:number1/:number2', function(req, res) {
    res.send({ result: Number(req.params.number1) + Number(req.params.number2)});
});

/**
 * Handles the subtraction operation
 */
router.get('/subtract/:number1/:number2', function(req, res) {
    res.send({ result: Number(req.params.number1) - Number(req.params.number2)});
});

module.exports = router;