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

const Player = sequelize.define('player', {
    name: {
        type: Sequelize.STRING
    },
    age: {
        type: Sequelize.STRING
    }
});

const Team = sequelize.define('team', {
    name: {
        type: Sequelize.STRING
    },
    info: {
        type: Sequelize.STRING
    }
});

const Coach = sequelize.define('coach', {
    name: {
        type: Sequelize.STRING
    },
    age: {
        type: Sequelize.STRING
    }
});

Player.belongsTo(Team);
Coach.hasOne(Team);

sequelize.sync();

exports.Player = Player;
exports.Team = Team;
exports.Coach = Coach;

