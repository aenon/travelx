// require alt in each action and stores
var alt = require('../alt')

// define an action by creating a class
class LocationActions {
  updateLocations(locations) {
    return locations;
  }
}

module.exports = alt.createActions(LocationActions)

