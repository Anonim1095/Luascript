import * as input from './code.js'
import { returnBlock } from './preint.mjs'
export {access, set, block}

const access = {
    temp: function(varName, valuePreffered) {
        if(!valuePreffered) {
            for(i=0;i<input.input.temp_memory.length;i++) {
                if(input.temp_memory[i][0] == varName) {
                   return input.temp_memory[i][1]
                }
            }
        } else {
            for(i=0;i<input.temp_memory.length;i++) {
                if(input.temp_memory[i][1] == varName) {
                   return input.temp_memory[i][0]
                }
            }
        }
    },
    global: function(varName, valuePreffered) {
        if(!valuePreffered) {
            for(i=0;i<input.variables_global.length;i++) {
                if(input.variables_global[i][0] == varName) {
                   return input.variables_global[i][1]
                }
            }
        } else {
            for(i=0;i<input.variables_global.length;i++) {
                if(input.variables_global[i][1] == varName) {
                   return input.variables_global[i][0]
                }
            }
        }
    },
    block: function(blockName) {
        for(i=0;i<input.blocks_preinstalled.length;i++) {
            if(input.blocks_preinstalled[i][0] == blockName) {return input.blocks_preinstalled[i]}
        }
        for(i=0;i<input.blocks_custom.length;i++) {
            if(input.blocks_custom[i][0] == blockName) {return input.blocks_custom[i]}
        }
        return false
    },
    position: function(positionName) {
        for(i=0;i<input.goto_positions.length;i++) {
            if(input.goto_positions[i][0] == positionName) {return input.goto_positions[i]}
        }
    }
}
const set = {
    global: function(value, name) {
        input.variables_global.push([name, value, true])
    }, temp: function(value, name) {
        input.temp_memory.push([name, value])
    }
}
const block = {
    intial: function() {

    }, new: function(name, logic, inbuilt) {

    }
}