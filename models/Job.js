const Sequelize = require('sequelize');
const db = require('../db/connection');

const Job = db.define('job', {
    company: {
        type: Sequelize.STRING,
    },
    title: {
        type: Sequelize.STRING,
    },
    description: {
        type: Sequelize.STRING,
    },
    schedule: {
        type: Sequelize.STRING,
    },
    salary: {
        type: Sequelize.STRING,
    },
    email: {
        type: Sequelize.STRING,
    },
    new_job: {
        type: Sequelize.INTEGER,
    }
});

module.exports = Job;