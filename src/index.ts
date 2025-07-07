import { CourseManager } from "./CourseManager";

function main() {
  const manager = new CourseManager();

  manager.addCourse("Lập trình Web", "Thầy Ha", 30);
  manager.addCourse("UI/UX Design", "Cô Linh", 20);
  manager.addCourse();

  manager.listCourses();

  manager.updateCourse(2, { name: "UI/UX Design Advanced", duration: 25 });

  manager.deleteCourse(1);

  manager.listCourses();
}

main();
