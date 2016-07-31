'use strict'

const Seneca = require('seneca')
const Mesh = require('seneca-mesh')
const Stats = require('./lib/stats')
const envs = process.env

const options = {
  seneca: {
    tag: envs.TFK_SENECA_SKOLESKYSS_STATS_DISPATCHER_TAG || 'tfk-seneca-skoleskyss-stats-dispatcher'
  },
  mesh: {
    auto: true,
    listen: [
      {pin: 'role:info, info:skoleskyss', model: 'consume'},
      {pin: 'role:info, info:skoleskyss, type:status', model: 'consume'}
    ]
  },
  statsOptions: {
    tag: envs.TFK_SENECA_SKOLESKYSS_STATS_DISPATCHER_TAG || 'tfk-seneca-skoleskyss-stats-dispatcher'
  },
  isolated: {
    host: envs.TFK_SENECA_SKOLESKYSS_STATS_DISPATCHER_HOST || 'localhost',
    port: envs.TFK_SENECA_SKOLESKYSS_STATS_DISPATCHER_PORT || 8000
  }
}

const Service = Seneca(options.seneca)

if (envs.TFK_SENECA_SKOLESKYSS_STATS_DISPATCHER_ISOLATED) {
  Service.listen(options.isolated)
} else {
  Service.use(Mesh, options.mesh)
}

Service.use(Stats, options.statsOptions)
