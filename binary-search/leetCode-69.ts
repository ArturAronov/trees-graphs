// https://leetcode.com/problems/sqrtx

function mySqrt(x: number): number {
  let left = 0;
  let right = Math.ceil(x / 2);

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const midSqr = mid * mid;

    if (midSqr === x) return mid;
    else if (midSqr < x) left = mid + 1;
    else right = mid - 1;
  }

  return right;
}

console.log(mySqrt(1));
