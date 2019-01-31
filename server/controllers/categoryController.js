const Category = require("../models/Category");
const categoryValidator = require("../validators/categoryValidator");
const { catchError } = require('../utils/error')

module.exports = {
  async createCategory(req, res) {
    const { name = "", slug = "", body = "" } = req.body;
    let valid = categoryValidator({ name, slug });

    if (!valid.isValid) {
      return res.status(400).json(valid.error);
    }

    let checkCategory = await Category.findOne({ slug });
    if (checkCategory) {
      return res.status(400).json({
        slug: "Slug Already Taken"
      });
    }
    
        try {
            let category = new Category({name, slug, body})
            let newCategory = await category.save()

            res.status(201).json({
                message: 'Category Created Successfully',
                ...newCategory._doc // TODO: Remove in Future
            })
        } catch (error) {
            return catchError(res, error)
        }
    },
    
    async all(req, res) {
        try {
            const category = await Category.find()
            if (category.length === 0) {
                return res.status(200).json({
                    message: 'There is no Category Available'
                })
            }

            return res.status(200).json(category)
        } catch (error) {
            return catchError(res, error)
        }
    }
};
