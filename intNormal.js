/**
 * calculate $$ S = \int_a^b f(x) dx $$  $$ S \approx \frac1n \sum_{i=1}^n f(x_i) $$
 * @param  {number} a start from
 * @param  {number} b end at
 * @param  {function} f function
 * @param  {number} n number of points
 * @return {number}   integral
 */
export default function intNormal(a, b, f, n) {
  let step = (b - a) / n;
  let sum = 0;
  let xi = a + (step / 2);
  for(let i = 0; i < n; i++) {
    sum += f(xi);
    xi += step;
  }
  const S = sum / n;
  return S;
}

// alert(intNormal(0, 1, x => x ** 2, 10))
