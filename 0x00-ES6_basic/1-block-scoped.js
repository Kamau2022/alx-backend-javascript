export default function taskBlock (trueOrFalse) {
  var task = false;
  var task2 = true;
  if (trueOrFalse) {
     //eslint-disable-next-line no-unused-vars
    var task = false;
    //eslint-disable-next-line no-unused-vars
    var task2 = true;
  }
  return [task, task2];
}
