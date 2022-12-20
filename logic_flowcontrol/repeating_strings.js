function repeat(string, times) {
  if (!Number.isInteger(times) || times < 0) {
    return undefined;
  }
  let result = '';
  for (; times > 0; times -= 1) {
    result += string;
  }
  return result;
}