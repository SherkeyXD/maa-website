import fs from 'fs';
import path from 'path';

const ignoreList = ['readme.md', 'index.md'];

console.log('zh-cn');
let files = fs
  .readdirSync(path.join(process.cwd(), 'apps/doc/'))
  .filter((file) => file.endsWith('.md'))
  .filter((file) => !ignoreList.includes(file.toLowerCase()))
  .map((file) => file.replace('.md', '.html'));
console.log(JSON.stringify(files, null, 2));

console.log('zh-tw');
files = fs
  .readdirSync(path.join(process.cwd(), 'apps/doc/zh-tw/'))
  .filter((file) => file.endsWith('.md'))
  .filter((file) => !ignoreList.includes(file.toLowerCase()))
  .map((file) => file.replace('.md', '.html'));
console.log(JSON.stringify(files, null, 2));

console.log('en-us');
files = fs
  .readdirSync(path.join(process.cwd(), 'apps/doc/en-us/'))
  .filter((file) => file.endsWith('.md'))
  .filter((file) => !ignoreList.includes(file.toLowerCase()))
  .map((file) => file.replace('.md', '.html'));
console.log(JSON.stringify(files, null, 2));

console.log('ja-jp');
files = fs
  .readdirSync(path.join(process.cwd(), 'apps/doc/ja-jp/'))
  .filter((file) => file.endsWith('.md'))
  .filter((file) => !ignoreList.includes(file.toLowerCase()))
  .map((file) => file.replace('.md', '.html'));
console.log(JSON.stringify(files, null, 2));

console.log('ko-kr');
files = fs
  .readdirSync(path.join(process.cwd(), 'apps/doc/ko-kr/'))
  .filter((file) => file.endsWith('.md'))
  .filter((file) => !ignoreList.includes(file.toLowerCase()))
  .map((file) => file.replace('.md', '.html'));
console.log(JSON.stringify(files, null, 2));
