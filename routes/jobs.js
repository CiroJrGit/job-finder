const express = require('express');
const router = express.Router();
const Job = require('../models/Job');

// router.get('/test', (req, res) => {
//     res.send('Deu certo, tudo nosso nada deles!!');
// });


// detail job
router.get('/view/:id', (req, res) => Job.findOne({
    where: {id: req.params.id}
}).then(job => {
    res.render('view', {
        job
    });
}).catch(err => console.log(err)));


// add form
router.get('/add', (req, res) => {
    res.render('add');
});

// add job post
router.post('/add', (req, res) => {
    let {company, title, description, schedule, salary, email, new_job} = req.body;

    // insert
    Job.create({
        company,
        title,
        description,
        schedule,
        salary,
        email,
        new_job
    })
    .then(() => res.redirect('/'))
    .catch(err => console.log(err));
});

module.exports = router;