const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try {
    Tag.findAll({include:[Product]})
    .then((tags) => res.json(tags));
  } catch {
    res.status(404).res.json(err);
  }
});

router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try {
    Tag.findByPk(req, {include:[Product]})
    .then((tags) => res.json(tags));
  } catch {
    res.status(404).res.json(err);
  }
});

router.post('/', (req, res) => {
  // create a new tag
  try {
    Category.create(req.body)
    .then((tags)=> res.status(200).json(tags));  
  } catch {
    res.status(404).res.json(err);
  }
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
  try {
    Tag.update(req.body, {where:{id: req.params.id}})
    .then((tags)=> res.status(200).json(tags));  
  } catch {
    res.status(404).res.json(err);
  }
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
  try {
    Tag.destroy({where: {id: req.params.id}})
    .then((tags)=> res.status(200).json(tags));  
  } catch {
    res.status(404).res.json(err);
  }
});

module.exports = router;
