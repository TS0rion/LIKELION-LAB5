import readline from "readline";
import { CourseManager } from "./CourseManager.js";
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const manager = new CourseManager();
function ask(question) {
  return new Promise((resolve) => rl.question(question, resolve));
}
async function showMenu() {
  let exit = false;
  while (!exit) {
    console.log(`
　　MENU
1. Thêm khóa học
2. Hiển thị danh sách
3. Cập nhật khóa học
4. Xóa khóa học
5. Thoát
    `);
    const choice = await ask("Chọn: ");
    switch (choice.trim()) {
      case "1": {
        const name = await ask("Tên khóa học: ");
        const instructor = await ask("Giảng viên: ");
        const durationStr = await ask("Thời lượng (giờ): ");
        const duration = Number(durationStr) || undefined;
        manager.addCourse(name, instructor, duration);
        break;
      }
      case "2":
        manager.listCourses();
        break;
      case "3": {
        const id = Number(await ask("ID khóa học cần cập nhật: "));
        const name = await ask("Tên mới (bỏ qua nếu không đổi): ");
        const instructor = await ask("GV mới (bỏ qua nếu không đổi): ");
        const durationStr = await ask(
          "Thời lượng mới (bỏ qua nếu không đổi): "
        );
        const duration = durationStr ? Number(durationStr) : undefined;
        manager.updateCourse(id, {
          name: name || undefined,
          instructor: instructor || undefined,
          duration,
        });
        break;
      }
      case "4": {
        const id = Number(await ask("ID khóa học cần xóa: "));
        manager.deleteCourse(id);
        break;
      }
      case "5":
        exit = true;
        rl.close();
        console.log(" Thoát chương trình.");
        break;
      default:
        console.log(" Lựa chọn không hợp lệ!");
    }
  }
}
showMenu();
