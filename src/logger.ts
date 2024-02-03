import chalk from 'chalk';
import createDebug, { IDebugger } from 'debug';
import 'supports-color';
import Config from './config';

export enum LogLevel {
  DEBUG = 'debug',
  INFO = 'info',
  SUCCESS = 'success',
  WARN = 'warn',
  ERROR = 'error',
}

function createChalkLogger(logger: IDebugger, color: Function, logLevel?: LogLevel): LoggerFunction {
  if (logLevel) {
    logger = logger.extend(logLevel);
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return (...args: any[]) => logger(color(...args));
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type LoggerFunction = (...args: any[]) => void;

const logger = createDebug(Config.name);
const errorLogger = createDebug(Config.name);

createDebug.enable(Config.debugLevel);

// tslint:disable-next-line:no-console
logger.log = console.log.bind(console) as () => string; // don't forget to bind to console!

const info = createChalkLogger(logger, chalk.white);
const success = createChalkLogger(logger, chalk.greenBright);
const debug = createChalkLogger(logger, chalk.blueBright);

const warn = createChalkLogger(errorLogger, chalk.yellowBright, LogLevel.WARN);
const error = createChalkLogger(errorLogger, chalk.redBright, LogLevel.ERROR);

export default {
  debug,
  error,
  info,
  success,
  warn,
};
