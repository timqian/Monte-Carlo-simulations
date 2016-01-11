// calculate $$ S = \int_a^b f(x) dx $$
// $$ S \approx \frac1n \sum_{i=1}^n f(x_i) $$
export default function intMonte(a, b, f, n) {
  let randX = Math.random() * (b - a) + a;

};

import config from "./config";
import intNormal from "./intNormal";

intNormal(a)
console.log("config.adfasdfasd", config.adfasdfasd);
