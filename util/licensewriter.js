const fs = require("fs");
const path = require("path");

const replaceText = `/*
 MIT License

 Copyright (c) 2018 monya-wallet zenypota

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all
 copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 SOFTWARE.
*/`;

const regexp = /^\/\*(.|[\n\r])*?Monya - The easiest cryptocurrency wallet(.|[\n\r])*?\*\//g;

let res;
let dir = fs
  .readdirSync(path.join(process.cwd(), process.argv[2]))
  .filter(v => v.slice(-2) === "js");
dir.forEach(v => {
  let read = fs.readFileSync(
    path.join(process.cwd(), process.argv[2], v),
    "utf8"
  );

  let writing = read.replace(regexp, replaceText);

  fs.writeFileSync(path.join(process.cwd(), process.argv[2], v), writing, {
    encoding: "utf8"
  });
});
