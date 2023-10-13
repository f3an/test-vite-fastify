const fs = require('fs');
const {join} = require('path');
const bunyan = require('bunyan');

const logDir = join(__dirname, 'logs');

if (!fs.existsSync(logDir)) {
	fs.mkdirSync(logDir, {recursive: true});
}

const getTimestamp = () => {
	const now = new Date();
	const datePart = `${now.getMonth() + 1}-${now.getDate()}-${now.getFullYear()}`;
	const timePart = `${now.getHours()}-${now.getMinutes()}`;
	return `date-${datePart}-time-${timePart}`;
};

const logFilename = `${getTimestamp()}.log`;
const logFileStream = fs.createWriteStream(join(logDir, logFilename), {flags: 'a'});

const logger = bunyan.createLogger({
	name: 'api-logger',
	streams: [
		{level: 'info', stream: process.stdout},
		{level: 'info', path: logFileStream.path},
	],
});

module.exports = {logger};
