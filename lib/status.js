'use strict'

module.exports = (args, callback) => {
  const Seneca = this
  const data = args.data

  if (/manuell/.test(data.status)) {
    Seneca.act({role: 'counter', cmd: 'add', key: 'skoleskyss/antallManuell'})
  } else {
    Seneca.act({role: 'counter', cmd: 'add', key: 'skoleskyss/antallAutomatisk'})
  }

  return callback(null, {success: true, msg: 'Stats submitted'})
}
