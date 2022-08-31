const log4js = require("log4js");

log4js.configure({
  appenders: {
    consolaInfo: { type: "console" },
    warnFile: { type: "file", filename: "./logs/warn.log" },
    errorFile: { type: "file", filename: "./logs/error.log" },
    warnLevelFilter: {
      type: "logLevelFilter",
      level: "warn",
      appender: "warnFile",
    },
    errorLevelFilter: {
      type: "logLevelFilter",
      level: "error",
      appender: "errorFile",
    },
  },
  categories: {
    default: {
      appenders: ["consolaInfo"],
      level: "all",
    },
    dev: {
      appenders: ["consolaInfo", "warnLevelFilter", "errorLevelFilter"],
      level: "all",
    },
  },
});

const logger = log4js.getLogger("dev");

module.exports = { logger };