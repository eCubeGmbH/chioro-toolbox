#!/usr/bin/env node

const mod = require('./toolbase')
mod.tools.testAllTools()
mod.tools.stats()

console.log(mod.concatenateText(123, "hallo"))
console.log(mod.verketteText(123, "hallo"))
console.log(mod.tools.get(mod.concatenateText))
console.log(mod.tools.get(mod.concatenateText).toolNames())
console.log(mod.tools.get(mod.concatenateText).toolNamesFlat())