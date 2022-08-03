const fs = require('fs');

class Student {
  constructor(id, name, major, semester, city) {
    this.id = id;
    this.name = name;
    this.major = major;
    this.semester = semester;
    this.city = city;
  }

  static getAllStudent() {
    return new Promise((resolve, reject) => {
      fs.readFile('./json/students.json', 'utf8', (err, data) => {
        if (err) {
          reject(err);
        } else {
          let students = JSON.parse(data);
          students = students.map((student) => {
            const { id, name, major, semester, city } = student;
            return new Student(id, name, major, semester, city);
          });
          resolve(students);
        }
      });
    });
  }

  static getInformation(id) {
    return new Promise((resolve, reject) => {
      this.getAllStudent()
        .then((result) => {
          let student = result;
          let findOneStudent = student.filter((student) => student.id === id);
          if (findOneStudent.length !== 0) {
            resolve(findOneStudent[0]);
          } else {
            throw {
              message: `Lecturer with id ${id} not found!`,
            };
          }
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  static create(student) {
    return new Promise((resolve, reject) => {
      this.getAllStudent()
        .then((result) => {
          let students = result;
          const id = students[students.length - 1].id + 1;
          const { name, major, semester, city } = student;
          students.push(new Student(id, name, major, semester, city));
          this.save(students);
          resolve(`Student has been created!`);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  static delete(id) {
    return new Promise((resolve, reject) => {
      this.getAllStudent()
        .then((result) => {
          let students = result;
          students = students.filter((student) => student.id !== id);
          this.save(students);
          resolve(`Student with id ${id} has been deleted!`);
        })
        .catch((err) => reject(err));
    });
  }

  static update(student_id, student) {
    return new Promise((resolve, reject) => {
      this.getAllStudent()
        .then((result) => {
          let students = result;
          const { name, major, semester, city } = student;
          students = students.map((student) => {
            if (student.id === student_id) {
              student.name = name;
              student.major = major;
              student.semester = semester;
              student.city = city;
            }
            return student;
          });
          this.save(students);
          resolve(`Student ${student_id} has been saved!`);
        })
        .catch((err) => reject(err));
    });
  }

  static search(searchQuery) {
    return new Promise((resolve, reject) => {
      this.getAllStudent()
        .then((result) => {
          let students = result;
          // bisa banyak kondisi untuk filter
          const { name, age } = searchQuery;
          let findStudents = students.filter(
            (student) => student.name === name && student.age === +age
          );
          resolve(findStudents);
        })
        .catch((err) => reject(err));
    });
  }

  static save(students) {
    fs.writeFileSync('./json/students.json', JSON.stringify(students, null, 3));
  }
}

module.exports = Student;
