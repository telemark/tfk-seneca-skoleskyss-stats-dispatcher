# tfk-seneca-skoleskyss-stats-dispatcher
Microservice for sending stats from skoleskyss

## Example

Standard

```sh
$ curl -d '{"role":"info", "info":"skoleskyss", "data": {"name": "you know who"}}' -v http://localhost:8000/act
```

Status

```sh
$ curl -d '{"role":"info", "info":"skoleskyss", "type": "status", "data":{"status": "Sendt til manuell behandling"}}' -v http://localhost:8000/act
```