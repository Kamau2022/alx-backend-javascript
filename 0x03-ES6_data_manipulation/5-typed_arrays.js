export default function createInt8TypedArray(length, position, value) {
  if (position >= length || position < 0) {
    throw new Error('Position outside range');
  } else {
    const dataview = new DataView(new ArrayBuffer(length));
    dataview.setInt8(position, value);
    return dataview;
  }
}
