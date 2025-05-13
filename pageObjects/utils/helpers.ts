import { parse } from 'csv-parse/sync';
const fs = require("fs")
const path = require("path")


export class Helpers {

    /**
     * read data from csv file and return a json object
     * @param filePath - path of csv data file
     */
    static readCsvFileToJson(filePath:string) {

        const records = parse(fs.readFileSync(path.join(__dirname,'..', filePath)), {
            columns: true,
            skip_empty_lines: true
        });
        return records
    }

    static concatText(joiner,...args) {

        let concatText=''
        for(let value of args){
            concatText = concatText + joiner + value
        }

        return concatText.trim()
    }

}
