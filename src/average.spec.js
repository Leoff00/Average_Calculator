const averageCalc = require("./average");

test("The average calculator should be 9", () => {
  expect(averageCalc(10, 9, 9)).toBe(9);
});

test("The average calculator should be an error", () => {
  expect(averageCalc("foo", "bar", "abc")).toBe("Invalid Data");
});

test("The average calculator should request for arguments", () => {
  expect(averageCalc()).toBe("Please, enter with the args length");
});
