const averageCalc = require("./average");

test("The average calculator should be 10", () => {
  const n = null;
  expect(averageCalc(10, 10, 10)).toEqual(10);
  expect(averageCalc(10, 10, 10)).not.toBe(n);
});

test("The average calculator should be a number", () => {
  expect(averageCalc("foo", "bar", "abc")).not.toBe(typeof Number);
});

test("The average calculator should not be an empty array ", () => {
  expect(averageCalc()).toStrictEqual([]);
});
