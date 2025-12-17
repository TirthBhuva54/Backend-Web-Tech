// const { log } = require("console");
// const path=require("path");

// console.log(__dirname);
// console.log(__filename);
// console.log(path.basename('./file.txt'));
// console.log(path.extname('./file.txt'));
// // Create a program that joins "users", "arjun", "documents", "project" into a single path using 
// // path.join(). 
// console.log(path.join('users','arjun','documents','project'));
// // Write a program to fix the path="//folder//subfolder////file.txt" using path.normalize() and 
// // display the clean normalised path. (A) 
// console.log(path.normalize("//folder//subfolder////file.txt" ))
// //  Write a program that checks whether the given path is absolute or relative paths. 
// console.log(path.isAbsolute("D:\\COLLEGE\\SEM-4\\backend\\LAB-4\\file.txt"));
// console.log(path.isAbsolute("./file.txt"));

// //  Write a Node.js program that uses path.resolve() to convert "folder", "subfolder", "app.js" 
// // into an absolute path. Print the final resolved path. 
// console.log(path.resolve('folder','subfolder','app.js'));

// *********OS*********
const os=require("os");
console.log(os.cpus());
console.log(os.type());
console.log(os.version());
console.log(os.platform())
console.log(os.arch());
console.log('Availabel Gb is :-'+(os.freemem()/(1024**3)))
console.log((os.totalmem()/(1024**3)))
console.log(os.userInfo())
console.log((os.uptime())/(60*60))
console.log(os.networkInterfaces())