export default checkWork
export {checkWork, returnBlock, fileExecute}
import * as rules from './configs/rules.json' assert{ type: 'json' }

console.log(rules.version)



function checkWork() {
    return true
}
function returnBlock(inbuilt_only) {
    var blocks = {
        block_inbuilt: [],
        block_custom: [],
    }

    return blocks
}
function fileExecute() {
    var line = ""

    return line
}
