module.exports = function averageCalc(...notes) {
  notes.map((e) => {
    return typeof e !== "number" ? new Error("Invalid data") : e;
  });

  const total = Math.round(
    notes.reduce((acc, curr) => acc + curr, 0) / notes.length
  );

  const validate = notes.map((e) => {
    return !e ? [] : e;
  });

  return total || validate;
};
