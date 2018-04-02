#!/usr/bin/env node

const webdic = require('../index.js')
const chalk = require('chalk')

const word = process.argv[2]

function translate(word, fn) {
    if (!word) {
        console.log(chalk.blue("请输入要查询的单词"))
        return
    }
    webdic(word, engVersion)
}

function formatOutput(data) {
    
}

function engVersion(dataCollection) {
    console.log(`\t\t\t义项：${chalk.blue(dataCollection[0]['headword'])}`)
    dataCollection.forEach(it => {
        const senses = it['senses']
        
        senses.forEach(sense => {
            const pos = sense['pos'][0] || "default"
            const defs = sense['defs']
            defs.forEach(def => {
                console.log(`\t\t\t${boldUnderline(pos)}. ${def['defCn']}`)
            })
        })
        
        console.log('\n\n')
        console.log(`\t\t例句：`)

        dataCollection.forEach(it => {
            const senses = it['senses']
            senses.forEach(sense => {
                const defs = sense['defs']
                defs.forEach(def => {
                    const defCn = def['defCn']
                    const examples = def['examples']
                    console.log(`\t\t义项: ${chalk.yellow(defCn)}`)
                    examples.forEach((example, idx) => {
                        const en = example['en']
                        const cn = example['cn']
                        console.log(`\t\t\tEnglish: ${chalk.cyan(idx)}. ${chalk.cyan(en)}`)
                        console.log(`\t\t\t中文: ${chalk.cyan(cn)}`)
                    })
                })
            })
        })
    })
}

//对字体加粗加下划线
function boldUnderline(word) {
    return  chalk.blue.underline.bold(word)
}

function chineseVersion(word) {
    
}
translate(word, console.log)