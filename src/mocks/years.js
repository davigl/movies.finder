const years = () => {
  const currentYear = new Date().getFullYear();
  const output = [];

  for (let year = currentYear; year >= 1984; year -= 1) {
    output.push(year);
  }

  return output;
};

export default years;
