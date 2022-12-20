function staggeredCase(sentence) {
  let upper = undefined;

  return sentence.split('').map(function(char) {
    if (char.match(/[A-Z]/)) {
      let charCode = char.charCodeAt();
      upper = true;
      return String.fromCharCode(charCode + 32)

    } else if (char.match(/[a-z]/)) {
      let charCode = char.charCodeAt();
      
      return String.fromCharCode(charCode - 32)
    }
  });
}

staggeredCase('I Love Launch School!');        // "I lOvE lAuNcH sChOoL!"
staggeredCase('ALL CAPS');                     // "AlL cApS"
staggeredCase('ignore 77 the 444 numbers');    // "IgNoRe 77 ThE 444 nUmBeRs"