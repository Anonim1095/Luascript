const prompt = require('prompt-sync')({sigint: true});

var nameOfBlockJson = prompt("Name of block in json: ")
var nameOfBlock = prompt("Name of block(Name of executable js file in blocks): ")
var keyword = prompt("Enter keyword of block. (To call inside of code). (Recommend more then 1 and less then 6 letters): ")
var singleLine = prompt("It's single-line?: ")
var left_arg = prompt("It's accept left argument?: ")
var right_arg = prompt("It's accept right argument?: ")
var logical = prompt("It's logical block? (Can get only true/false): ")

var block_builded = {
    
}

/*
"logical-expression": false
*/