let studentcode = "fs40_3804187"
let  email = "krishnadevr07@gmail.com"
let testcode = "fw10_069"
let testmail= "imbickydutta@gmail.com"

function generateId(email , studentcode){
    let alphabets = "abcdefghijklmnopqrstuvwxyz"
    let numbers = "0123456789"
    let name = email.split("@")[0]
    // console.log(name)
    let concatinatedcode = studentcode+name
    concatinatedcode = concatinatedcode.toLowerCase()
    // console.log(concatinatedcode)
    let indexedstrings = ""
    for(let i=0;i<concatinatedcode.length;i+=2){
        indexedstrings += concatinatedcode[i]
    }
    let convertedString = converttoNumber(indexedstrings)
    alterringletters(convertedString)
}


function converttoNumber(indexedstrings){
     let alphabets = "abcdefghijklmnopqrstuvwxyz"
    let numbers = "0123456789"
    let newstr = ""
    for(let i=0;i<indexedstrings.length;i++){
        if(alphabets.includes(indexedstrings[i])){
            newstr+= (indexedstrings[i].charCodeAt(0))-96

        }
        else if(numbers.includes(indexedstrings[i])){
            newstr+= indexedstrings[i]
            
        }
        else{
            newstr+=  "1"
        }
    }
    return newstr
}

// let authId = "6116923252120"

function alterringletters(authId){
    let finalstr = ""
    for(let i=0;i<Math.floor(authId.length/2);i++){
        finalstr+=authId[i] + authId[authId.length-i-1]
    }
    if(authId.length/2 != 0){
        finalstr+=authId[Math.floor(authId.length/2)]
    }
    console.log(finalstr)
}
// alterringletters(authId)
// converttoNumber("f1_6ibcyut")

generateId(email , studentcode)