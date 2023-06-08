// by default every member is private.
function sum(n1, n2) {
  return n1 + n2;
}

function subtraction(n1, n2) {
  return n1 - n2;
}

// you have to make it export (public) manually
export { subtraction };

export default sum;
