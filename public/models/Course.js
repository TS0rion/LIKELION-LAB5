export class Course {
    constructor(id, name = "Không tên", instructor = "Chưa rõ", duration = 1) {
        this.id = id;
        this.name = name;
        this.instructor = instructor;
        this.duration = duration;
    }
    toString() {
        return ` [ID: ${this.id}] ${this.name} - Giảng viên: ${this.instructor} - Thời lượng: ${this.duration} giờ`;
    }
}
