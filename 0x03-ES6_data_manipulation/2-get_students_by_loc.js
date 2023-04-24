export default function getStudentsByLocation(array, city) {
  const myArray = array.filter((arrays) => arrays.location === city);
  return myArray;
}
