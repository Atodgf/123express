const Photo = require('../models/photo');


class PhotoServices {

    async createPhoto(dataToUpdate) {
        await Photo.create({id:dataToUpdate.id,
            name: dataToUpdate.name,
            user_id: dataToUpdate.user_id,
            filepath: dataToUpdate.filepath});
        return ('Photo successfully created!')
    }


    async getOnePhoto(id) {
        const photo = await Photo.findOne({ where: { id: id } });
        if (photo === null) {
        return('Photo not exist!');
        } else {
        return(await photo.dataValues); 
        }
    }

    async updatePhoto(id, dataToUpdate) {
        const photo = await Photo.findOne({ where: { id: id } });
        if (photo === null) {
            return('Photo not exist!');
        } else {
        photo.name = dataToUpdate.name
        photo.user_id = dataToUpdate.user_id
        photo.filepath = dataToUpdate.filepath
        await photo.save({ fields: ['name', 'user_id', 'filepath'] })
        return ('Photo successfully updated!')
        }
    }

    async deletePhoto(id) {
        const user = await Photo.findOne({ where: { id: id } });
        if (user === null) {
            return('Photo not exist!');
        } else {
            await user.destroy()
            return ('Photo successfully deleted!')
        }
    }
  }
module.exports = new PhotoServices()