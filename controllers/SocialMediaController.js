const { SocialMedia } = require('../models')

class SocialMediaController {

  static async fetchSocialMedia(req, res, next) {
    try {
      const socialMedia = await SocialMedia.findAll(
        {
          order: [
            ['id', 'DESC'],
          ]
        })
      res.status(200).json({ socialMedia })
      
    } catch (error) {
      next(error);
    }
  }

  static async inputSocialMedia(req, res, next) {
    const { name, url, imageData } = req.body
    try {
      const socialMedia = await SocialMedia.create({ name, url, imageData })

      res.status(201).json(socialMedia)

    } catch (error) {
      next(error);
    }
  }

  static async getSocialMediaId(req, res, next) {
    const { id } = req.params
    try {
      const socialMedia = await SocialMedia.findByPk(id)

      res.status(200).json(socialMedia)

    } catch (error) {
      next(error);
    }
  }

  static async updateSocialMedia(req, res, next) {
    const { name, url, imageData } = req.body
    const { id } = req.params
    try {

      await SocialMedia.update({ name, url, imageData }, { where: { id } })

      res.status(200).json({ message : 'Successfully update' })
      
    } catch (error) {
      next(error);    
    }
  }

  static async deleteSocialMedia(req, res, next) {
    const { id } = req.params
    try {

      await SocialMedia.destroy({ where: { id } })

      res.status(200).json({ message : 'Successfully delete' })
      
    } catch (error) {
      next(error);      
    }
  }

}

module.exports = SocialMediaController
