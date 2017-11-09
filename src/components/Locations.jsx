var React = require('react')
var LocationStore = require('../stores/LocationStore')


var Locations = React.createClass({
  // set the initial state using the state of store
  getInitialState() {
    return LocationStore.getState();
  },
  // listen to changes if the state of store is changed
  componentDidMount() {
    LocationStore.listen(this.onChange);
  },

  // remove event listener
  componentWillUnmount() {
    LocationStore.unlisten(this.onChange);
  },

  onChange(state) {
    this.setState(state);
  },

  // list of location names
  render() {
    return (
      <ul>
        {this.state.locations.map((location) => {
          return (
            <li>{location.name}</li>
          );
        })}
      </ul>
    );
  }
});

module.exports = Locations;