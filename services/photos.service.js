const Photo = require('../models/photo');


class PhotoServices {

    async createPhoto(dataToUpdate) {
        await Photo.create({id:dataToUpdate.id,
            name: dataToUpdate.name,
            user_id: dataToUpdate.user_id,
            filepath: dataToUpdate.filepath});
        return ('Пользователь успешно создан!')
    }


    async getOnePhoto(id) {
        const photo = await Photo.findOne({ where: { id: id } });
        if (photo === null) {
        return('Фото с таким id не существует!');
        } else {
        return(await photo.dataValues); 
        }
    }

    async updatePhoto(id, dataToUpdate) {
        const photo = await Photo.findOne({ where: { id: id } });
        if (photo === null) {
            return('Такого фото не существует!');
        } else {
        photo.name = dataToUpdate.name
        photo.user_id = dataToUpdate.user_id
        photo.filepath = dataToUpdate.filepath
        await photo.save({ fields: ['name', 'user_id', 'filepath'] })
        return ('Фото успешно обновлено!')
        }
    }

    async deletePhoto(id) {
        const user = await Photo.findOne({ where: { id: id } });
        if (user === null) {
            return('Такого фото не существует!');
        } else {
            await user.destroy()
            return ('Фото успешно удалёно!')
        }
    }
  }
module.exports = new PhotoServices()