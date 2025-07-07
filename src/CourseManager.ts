import { Course } from "./models/Course";

export class CourseManager {
  courses: Course[] = [];
  nextId: number = 1;

  addCourse(name?: string, instructor?: string, duration?: number): void {
    const course = new Course(this.nextId++, name, instructor, duration);
    this.courses.push(course);
    console.log("Đã thêm khóa học:");
    console.log(course.toString());
  }

  listCourses(): void {
    if (this.courses.length === 0) {
      console.log("Không có khóa học nào.");
      return;
    }

    console.log(" Danh sách khóa học:");
    this.courses
      .slice()
      .sort((a, b) => a.id - b.id)
      .forEach((course) => console.log(course.toString()));
  }

  updateCourse(
    id: number,
    updatedInfo: { name?: string; instructor?: string; duration?: number }
  ): void {
    const courseList = this.courses.filter((c) => c.id === id);
    const course = courseList[0];

    if (!course) {
      console.log(`Không tìm thấy khóa học với ID ${id}`);
      return;
    }

    const { name, instructor, duration } = updatedInfo;
    if (name) course.name = name;
    if (instructor) course.instructor = instructor;
    if (duration) course.duration = duration;

    console.log("Đã cập nhật khóa học:");
    console.log(course.toString());
  }

  deleteCourse(id: number): void {
    const initialLength = this.courses.length;
    this.courses = this.courses.filter((course) => course.id !== id);
    if (this.courses.length < initialLength) {
      console.log(` Đã xóa khóa học với ID ${id}`);
    } else {
      console.log(` Không tìm thấy khóa học để xóa với ID ${id}`);
    }
  }
}
