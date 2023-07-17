/*
Lua script 0.0.1
*/
export {variables_global, blocks_custom, blocks_preinstalled, local_enivs, goto_positions, execute_query, temp_memory, cursorPos}
import * as api from './api.mjs'

var variables_global = []
var blocks_custom = []
var blocks_preinstalled = []
var local_enivs = [] // I don't sure we need it
var goto_positions = []

var execute_query = [] // ["command", "memory1", "memory2"]
var temp_memory = [] // ["exampleName", "value"]

var cursorPos = 0

console.log("end")