import { sum, calcAge } from "../sum";

test("Sum function should calculate sum of two numbers", () => {
  const result = sum(4, 5);

  // Assertion
  expect(result).toBe(9);
});

test("CalcAge function should calculate the age", () => {
  const result = calcAge(1990);

  // Assertion
  expect(result).toBe(34);
  console.log(result);
});
