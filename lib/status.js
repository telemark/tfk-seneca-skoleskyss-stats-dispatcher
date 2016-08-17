'use strict'

module.exports = function (args, callback) {
  const Seneca = this
  const data = args.data

  if (/Søknad behandlet - manuell/.test(data.status)) {
    Seneca.act({role: 'counter', cmd: 'add', key: 'skoleskyss/antallManuell'})
  }

  if (/Søknad behandlet - innvilget/.test(data.status)) {
    Seneca.act({role: 'counter', cmd: 'add', key: 'skoleskyss/antallAutomatisk'})
    Seneca.act({role: 'counter', cmd: 'add', key: 'skoleskyss/antallInnvilget'})
  }

  if (/Søknad behandlet - avslag/.test(data.status)) {
    Seneca.act({role: 'counter', cmd: 'add', key: 'skoleskyss/antallAutomatisk'})
    Seneca.act({role: 'counter', cmd: 'add', key: 'skoleskyss/antallAvslag'})
  }

  if (/Sendt via SvarUt/.test(data.status)) {
    Seneca.act({role: 'counter', cmd: 'add', key: 'skoleskyss/antallSendtSvarUt'})
  }

  if (/Søknad arkivert/.test(data.status)) {
    Seneca.act({role: 'counter', cmd: 'add', key: 'skoleskyss/antallArkivert'})
  }

  return callback(null, {success: true, msg: 'Stats submitted'})
}
