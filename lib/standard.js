'use strict'

module.exports = function (args, callback) {
  const Seneca = this
  const data = args.data

  Seneca.act({role: 'counter', cmd: 'add', key: 'skoleskyss/antallSoknader'})

  if (data.skjemaUtfyllingStart && data.skjemaUtfyllingStop) {
    const skjemaUtfyllingTime = data.skjemaUtfyllingStop - data.skjemaUtfyllingStart
    Seneca.act({role: 'counter', cmd: 'add', key: 'skoleskyss/skjemaUtfyllingTime', value: skjemaUtfyllingTime})
  }

  return callback(null, {success: true, msg: 'Stats submitted'})
}
