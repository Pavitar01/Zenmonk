const arr2 = [];
const hello = (k) => {
  let arr = [1, 2, 3, 4, 5, 6];
  let n = arr.length;
  for (let i = 0; i < n; i++) {
    arr2[(i + k) % n] = arr[i];
  }
};
hello(1);
console.log(arr2);
