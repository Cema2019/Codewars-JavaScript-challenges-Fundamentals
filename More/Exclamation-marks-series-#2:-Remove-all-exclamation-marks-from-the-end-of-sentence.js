/*Remove all exclamation marks from the end of sentence.

Examples
"Hi!"     ---> "Hi"
"Hi!!!"   ---> "Hi"
"!Hi"     ---> "!Hi"
"!Hi!"    ---> "!Hi"
"Hi! Hi!" ---> "Hi! Hi"
"Hi"      ---> "Hi"*/

function remove(string) {  
  return string.replace(/!+$/, '');
}

// /!+$/: This Regex pattern matches one or more exclamation marks (+) at the end of the string ($).
