module.exports = {
    mogooseToObject: (mongoose) => {
        return mongoose.map(mongoose => mongoose.toObject())
    },
    mongooseObject: (mongoose) => {
        return mongoose ? mongoose.toObject() : mongoose
    }
}