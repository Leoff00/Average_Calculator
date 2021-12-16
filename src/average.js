module.exports = function averageCalc(...notes) {
  if (!notes)
    return new Error(`Please, enter with the args length -> ${notes.length}`);

  notes.map((e) => {
    return typeof e !== "number" ? new Error("Invalid data") : e;
  });

  const total = Math.round(
    notes.reduce((acc, curr) => acc + curr, 0) / notes.length
  ).toFixed(1);

  return total;
};
