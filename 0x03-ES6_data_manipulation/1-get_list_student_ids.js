export default function getListStudentsIds(array) {
  if (!Array.isArray(array)) {
    return [];
  }
  const myArray = array.map((element) => element.id);
  return myArray;
}
