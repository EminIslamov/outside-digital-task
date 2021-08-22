const calculate = (salary) => {
  if (salary === 0 || Number.isNaN(salary)) {
    return [];
  }

  const yearSalary = salary * 12; // 120000
  const percent = yearSalary * 0.13; // 15600
  const max = 260000;
  const sum = [];

  if (percent >= max) {
    return [260000];
  }

  const parts = Math.ceil(max / percent);

  const left = max % percent;

  const yearly = Math.ceil((max - left) / parts - 1);

  for (let i = 0; i < parts; i++) {
    sum.push(yearly);
  }

  sum.push(Math.ceil(left));

  return sum;
};

export default calculate;
