asyncHandler = require(express-async-handler)


// @desc get Goals
// @route GET api/goals
// @access private
const getGoals =asyncHandler( async(req,res) => {
    res.status(200).json({ message: 'get Goals'})
})


// @desc set Goals
// @route POST api/goals
// @access private
const setGoals =asyncHandler( async (req,res) => {
    if(!req.body.text) {
        res.status(400)
        throw new Error('Please add a text field')
    }
   
      res.json({ message: 'Please Enter some text'})
 
    
})


// @desc update Goals
// @route PUT api/goals/:id
// @access private
const updateGoals =asyncHandler( async (req,res) => {
    res.status(200).json({ message: `update Goals ${req.params.id}`})
}
)

// @desc delete Goals
// @route DELETE api/goals/:id
// @access private
const deleteGoals =asyncHandler( async (req,res) => {
    res.status(200).json({ message: `delete Goals ${req.params.id}`})
})

module.exports = {
    getGoals, setGoals, updateGoals, deleteGoals
}