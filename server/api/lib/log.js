const { launch } = require('puppeteer');
const winston = require('winston');

const logger = winston.createLogger({
	level: 'info',
	format: winston.format.simple(),
	defaultMeta: { service: 'user-service' },
	transports: [
		new winston.transports.Console()
		//
		// - Write to all logs with level `info` and below to `combined.log`
		// - Write all logs error (and below) to `error.log`.
		//
		// new winston.transports.File({ filename: 'error.log', level: 'error' }),
		// new winston.transports.File({ filename: 'combined.log' })
	]
});

//
// If we're not in production then log to the `console` with the format:
// `${info.level}: ${info.message} JSON.stringify({ ...rest }) `
// //
// if (process.env.NODE_ENV !== 'production') {
//   logger.add(new winston.transports.Console({
//     format: winston.format.simple()
//   }));
// }

logger.level = 'debug';

module.exports = {
	debug: (...args) => {
		logger.debug(args);
	},
	info: (...args) => {
		logger.info(args);
	},
	error: (...args) => {
		logger.error(args);
	}
};
