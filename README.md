# M-FIoT
It's a web application that let you create and manage music using particle devices.

This project use the following components
- [Vue stack](https://vuejs.org)
- [Kanbasu](https://kanbasu.liip.ch)
- [Express](https://expressjs.com)
- [ParticleJS](https://docs.particle.io/reference/SDKs/javascript/)

## Download and run the project
```bash
# Clone the project
$ git clone git@github.com:JordanAssayah/m-fiot.git

# Enter in the forlder and install dependencies
$ cd m-fiot && npm install

# Run the "Dev" Server
$ npm run serve
```


## Project Commands
```json
{
  "postinstall": "if test \"$NODE_ENV\" = \"production\" ; then npm run build ; fi ", // Executed on Heroku
  "start": "node server.js",                // for deployment server
  "serve": "vue-cli-service serve",         // Starts the dev server
  "build": "vue-cli-service build",         // Build the project for production
  "lint": "vue-cli-service lint",           // Lint files
  "test:e2e": "vue-cli-service test:e2e",   // Test with Cypress
  "test:unit": "vue-cli-service test:unit"  // Test with Jest
}
```
## Particle.io
Helpfull links:

- [Particle Device Firmware](https://docs.particle.io/reference/firmware/photon/)
- [Particle Cloud API](https://docs.particle.io/reference/api/)
- [CLI Command Reference](https://docs.particle.io/reference/cli/)
- [Particle API JS](https://docs.particle.io/reference/javascript/)

This is what we use to compile the code to flash our [Particle Photon](https://www.particle.io/prototype).
