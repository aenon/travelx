var alt = require('../alt')
var LocationActions = require('../actions/LocationActions')

// create a class for the store
class LocationStore {
  constructor() {
    // instance variables become the state
    this.locations = [];
    this.bindListeners({
      handleUpdateLocations: LocationActions.UPDATE_LOCATIONS
    })
  }
  // methods to deal with the actions: handlers
  handleUpdateLocations(locations) {
    this.locations = locations;
  }
}

// export the store
module.exports = alt.createStore(LocationStore, 'LocationStore')