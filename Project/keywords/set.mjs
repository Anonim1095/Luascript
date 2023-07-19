export default main()
export {type}
import {set, access} from 'api.mjs'

const type = false
const data = {
    name: "SET",
    keyword: "set",
    operators: {
        GLOBAL: false,
        TEMP: true,
        DEFAULT: false
    },
    arguments: [
        {
            name: "Variable name",
            required: true,
            DEFAULT: null
        },
        {
            name: "Start value",
            required: true,
            DEFAULT: null
        },
    ],
    scope: "enivroment"
}

function main(variableName, startValue, scope,) {
    if(!access.existing(variableName)) {
        startValue = startValue ?? data.arguments[1].DEFAULT
        scope = scope ?? data.operators.DEFAULT
        if(scope) 
            {set.temp(variableName, startValue)
            return true}
        if(!scope)
            {set.global(variableName, startValue)
            return true}
        return false
    }else{
        return false
    }
}