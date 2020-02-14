/*
 * Created on 2/14/20, 7:05 PM
 * Copyright (c)   - @author: Mohammed Elzanaty
 */

console.log("Run code here in the context of Chapter 1");

function dec2bin(dec) {
  return (dec >>> 0).toString(2);
}
console.log(`
   // Values 
      ${13}      represented at ${dec2bin(13)}
      ${9.81}    represented at ${dec2bin(9.18)}
      ${2998e8}  represented at 2.998 × 108 = 299,800,000.
   
   // Operators && Arithmetic
      ${100 + 4 * 11 - 1 / 0.5}
      ${314 % 100} => represent the remainder operation.
   
   // Numbers 
      // Special values considered numbers but don’t behave like normal numbers.
      ${Infinity} ${-Infinity} => represent the positive and negative infinities
      ${NaN} =>  stands for “not a number”, even though it is a value of the number type. 
   
   // Strings 
      // Use single quotes, double quotes, or backticks to mark strings
      "This is the first line\n       And this is the second \\."
      
      // Strings cannot be divided, multiplied, or subtracted, 
      // but the + operator can be used on them. It does not add, 
      // but it concatenates—it glues two strings together. 
      ${"con" + "cat" + "e" + "nate"}
      
   // Unary operators
      ${typeof 1}         => number 
      ${typeof 'x'}       => string
      ${typeof 0.4}       => number
      ${typeof Infinity}  => number
      ${typeof NaN}       => number
      
   // Boolean values
      ${true}
      ${false}
      
   // Comparison
      3>2                       => true
      2>3                       => false
      "Aardvark" < "Zoroaster"  => true
      "Apple" == "Orange"       => false
      "Itchy" != "Scratchy"     => true
      
      NaN == NaN represented as ${NaN == NaN}
   
   // Logical operators
      // JavaScript supports three logical operators: and, or, and not.
          1. && operator represents logical and  => true only if both the values true. 
          2. || operator denotes logical or.     => true if either of the values true. 
          3. Not is written as an exclamation mark (!)
              - It is a unary operator that flips the value given to it—!true produces false, and !false gives true.
      // Ternary, operating on three values. It is written with a question mark and a colon => true ? 1 : 2
      // called conditional operator
   
   // Empty values
      - There are two special values, written null and undefined 
      - Used to denote the absence of a meaningful value. They are themselves values, but they carry no information.
      - The difference in meaning between undefined and null is an accident of JavaScript’s design, and it doesn’t matter most of the time.
   
   // Automatic type conversion [type coercion]
      - 8 * null             -> 0
      - "5" - 1              -> 4 
      - "5" + 1              -> 51
      - "five" * 2           -> NaN
      - false == 0           -> true
      - false == ""          -> true
      - null == undefined    -> true
      - null == 0            -> false
      
      // Explain 
        - The null in the first expression becomes 0
        - the "5" in the second expression becomes 5 (from string to number)
        - + tries string concatenation before numeric addition, so the 1 is converted to "1" (from number to string).
        - When something that doesn’t map to a number in an obvious way (such as "five" or undefined) 
          is converted to a number, you get the value NaN.
      -  When you do not want any type conversions to happen, there are two additional operators: === and !==.
`);













