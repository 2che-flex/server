const { story } = require('../models')

class StoryController {
  static async fetchStorys(req, res, next) {
    try {
      const teks = await story.findAll(
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
      const dataStory = await story.create({ teks })

      res.status(201).json(dataStory)

    } catch (error) {
      next(error);
    }
  }

  static async getStoryId(req, res, next) {
    const { id } = req.params
    try {
      const dataStory = await story.findByPk(id)

      res.status(201).json(dataStory)

    } catch (error) {
      next(error);
    }
  }

  static async updateStory(req, res, next) {
    const { teks } = req.body
    const { id } = req.params
    try {

      await story.update({ teks }, { where: { id } })

      res.status(200).json({ message : 'Successfully update data story' })
      
    } catch (error) {
      next(error);    
    }
  }

  static async deleteStory(req, res, next) {
    const { id } = req.params
    try {

      await story.destroy({ where: { id } })

      res.status(200).json({ message : 'Successfully delete data story' })
      
    } catch (error) {
      next(error);      
    }
  }
}

module.exports = StoryController
