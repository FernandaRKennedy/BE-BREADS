const router = require('express').Router();
const Bread = require('../models/bread');
const Baker = require ('../models/baker')

//get all the bread
router.get('/', async (req, res) => {
try {
  const bread = await Bread.find()
  const bakers = await Baker.find()
  res.render('index', {
    breads: bread,
    bakers
  })
} catch (error) {
  console.log('error', error)
  res.redirect('/breads')
}
})


router.get('/new' ,  async (req, res) => {
  const bakers = await Baker.find()
  res.render('new', { bakers })
 })

//get bread by id - updated
router.get('/:id', async (req, res) => {
  const { id } = req.params
  const bread = await Bread.findById(id).populate('baker')
  res.render('show', {
    bread,
  })
});
//updated
router.get('/:id/edit',  async (req,res)=> {
  const { id } = req.params
  const bread = await Bread.findById(id)
  const bakers = await Baker.find()
  res.render('edit', {
    bread,
    bakers
  })
})
//updated
router.post('/', async (req,res) => {
  if(!req.body.image) req.body.image = undefined
  if(req.body.hasGluten === 'on') {
    req.body.hasGluten = true
  }else{
    req.body.hasGluten = false
  }
  await Bread.create(req.body) //  await prevent the race condition 
  res.status(303).redirect('/breads')
})
//updated
router.put('/:id',  async(req,res) => {
  const { id } = req.params

  if(!req.body.image) req.body.image = undefined
  if(req.body.hasGluten === 'on') {
    req.body.hasGluten = true
  }else{
    req.body.hasGluten = false
  }
  await Bread.findByIdAndUpdate(id, req.body)
  res.status(303).redirect(`/breads/${id}`)
})
// updated
router.delete('/:id', async (req,res)=> {
  const { id } = req.params
  await Bread.findByIdAndDelete(id)
  res.status(303).redirect('/breads')
})

//seed the database 
 router.get('/data/seed', async (req,res)=>{
  const data = [
    {
      name: 'Rye',
      hasGluten: true,
      image: 'https://images.unsplash.com/photo-1595535873420-a599195b3f4a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
    },
    {
      name: 'French',
      hasGluten: true,
      image: 'https://images.unsplash.com/photo-1534620808146-d33bb39128b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
    },
    {
      name: 'Gluten Free',
      hasGluten: false,
      image: 'https://images.unsplash.com/photo-1546538490-0fe0a8eba4e6?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80',
    },
    {
      name: 'Pumpernickel',
      hasGluten: true,
      image: 'https://images.unsplash.com/photo-1586444248902-2f64eddc13df?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80',
    }
  ]
  await Bread.insertMany(data)
  res.status(303).redirect('/breads')
})

module.exports = router;