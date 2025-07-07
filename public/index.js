"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CourseManager_1 = require("./CourseManager");
function main() {
    var manager = new CourseManager_1.CourseManager();
    manager.addCourse("Lập trình Web", "Thầy Ha", 30);
    manager.addCourse("UI/UX Design", "Cô Linh", 20);
    manager.addCourse();
    manager.listCourses();
    manager.updateCourse(2, { name: "UI/UX Design Advanced", duration: 25 });
    manager.deleteCourse(1);
    manager.listCourses();
}
main();
