const path = require('path');

const PROJECT_NAME = 'vvisp';
const SERVICE_FILE = `service.${PROJECT_NAME}.json`;
const STATE_FILE = `state.${PROJECT_NAME}.json`;

module.exports = {
  SERVICE_FILE: SERVICE_FILE,
  SERVICE_PATH: path.join('./', SERVICE_FILE),
  STATE_FILE: STATE_FILE,
  STATE_PATH: path.join('./', STATE_FILE),
  DEFAULT_CONFIG_FILE: `${PROJECT_NAME}-config.json`
};
