export default class HolbertonCourse {
  constructor(name, length, students) {
    this.name = name;
    this.length = length;
    this.students = students;
  }

  // name property
  get name() {
    return this._name;
  }

  set name(Newname) {
    if (typeof Newname !== 'string') {
      throw new TypeError('Name must be a string');
    } else {
      this._name = Newname;
    }
  }

  // length property
  get length() {
    return this._length;
  }

  set length(Newlength) {
    if (typeof Newlength !== 'number') {
      throw new TypeError('Length must be a number');
    } else {
      this._length = Newlength;
    }
  }

  // students property
  get students() {
    return this._students;
  }

  set students(Newstudents) {
    if (
      Array.isArray(Newstudents)
      && Newstudents.every((x) => typeof x === 'string')
    ) {
      this._students = Newstudents;
    } else {
      throw new TypeError('Students must be an array of strings');
    }
  }
}
