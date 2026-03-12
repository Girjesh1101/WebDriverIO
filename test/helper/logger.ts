import { error } from 'node:console'
import winston from 'winston'

const consoleFormat = winston.format.printf(({level, message})=>{
    const logLevel = winston.format.colorize().colorize(level,level.toLowerCase())
    return `[logLevel]:message`
})

// logger
let logger = winston.createLogger({
    transports:[
        new winston.transports.Console({
            level:process.env.LOG_LEVEL,
            handleExceptions:true,
            format: winston.format.combine(winston.format.timestamp(),consoleFormat)
        })
    ]
})

// print any unknown error
logger.on("error",error =>{
    console.log("Unknown error in winston logger");
    console.log(error.message);
})
export default logger