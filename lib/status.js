'use strict'

module.exports = function (args, callback) {
  const Seneca = this
  const data = args.data

  if (/Søknad behandlet/.test(data.status) && /manuell/.test(data.status)) {
    Seneca.act({role: 'counter', cmd: 'add', key: 'skoleskyss/antallManuell'})
  } else {
    Seneca.act({role: 'counter', cmd: 'add', key: 'skoleskyss/antallAutomatisk'})
  }

  if (/Søknad behandlet/.test(data.status) && /innvilget/.test(data.status)) {
    Seneca.act({role: 'counter', cmd: 'add', key: 'skoleskyss/antallInnvilget'})
  } else {
    Seneca.act({role: 'counter', cmd: 'add', key: 'skoleskyss/antallAvslag'})
  }

  return callback(null, {success: true, msg: 'Stats submitted'})
}
