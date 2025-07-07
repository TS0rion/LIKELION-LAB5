"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Course = void 0;
var Course = /** @class */ (function () {
    function Course(id, name, instructor, duration) {
        if (name === void 0) { name = "Không tên"; }
        if (instructor === void 0) { instructor = "Chưa rõ"; }
        if (duration === void 0) { duration = 1; }
        this.id = id;
        this.name = name;
        this.instructor = instructor;
        this.duration = duration;
    }
    Course.prototype.toString = function () {
        return " [ID: ".concat(this.id, "] ").concat(this.name, " - Gi\u1EA3ng vi\u00EAn: ").concat(this.instructor, " - Th\u1EDDi l\u01B0\u1EE3ng: ").concat(this.duration, " gi\u1EDD");
    };
    return Course;
}());
exports.Course = Course;
