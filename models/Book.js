module.exports = (model, Schema) => {

  const Book = new Schema ({
    title: String,
    authors: [String],
    description: String,
    image: String,
    link: String,
    saved: {
      type: Boolean,
      default: false
    }
  })

  return model('Book', Book)
}