export default function createInt8TypedArray(length, position, value) {
  const dataview = new DataView(new ArrayBuffer(length));
  dataview.setInt8(position, value);
  return dataview;
}
