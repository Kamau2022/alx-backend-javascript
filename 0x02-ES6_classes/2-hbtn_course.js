export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = name;
    this._length = length;
    this._students = students;
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
    if (typeof Newstudents !== 'string') {
      throw new TypeError('students must be an array');
    }
    this._name = Newstudents;
  }
}
