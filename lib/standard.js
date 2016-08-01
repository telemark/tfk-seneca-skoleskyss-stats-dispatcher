'use strict'

module.exports = function (args, callback) {
  const Seneca = this
  const data = args.data

  Seneca.act({role: 'counter', cmd: 'add', key: 'skoleskyss/antallSoknader'})

  if (data.skjemaUtfyllingStart && data.skjemaUtfyllingStop) {
    const skjemaUtfyllingTime = data.skjemaUtfyllingStop - data.skjemaUtfyllingStart
    Seneca.act({role: 'counter', cmd: 'add', key: 'skoleskyss/skjemaUtfyllingTime', value: skjemaUtfyllingTime})
  }

  if (!data.duplikatSoknad) {
    Seneca.act({role: 'counter', cmd: 'add', key: 'skoleskyss/antallSokere'})
  } else {
    Seneca.act({role: 'counter', cmd: 'add', key: 'skoleskyss/antallDuplikater'})
  }

  if (data.bosted.bosted === 'folkeregistrert') {
    Seneca.act({role: 'counter', cmd: 'add', key: 'skoleskyss/antallBostedFolkeregistrert'})
  }

  if (data.bosted.bosted === 'delt') {
    Seneca.act({role: 'counter', cmd: 'add', key: 'skoleskyss/antallBostedDelt'})
  }

  if (data.bosted.bosted === 'hybel') {
    Seneca.act({role: 'counter', cmd: 'add', key: 'skoleskyss/antallBostedHybel'})
  }

  if (data.grunnlag.grunnlag === 'Avstand') {
    Seneca.act({role: 'counter', cmd: 'add', key: 'skoleskyss/antallArsakAvstand'})
  }

  if (data.grunnlag.grunnlag === 'Båt/Ferge') {
    Seneca.act({role: 'counter', cmd: 'add', key: 'skoleskyss/antallArsakFerge'})
  }

  if (data.grunnlag.grunnlag === 'Annet') {
    Seneca.act({role: 'counter', cmd: 'add', key: 'skoleskyss/antallArsakAnnet'})
  }

  return callback(null, {success: true, msg: 'Stats submitted'})
}
