const Course = require('../models/Course');
const { mutipleMonooseToObject } = require('../../util/mongooose');

class MeController {
    //[GET] /me/stored/courses
    storedCourses(req, res, next) {
        Course.find({})
            .then((courses) =>
                res.render('me/stored-courses', {
                    courses: mutipleMonooseToObject(courses),
                }),
            )
            .catch(next);
    }
}

module.exports = new MeController();
