const express = require('express')
const router = express.Router()
const {getGoals, setGoals, updateGoals, deleteGoals} = require('../controllers/goalControllers')

router.get('/',getGoals); // can be written as - router.route('/').get(getGoals).post(setGoals)
router.post('/',setGoals); //remove 5,6 lines and write only the above
router.put('/:id',updateGoals);
router.delete('/:id',deleteGoals);



module.exports = router