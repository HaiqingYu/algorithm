/**
 * 求两个数的最大公约是
 */
function foo(n1, n2) {
  return n1 * n2;
}

function test(n1, n2) {
  var result = n1 + ' and ' + n2 + ' equals: ' + foo(n1, n2) + '           ';
  document.getElementById('main').innerHTML += result;
}

test(400, 800);
test(5, 19);
