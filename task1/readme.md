/*

**Task per se**
You have to write a JavaScript code that prints the longest common substring of passed arguments (with trailing newline — just use console.log for output).

The code will be running under Node.js and arguments will be passed via command line (it means you should not read standard input stream).

If the longest common superstring is empty (no arguments are passed or arguments have no common substrings) it’s necessary to print single newline. If there are several solution print any single one of them.

Limits are the following (do not use them in your solutions, these are only test restrictions): single string length is less or equal to 256, number of strings is less or equal to 64, strings contain only English letter and digits, time limit per test is 5 seconds.

The output should not contain any excess characters (error or debug messages, additional newlines, etc.).

The solution is accepted if all tests are passed. 

***The result is calculated based on JavaScript file size (the smaller the better). So, no comments, no long names, no indents, etc.***

You cannot use any external packages or use imports (there is only clean Node.js installation on the server). You cannot access "external world", e.g. read files, open network connections, etc.

You solution should be put in the lcs.js file (LCS in the lower case and .js extension).

**You have to use only command-line arguments** (no readline, no process.stdin, etc.; ONLY process.argv).

When called without arguments, your script should not fail.

If any test is failed your grade for this task is zero.

**Some examples** (output can be different if there are several solutions; there will be much more tests):
`
node lcs.js

node lcs.js ABCDEFZ WBCDXYZ
BCD
node lcs.js 132 12332 12312
1
node lcs.js ABCDEFGH ABCDEFG ABCEDF ABCED
ABC
node lcs.js ABCDEFGH ABCDEFG ABCDEF ABCDE
ABCDE
node lcs.js ABCDEFGH ABCDEFG ABCDEF ABCDE EDCBA
A
node lcs.js ABCDEFGH ABCDEFG ABCDEF ABCDE EDCBCA
BC
node lcs.js ABCDEFGH ABCDEFG AxBCDEF ABCDxE EDCBCAABCD
BCD
node lcs.js ABCDEFGH 1234

node lcs.js ABCDEFGH
ABCDEFGH

*/


@everyone 

**Task #2 (ALL GROUPS)**

It's necessary skills for every programmer — process files, calculate checksums, follow the instruction, etc.

Use language of your group (C# or JavaScript/TypeScript). In principle, you can use anything else, like Java or Python or Ruby or anything you like (**you don't submit the code in this task, only the result**).

1. Calculate **SHA3-256** for every file from archive (https://www.dropbox.com/s/oy2668zp1lsuseh/task2.zip?dl=1). Note, **files are binary, you don’t need encodings **— if you read file to string with some encoding, you have to use the same encoding to decode string into bytes back for hashing (there is a technical term for such conversions — “stupid activity”).

2. Write hashes as **64 hex digits in lower case.**

3. Sort (ascending) hashes as strings (not chars in hashes, but hashes as whole).

4. Join sorted hashes **without any separator**.

5. Concatenate resulted string with your e-mail in lowercase.

6. Find the SHA3-256 of the result string.

Send obtained 64 hex digits in the lower case to the https://discord.com/channels/950701840901746708/1258451022800617492 channel using the following command
```
!task2 email 64hexdigitshere
```
Note: SHA3-256 is not the same algorithm as SHA-256. 

Some additional hints (based on the experience of previous groups): 
* check if you use SHA3-256, 
* check if you process exactly 256 required files (not everything in the some directory),
* check if you concatenate your strings without separator — beware of JavaScript's join!
* check if you write e-mail in lower case and e-mail goes to the end of the resulted string, 
* and, of course, you have to calculate separate hash for every file, not to update the same hash with every file.

> **Never work with *binary* files in text editors** — if your IDE, e.g., changes automagically even a single byte, your won't get a proper result (redownload the files if necessary).