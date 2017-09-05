const Sequelize = require('sequelize');
const dbhost = "127.0.0.1";
const dbuser = "root";
const dbdatabase = "seq";
const dbpassword = "";
const sequelize = new Sequelize(dbdatabase, dbuser, dbpassword, {
    host: dbhost,
    dialect: 'mysql',

    pool: {
        max: 5,
        min: 0,
        idle: 10000
    }
});

const User = sequelize.define('user', {
    firstName: {
        type: Sequelize.STRING
    },
    lastName: {
        type: Sequelize.STRING
    }
});

const Post = sequelize.define('post', {
    firstName: {
        type: Sequelize.STRING
    },
    lastName: {
        type: Sequelize.STRING
    }
});

exports.User = User;
exports.Post = Post;

