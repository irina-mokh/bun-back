import { Category } from '../db/models.js';

class CategoryController {
  async getAll (req, res) {
    const categories = await Category.findAll();
    return res.json(categories);
  }

  async create (req, res) {
    const { name, type, total } = req.body;
    const category = await Category.create( { name, type, total} );
    return res.json(category);
  }

  async edit (req, res) {
    const { name, type, total } = req.body;
    const category = await Category.set( { name, type, total} );
    return res.json(category);
  }

  async delete () {
    
  }
}

export const categoryController = new CategoryController();