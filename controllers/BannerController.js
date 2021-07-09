const { HeroSection } = require('../models')

class HeroSectionControllers {

  static async fetchBanners(req, res, next) {
    try {
      const videos = await HeroSection.findAll(
        {
          order: [
            ['id', 'DESC'],
          ]
        })
      res.status(200).json({ videos })
      
    } catch (error) {
      next(error);
    }
  }

  static async inputBanner(req, res, next) {
    const { title, desc, video_url } = req.body
    try {
      const video = await HeroSection.create({ title, desc, video_url })

      res.status(201).json(video)

    } catch (error) {
      next(error);
    }
  }

  static async getBannerId(req, res, next) {
    const { id } = req.params
    try {
      const video = await HeroSection.findByPk(id)

      res.status(201).json(video)

    } catch (error) {
      next(error);
    }
  }

  static async updateBanner(req, res, next) {
    const { title, desc, video_url } = req.body
    const { id } = req.params
    try {

      await HeroSection.update({ title, desc, video_url }, { where: { id } })

      res.status(200).json({ message : 'Successfully update video' })
      
    } catch (error) {
      next(error);    
    }
  }

  static async deleteBanner(req, res, next) {
    const { id } = req.params
    try {

      await HeroSection.destroy({ where: { id } })

      res.status(200).json({ message : 'Successfully delete video' })
      
    } catch (error) {
      next(error);      
    }
  }

}

module.exports = HeroSectionControllers
