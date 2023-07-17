import { default as preint } from './preint.mjs'
import fork from 'child_process'

var checkSyntaxRes = preint()
if(!checkSyntaxRes){
    fork('./code.js')
} else {
    console.error(checkSyntaxRes)
}