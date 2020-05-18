// We can solve this in O(n) time using the "Sliding Window" approach to the problem solving.

// The Sliding Window will represent the current substring of non repeating characters we are on.

// We will NOT be working with Sliding Window of Fixed Size, the window will grow or shrink in size as we iterate thru string.

// Current index and value in for loop will ALWAYS BE END of the sliding window.  As end of window increases, we conditionally increase start of window.

// Pseudocode
// Create an empty hashMap (key/val -> character/index)
// Create start and max variable, set both with initial values of zero

// Loop thru Input string
  // If current Character in HashMap & has index >= start
    // Set start to index for character found in Hashmap + 1
  // Set key/value pair on Hashmap to be current Character/current Index
  // If length of current window is greater than max
    // Set max to lenght of current window

// Return max

function lengthOfLongestSubstring(s){
  // Soluton #1
  // let windowCharsMap = {};
  // let windowStart = 0;
  // let maxLength = 0;

  // for(let i = 0; i < s.length; i++){
  //   const endChar = s[i];
  //   //console.log(endChar)
  //   if(windowCharsMap[endChar] >= windowStart){
  //     windowStart = windowCharsMap[endChar] + 1;
  //     //console.log(windowCharsMap)
  //   }

  //   // Adds value to key
  //   windowCharsMap[endChar] = i;
  //   maxLength = Math.max(maxLength, i - windowStart + 1);
  // }

  // // Solution #1.2
  // let windowCharsMap = {};
  // let index = 0;  // index
  // let maxLength = 0;

  // for (let char in s){
  //   const currentChar = s[char];
    
  //   // Checks if current character is in windowCharsMap
  //   if (windowCharsMap[currentChar] >= index){
  //     // If character is in windowCharsMap
  //     index = windowCharsMap[currentChar] + 1;
  //   }
    
  //   windowCharsMap[currentChar] = char;
  //   maxLength = Math.max(maxLength, char - index + 1);
  //   console.log(maxLength, char, index)
  //   console.log(maxLength);
  // }

  

  return maxLength;
}


// s = ["a","b","c","a","b","c","a","b","c"];
s = ["b", "b", "b", "b", "b"];

lengthOfLongestSubstring(s)