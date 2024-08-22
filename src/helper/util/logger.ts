import { transports , format} from 'winston';
import * as path from 'path';
import * as fs from  "fs-extra"

// Function to ensure a directory exists
const ensureDirectoryExistence = (dirPath: string) => {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
};

// Check and create 'test-results' directory
const testResultsDirectory = 'test-results';
ensureDirectoryExistence(testResultsDirectory);

// Example usage of the directory in your options function
export function options(scenarioName: string) {
  const logDirectory = path.join(testResultsDirectory, `logs/${scenarioName}`);
  ensureDirectoryExistence(logDirectory);
    return{
  transports: [
      new transports.File({
         filename: path.join(logDirectory, 'log.log'),
          level: 'info',
         format: format.combine(
            format.timestamp({ format: 'MMM-DD-YYYY HH:mm:ss'}),
            format.align(),
            format.printf(info => `${info.level}: ${[info.timestamp]} :${info.message}`)
         )
        
      })
  ],
}
}
;