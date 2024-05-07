const fs = require('fs');

// fs.writeFile("hey.txt", "Hello This is Bijay", function(err){
//     if(err) console.error(err);
//     else console.log("done");
// })

// fs.appendFile("hey.txt", " I am good.", function(err){
//     if(err) console.error(err);
//     else console.log("done");
// })

// fs.rename("Hello.txt", "Hey Hello.txt", function(err){
//     if(err) console.error(err); 
//     else console.log("Rename done!");
// })      

// fs.copyFile("HeyHello.txt","./copy/copy1.txt", function(err){
//     if(err) console.error(err.message);
//     else console.log("done!");
// })

// fs.unlink("HeyHello.txt", function(err){
//     if(err) console.error(err);
//     else console.log("File Removed");
// })

fs.rm("./copy", {recursive: true}, function(err){
    if(err) console.error(err.message);
    else console.log("Folder removed");
})

