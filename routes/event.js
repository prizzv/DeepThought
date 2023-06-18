var express = require('express');
var router = express.Router();

/* GET event page. */
router.get('/events', (req, res, next) => {
    const {id} = req.params;
    
    if(id !== undefined) {
        
    }
});

module.exports = router;
