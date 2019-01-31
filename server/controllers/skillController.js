const Skill = require('../models/Skill')
const skillValidator = require('../validators/skillValidator')
const {catchError} = require('../utils/error')

module.exports = {
    async createSkill(req, res) {
        const {name='', slug='', body=''} = req.body
        const valid = skillValidator({name, slug})

        if (!valid.isValid) {
            return res.status(400).json(valid.error)
        }

        try {  
            let checkSkill = await Skill.findOne({ slug })
            if (checkSkill) {
                return res.status(400).json({
                    slug: 'Slug Already Taken'
                })
            }
            let skill = await new Skill({ name, slug, body }).save()
            res.status(201).json({
                message: 'Skill Created Successfully',
                ...skill._doc
            })
            
        } catch (error) {
            return catchError(res, error)
        }
    },
    async all(req, res) {
        try {
            const skills = await Skill.find()
            if (skills.length === 0) {
                return res.status(200).json({
                    message: 'There is Not Skill Found'
                })
            }

            return res.status(200).json(skills)
        } catch (error) {
            return catchError(res, error)
        }
    }
}

