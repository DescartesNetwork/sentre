const fs = require('fs')
const prettier = require('prettier')
const path = require('path')

const folderName = 'src/static/images/socials'
const fileName = '/index.ts'
const fullSrc = __dirname + '/' + folderName + fileName
// Color console log
const GREEN_TEXT = '\x1b[32m'
const BLUE_TEXT = '\x1b[34m'
const DEFAULT_TEXT = '\x1b[0m'

function renderImportStr(fileName, fileSrc) {
  return `import ${fileName} from './${fileSrc}'`
}

function camelCase(str) {
  return str
    .replace(/[^A-Z0-9]/gi, ' ')
    .replace(/\s(.)/g, function ($1) {
      return $1.toUpperCase()
    })
    .replace(/\s/g, '')
    .replace(/^(.)/, function ($1) {
      return $1.toLowerCase()
    })
}

function main() {
  let importList = []
  let exportList = []
  fs.readdir(path.resolve(__dirname, folderName), (err, files) => {
    if (err) throw err

    for (let file of files) {
      const fileKey = camelCase(file)
      importList.push(renderImportStr(fileKey, file))
      exportList.push(fileKey)
    }
    const suffixExport = `export {${exportList}}`
    importList.push(suffixExport)
  })

  prettier
    .resolveConfigFile()
    .then((configFile) => {
      return prettier.resolveConfig(configFile)
    })
    .then((options) => {
      return prettier.format(JSON.stringify(importList, null, 2), {
        ...options,
        parser: 'json',
      })
    })
    .then((text) => {
      fs.writeFileSync(fullSrc, text)
      return console.log(
        GREEN_TEXT,
        '\n👏👏 Completely built a manifest. Check it out ==>',
        BLUE_TEXT,
        `${fullSrc}`,
        DEFAULT_TEXT,
      )
    })
    .then(() => {
      // Convert text to code
      fs.readFile(fullSrc, 'utf8', function (err, data) {
        if (err) return console.log(err, 'er')
        const rs = data.replace(/["+[\]]/g, '').replaceAll("',", "'")
        fs.writeFile(fullSrc, rs, 'utf8', function (err) {})
      })
    })
    .catch((er) => {
      throw new Error(er)
    })
}

// Run main
main()
