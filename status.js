function test(string) {
  // status
  let result;
  let key = "";
  let val = "";
  let char = "";
  let end = false;

  function statusA(s) {
    if (s === "{") {
      result = {};
      return statusBstrart;
    }
  }
  function statusA1(s) {
    if (s === "}") {
      // end = true;
      // // console.log("result", result);
      // return result;
    }
  }
  function statusBstrart(s) {
    if (s === '"') {
      return statusC;
    }
  }
  function statusBend(s) {
    if (s === '"') {
      return statusD;
    } else {
      key += s;
      return statusBend;
    }
    // return statusC;
  }
  function statusC(s) {
    key += s;
    return statusBend;
  }

  function statusD(s) {
    if (s === ":") {
      return statusBstrart2;
    }
  }
  function getValstart(s) {
    val += s;
    return statusBend2;
  }
  function getValend(s) {
    result[key] = val;
    return statusA1;
  }
  function statusBstrart2(s) {
    if (s === '"') {
      return getValstart;
    } else {
      return getValstart;
    }
  }
  function statusBend2(s) {
    if (s === '"') {
      return getValend;
    }
    return getValstart;
  }
  let current = statusA;
  for (let i = 0; i < string.length; i++) {
    char = string[i];
    current = current(char);
  }
  return result;
}
console.log(test('{"ab":"2"}'));
// test('{"a":"1","b":"2"}');
