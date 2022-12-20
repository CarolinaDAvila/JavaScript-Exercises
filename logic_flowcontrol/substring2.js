function substring(string, start, end) {
  if (end === undefined || end > string.length) {
    end = string.length 
  }

  if (start < 0 || !Number.isInteger(start)) {
    start = 0; 
  }

  if (end < 0 || !Number.isInteger(end)) {
    end = 0; 
  }


  let arr = [start, end];
  if (start > end) {
    arr = [end, start];
  }
  start = arr[0]
  end = arr [1]

  let newString = '';

  for (; start < end; start += 1) {
    newString += string[start];
  }
  return newString;
}
