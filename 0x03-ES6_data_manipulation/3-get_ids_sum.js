export default function getStudentIdsSum(array) {
  const myArray = array.map((element) => element.id);
  const sum = myArray.reduce((a, b) => a + b);
  return sum;
}
