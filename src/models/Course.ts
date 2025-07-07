export class Course {
  id: number;
  name: string;
  instructor: string;
  duration: number;

  constructor(
    id: number,
    name: string = "Không tên",
    instructor: string = "Chưa rõ",
    duration: number = 1
  ) {
    this.id = id;
    this.name = name;
    this.instructor = instructor;
    this.duration = duration;
  }

  toString(): string {
    return ` [ID: ${this.id}] ${this.name} - Giảng viên: ${this.instructor} - Thời lượng: ${this.duration} giờ`;
  }
}
