"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourseManager = void 0;
var Course_1 = require("./models/Course");
var CourseManager = /** @class */ (function () {
    function CourseManager() {
        this.courses = [];
        this.nextId = 1;
    }
    CourseManager.prototype.addCourse = function (name, instructor, duration) {
        var course = new Course_1.Course(this.nextId++, name, instructor, duration);
        this.courses.push(course);
        console.log("Đã thêm khóa học:");
        console.log(course.toString());
    };
    CourseManager.prototype.listCourses = function () {
        if (this.courses.length === 0) {
            console.log("Không có khóa học nào.");
            return;
        }
        console.log(" Danh sách khóa học:");
        this.courses
            .slice()
            .sort(function (a, b) { return a.id - b.id; })
            .forEach(function (course) { return console.log(course.toString()); });
    };
    CourseManager.prototype.updateCourse = function (id, updatedInfo) {
        var courseList = this.courses.filter(function (c) { return c.id === id; });
        var course = courseList[0];
        if (!course) {
            console.log("Kh\u00F4ng t\u00ECm th\u1EA5y kh\u00F3a h\u1ECDc v\u1EDBi ID ".concat(id));
            return;
        }
        var name = updatedInfo.name, instructor = updatedInfo.instructor, duration = updatedInfo.duration;
        if (name)
            course.name = name;
        if (instructor)
            course.instructor = instructor;
        if (duration)
            course.duration = duration;
        console.log("Đã cập nhật khóa học:");
        console.log(course.toString());
    };
    CourseManager.prototype.deleteCourse = function (id) {
        var initialLength = this.courses.length;
        this.courses = this.courses.filter(function (course) { return course.id !== id; });
        if (this.courses.length < initialLength) {
            console.log(" \u0110\u00E3 x\u00F3a kh\u00F3a h\u1ECDc v\u1EDBi ID ".concat(id));
        }
        else {
            console.log(" Kh\u00F4ng t\u00ECm th\u1EA5y kh\u00F3a h\u1ECDc \u0111\u1EC3 x\u00F3a v\u1EDBi ID ".concat(id));
        }
    };
    return CourseManager;
}());
exports.CourseManager = CourseManager;
