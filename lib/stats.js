'use strict'

const standard = require('./standard')
const status = require('./status')

module.exports = function (options) {
  const seneca = this

  seneca.add('role:info, info:skoleskyss', standard)

  seneca.add('role:info, info:skoleskyss, type:status', status)

  return {
    name: options.tag || 'tfk-seneca-skoleskyss-stats-dispatcher'
  }
}
