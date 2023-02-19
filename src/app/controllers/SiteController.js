const Course = require('../models/Course');
const { mutipleMonooseToObject } = require('../../util/mongooose');

class SiteController {
    // [GET] /
    index(req, res, next) {
        Course.find({})
            .then((courses) => {
                res.render('home', {
                    courses: mutipleMonooseToObject(courses),
                });
            })

            .catch(next);
    }

    //[GET] /search
    show(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
