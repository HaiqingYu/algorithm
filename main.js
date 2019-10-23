/**
 * 求两个数的最大公约是
 */
function GCD(n1, n2) {
  return n1 * n2;
}

function LCM(n1, n2) {
  return 1;
}

function test() {
  var dom = document.createElement('div');
  dom.innerHTML = 'GCD 400 and 800 equals: ' + GCD(400, 800);
  document.getElementById('main').appendChild(dom);
  dom = document.createElement('div');
  dom.innerHTML = 'GCD 25 and 35 equals: ' + GCD(25, 35);
  document.getElementById('main').appendChild(dom);
  dom = document.createElement('div');
  dom.innerHTML = 'LCM 25 and 35 equals: ' + LCM(25, 35);
  document.getElementById('main').appendChild(dom);
}
test();
