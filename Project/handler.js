import { findSourceMap } from 'node:module';

//keyword(actually not)
var keywords = []
import * as fs from 'fs';
import * as path from 'path';

const foldersPath = path.join('/', 'keywords');

const commandFiles = fs.readdirSync(foldersPath).filter(file => file.endsWith('.mjs'));
for (const file of commandFiles) {
	const filePath = path.join(foldersPath, file);
	const command = require(filePath);
	if ('data' in command && 'execute' in command) {
		client.commands.set(command.data.name, command);
	} else {
		console.log(`[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.`);
	}
}

function execute(raw_string) {
    var raw_command = raw_string.slice(0,3)
    
}