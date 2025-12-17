const fs=require("fs");
try {
    fs.unlinkSync('temp.txt')
} catch (err) {
    console.log(`Error : ${err}`);
}
