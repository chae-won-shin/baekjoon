let isSelfNumber = new Array(10001).fill(false);

const sumOfDigits = (n) => {
  return n
    .toString()
    .split("")
    .reduce((acc, cur) => acc + Number(cur), 0);
};

for (let i = 1; i <= 10000; i++) {
  let temp = i + sumOfDigits(i);
  if (temp <= 10000) {
    isSelfNumber[temp] = true;
  }
}

for (let i = 1; i <= 10000; i++) {
  if (!isSelfNumber[i]) {
    console.log(i);
  }
}
