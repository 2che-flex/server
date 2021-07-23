const { Story } = require('../models')

class StoryController {
  static async fetchStorys(req, res, next) {
    try {
      const teks = await Story.findAll(
        {
          order: [
            ['id', 'DESC'],
          ]
        })

      res.status(200).json({ teks })
      
    } catch (error) {
      next(error);
    }
  }

  static async inputStory(req, res, next) {
    const { teks } = req.body
    try {
      const dataStory = await Story.create({ teks })

      res.status(201).json(dataStory)

    } catch (error) {
      next(error);
    }
  }

  static async getStoryId(req, res, next) {
    const { id } = req.params
    try {
      const dataStory = await Story.findByPk(id)

      res.status(201).json(dataStory)

    } catch (error) {
      next(error);
    }
  }

  static async updateStory(req, res, next) {
    const { teks } = req.body
    const { id } = req.params
    try {

      await Story.update({ teks }, { where: { id } })

      res.status(200).json({ message : 'Successfully update data Story' })
      
    } catch (error) {
      next(error);    
    }
  }

  static async deleteStory(req, res, next) {
    const { id } = req.params
    try {

      await Story.destroy({ where: { id } })

      res.status(200).json({ message : 'Successfully delete data Story' })
      
    } catch (error) {
      next(error);      
    }
  }
}

module.exports = StoryController
