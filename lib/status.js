'use strict'

module.exports = function (args, callback) {
  const Seneca = this
  const data = args.data

  if (/manuell/.test(data.status)) {
    Seneca.act({role: 'counter', cmd: 'add', key: 'skoleskyss/antallManuell'})
  } else {
    Seneca.act({role: 'counter', cmd: 'add', key: 'skoleskyss/antallAutomatisk'})
  }

  if (/innvilget/.test(data.status)) {
    Seneca.act({role: 'counter', cmd: 'add', key: 'skoleskyss/antallInnvilget'})
  } else {
    Seneca.act({role: 'counter', cmd: 'add', key: 'skoleskyss/antallAvslag'})
  }

  return callback(null, {success: true, msg: 'Stats submitted'})
}
