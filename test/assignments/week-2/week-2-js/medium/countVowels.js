/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/


// Done



function countVowels(str) {
    // Your code here
    const vow = ['a','e','i','o','u'];
      const st = str.toLowerCase();
      var cnt = 0;
    for(let i = 0;i < st.length;i++){
      if(vow.includes(st[i]))
        cnt++;
    }
    return cnt;
}

module.exports = countVowels;