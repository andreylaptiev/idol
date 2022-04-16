const generateId = (min=10, max=100) => {
  /* Generates random numeric 8 digit id
  * gets four random integers in interval [min; max)
  * concatenates them into string
  * returns Promise filled with string type id
  */

  return new Promise(resolve => {
    const int1 = Math.round(Math.random() * (max - min) + min);
    const int2 = Math.round(Math.random() * (max - min) + min);
    const int3 = Math.round(Math.random() * (max - min) + min);
    const int4 = Math.round(Math.random() * (max - min) + min);

    const id = `${int1}${int2}${int3}${int4}`;

    resolve(id);
  });
}

module.exports = generateId;
