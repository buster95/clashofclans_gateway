# Clash Royale API Gateway


## How to use
1. First you need to create and API key in https://developer.clashofclans.com
1. Add this IP `173.254.232.39` When you are creating API key
1. Now you can send request with your API key to the service

## Request Examples
you can check documentation [Here](https://developer.clashofclans.com/#/documentation)

the original endpoint is this `https://api.clashofclans.com/v1/` <br/>
you have to change by this `https://apis-gateway.herokuapp.com/cocapi/`

now you can send request like this
##### `https://apis-gateway.herokuapp.com/cocapi/clans`
##### `https://apis-gateway.herokuapp.com/cocapi/clans/{clanTag}`
##### `https://apis-gateway.herokuapp.com/cocapi/clans/{clanTag}/members`
##### `https://apis-gateway.herokuapp.com/cocapi/clans/{clanTag}/currentwar`
##### `https://apis-gateway.herokuapp.com/cocapi/clans/{clanTag}/warlog`
##### `https://apis-gateway.herokuapp.com/cocapi/players/{playerTag}`
##### `https://apis-gateway.herokuapp.com/cocapi/labels/players`
##### `https://apis-gateway.herokuapp.com/cocapi/labels/clans`

<br/>

> Remember send your API token in the request headers
```request
Authorization: Bearer {YOUR COC API Key}
```
