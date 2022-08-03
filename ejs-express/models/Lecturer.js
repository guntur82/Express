const fs = require('fs');

class Lecturer {
  constructor(id, name, subject, age, city) {
    this.id = id;
    this.name = name;
    this.subject = subject;
    this.age = age;
    this.city = city;
  }

  static getAllLecturer() {
    return new Promise((resolve, reject) => {
      fs.readFile('./json/lecturers.json', 'utf8', (err, data) => {
        if (err) {
          reject(err);
        } else {
          let lecturers = JSON.parse(data);
          lecturers = lecturers.map((lecturer) => {
            const { id, name, subject, age, city } = lecturer;
            return new Lecturer(id, name, subject, age, city);
          });
          resolve(lecturers);
        }
      });
    });
  }

  static getInformation(id) {
    return new Promise((resolve, reject) => {
      this.getAllLecturer()
        .then((result) => {
          let lecturer = result;
          let findOneLecturer = lecturer.filter(
            (lecturer) => lecturer.id === id
          );
          if (findOneLecturer.length !== 0) {
            resolve(findOneLecturer[0]);
          } else {
            throw {
              message: `Lecturer with id ${id} not found!`,
            };
          }
          // mau manggil data id/age ga bisa kalo di web? (SOLUSINYA JADIIN STRING)
          // let sample = findOneLecturer.map((lecturer) => {
          //   const { id, name, subject, age, city } = lecturer;
          //   return new Lecturer(id, name, subject, age, city);
          // });
          //   let sample = findOneLecturer[0];
          //   let test = sample.id;
          //   console.log(typeof sample);
          //   resolve(String(test));
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  static create(lecturer) {
    return new Promise((resolve, reject) => {
      this.getAllLecturer()
        .then((result) => {
          let lecturers = result;
          const id = lecturers[lecturers.length - 1].id + 1;
          // lecturer ini diambil dari parameter yang ada di create,sedangkan lecturers pake "s" itu parameter buat nambung json utama
          const { name, subject, age, city } = lecturer;
          lecturers.push(new Lecturer(id, name, subject, age, city));
          this.save(lecturers);
          resolve(`Lecturer has been created!`);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  static delete(id) {
    return new Promise((resolve, reject) => {
      this.getAllLecturer()
        .then((result) => {
          let lecturers = result;
          lecturers = lecturers.filter((lecturer) => lecturer.id !== id);
          this.save(lecturers);
          resolve(`Lecturer with id ${id} has been deleted!`);
        })
        .catch((err) => reject(err));
    });
  }

  static update(lecturer_id, lecturer) {
    return new Promise((resolve, reject) => {
      this.getAllLecturer()
        .then((result) => {
          let lecturers = result;
          const { name, subject, age, city } = lecturer;
          lecturers = lecturers.map((lecturer) => {
            if (lecturer.id === lecturer_id) {
              lecturer.name = name;
              lecturer.subject = subject;
              lecturer.age = age;
              lecturer.city = city;
            }
            return lecturer;
          });
          this.save(lecturers);
          resolve(`Lecturer ${lecturer_id} has been saved!`);
        })
        .catch((err) => reject(err));
    });
  }

  static search(searchQuery) {
    return new Promise((resolve, reject) => {
      this.getAllLecturer()
        .then((result) => {
          let lecturers = result;
          // bisa banyak kondisi untuk filter
          const { name, age } = searchQuery;
          let findLecturers = lecturers.filter(
            (lecturer) => lecturer.name === name && lecturer.age === +age
          );
          resolve(findLecturers);
        })
        .catch((err) => reject(err));
    });
  }

  static save(lecturers) {
    fs.writeFileSync(
      './json/lecturers.json',
      JSON.stringify(lecturers, null, 3)
    );
  }
}

module.exports = Lecturer;
