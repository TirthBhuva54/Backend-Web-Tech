const fs = require("fs");
try {
    fs.readdirSync("",(data)=>{
        console.log(data);
    })
} catch(err) {
    console.log(`Error: ${err}`);
}
