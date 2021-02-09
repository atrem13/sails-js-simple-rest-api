/**
 * BookController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

  async create(req, res){
    try {
      let params = req.allParams();
      // if(!params.nama){
      //   return res.badRequest({err: 'Nama wajib diisi'});
      // }
      const results = await Book.create({
        name: params.name,
        price: params.price,
        category: params.category,
        author: params.author,
        description: params.description,
      });
      return res.ok(results);
    }
    catch (err){
      return res.serverError(err);
    }
  },
  async find(req, res){
    try {
      const books = await Book.find();
      return res.ok(books);
    } catch (err) {
      return res.serverError(err);
    }
  },
  async findOne(req, res){
    try {
      const book = await Book.findOne({
        id: req.params.id
      });
      return res.ok(book);
    } catch (err) {
      return res.serverError(err);
    }
  },
  async update(req, res){
    try {
      let params = req.allParams();
      let attributes = {};
      if(params.name){
        attributes.name = params.name;
      }
      if(params.price){
        attributes.price = params.price;
      }
      if(params.category){
        attributes.category = params.category;
      }
      if(params.auhtor){
        attributes.auhtor = params.auhtor;
      }
      if(params.description){
        attributes.description = params.description;
      }
      const results = await Book.update({id: req.params.id}, attributes, {updatedAt: Date.now()});
      return res.ok(results);
    } catch (err) {
      return res.serverError(err);
    }
  },
  async delete(req, res){
    try {
      const results = await Book.destroy({
        id: req.params.id
      });
      return res.ok(results);
    } catch (err) {
      return res.serverError(err);
    }
  }
};

