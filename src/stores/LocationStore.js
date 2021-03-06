var alt = require('../alt')
var LocationActions = require('../actions/LocationActions')

// create a class for the store
class LocationStore {
  constructor() {
    this.locations = [];
    this.errorMessage = null;
    this.bindListeners({
      handleUpdateLocations: LocationActions.UPDATE_LOCATIONS,
      handleFetchLocations: LocationActions.FETCH_LOCATIONS,
      handleLocationsFailed: LocationActions.LOCATIONS_FAILED
    });
  }
  handleUpdateLocations(locations) {
    this.locations = locations;
    this.errorMessage = null;
  }
  handleFetchLocations() {
    // reset the array while we're fetching new locations so React can
    // be smart and render a spinner for us since the data is empty.
    this.locations = [];
  }

  handleLocationsFailed(errorMessage) {
    this.errorMessage = errorMessage;
  }
}

// export the store
module.exports = alt.createStore(LocationStore, 'LocationStore')