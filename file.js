const fs = require('fs')

// read file - two arguments which are (filedir includes file path and name , call back function (err,data)). second one is a function which has parameters to get err and data
// fs.readFile('./docs/hello.txt', (err,data) => {
//     if(err) {
//         console.log(err)
//     }
//     console.log(data.toString())
// } )

//write file - has 3 arguments
// fs.writeFile('./docs/blog1.txt','yes I can', () => {
//     console.log('file is written')
// })

//diretories - creates the directories 
// to check if a existing folder is present or not

if(!fs.existsSync('./docs/assets')) {
fs.mkdir('./docs/assets', (err) => {
if(err){
    console.log(err)
}
console.log('directory is created')})
} else {
    console.log('directory already exists')
    fs.rmdir('./docs/assets',(err)=> {
        if(err) {
            console.log(err)
        }
        console.log('directory deleted')
    })
}

//deleting files
if(fs.existsSync('./docs/hello.txt')) {
    fs.unlink('./docs/hello.txt',(err) => {
        console.log(err)
    })
    console.log('file deleted')
}