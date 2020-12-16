const PhotoServices = require('../services/photos.service')

class PhotoController {
    service = PhotoServices
    createPhoto = (req, res) => {
        this.service.createPhoto({...JSON.parse(req.body.data),name:req.file.filename, filepath: req.file.path})
        .then(result => res.send(result))
    }

    getOne = (req, res) => {
        this.service.getOnePhoto(req.params.id)
        .then(result => res.send(result))
    }
    updatePhoto = (req, res) => {
        this.service.updatePhoto(req.params.id, {...JSON.parse(req.body.data),name:req.file.filename, filepath: req.file.path})
        .then(result => res.send(result))
      
    }
    deletePhoto = (req, res) => {
        this.service.deletePhoto(req.params.id)
        .then(result => res.send(result))
    }
}

module.exports = new PhotoController()