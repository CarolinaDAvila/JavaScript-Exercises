function utf16Value(string) {
  let utfValue = 0;

  for (let char of string ) {
    utfValue += (char.charCodeAt(0));
  }

  return utfValue;
}