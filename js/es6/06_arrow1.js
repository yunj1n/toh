let circleArea = function(pi, r) {
  let area = pi * r * r;
  return area;
};


// 위의 문장을 한줄로 작성하시오.
let circleArea = (pi, r) => pi * r * r;

let result = circleArea(3.14, 3);

console.log(result); //실행 결과 "28.26"

// 익명함수를 애로우 펑션으로 변경가능
//
