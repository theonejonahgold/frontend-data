import { resolveResults, writeData } from '../utilities/path.js'

export { writeResult }

/**
 * Writes provided data to file with provided filename inside the 'results' folder inside this project
 * @param data Data to write to a file
 */
function writeResult(data) {
  return fileName => writeData(data)(resolveResults(fileName))
}