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
      fs.readFile('./lecturers.json', 'utf8', (err, data) => {
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
}

module.exports = Lecturer;
