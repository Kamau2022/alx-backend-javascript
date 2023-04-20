export default function signUpUser(firstName, lastName) {
  return new Promise((resolve, reject) => {
    const result = { firstName, lastName };
    resolve(result);
    reject(new Error('error'));
  });
}
