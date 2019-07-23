const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const UserSchema = new Schema({
  firstName: {type: String, default: ''},
  lastName: {type: String, default: ''},
  password: {type: String, default: ''},
  email: {type: String, default: ''},
  gender: {type: String, default: ''},
  bio: {type: String, default: ''},
  instagram: {type: String, default: ''},
  linkedin: {type: String, default: ''},
  talents: Array,
  // bio: String,
  // instagram: String,
  // linkedin: String,
  talents: {
    dancer: {
      properties: {
        style: String,
      },
      images: Array,
      videos: Array,
    },
    photographer: {
      properties: {
        style: String,
      },
      images: Array,
      videos: Array,
    }
  }
});


// const UserSchema = new Schema({
//   username: String,
//   password: String,
//   email: String,
//   bio: String
// });

const User = mongoose.model('User', UserSchema);

module.exports = User;