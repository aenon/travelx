# travelx

travelx - `react` and `alt.js` application showing travel destinations


## Getting Started
```bash
git clone https://github.com/aenon/travelx.git
cd travelx
npm install
```

## Build
```bash
npm run build
```

## Start
```bash
npm start
```

On some systems, `npm start` will run into an error when trying to open the browser. Either enter the file path to the browser, or start an HTTP server like 

```bash
python -m SimpleHTTPServer 3000
```

and enter the URL `http://localhost:3000` in the browser.

## Data flow

This application follows the [flux dataflow](https://facebook.github.io/flux/docs/overview.html).

The flux dataflow:

```
                  +------------+
                  |            |
                  | Action     <----------------------------+
                  |            |                            |
                  +-----+------+                            |
                        |                                   |
+-----------+     +-----v------+    +-----------+     +-----+------+
|           |     |            |    |           |     |            |
| Action    +-----> Dispatcher +----> Store     +-----> View       |
|           |     |            |    |           |     |            |
+-----------+     +------------+    +-----------+     +------------+
```

`alt.js` handles the dispatcher. The dataflow of this app is like:

```
          +---------------------------------------------+
          |                                             |
+---------v-------+          +----------------+   +-----+-----+
|                 | dispatch |                |   |           |
| LocationActions +----------> LocationStore  +---> Locations |
|                 |          | FavoritesStore |   |           |
+-----------------+          |                |   +-----------+
                             +----------------+
```

### Stores

* LocationStore 
* FaveroutesStore

### Action

LocationActions

* updateLocations
* fetchLocations
* locationsFailed
* favoriteLocation

### View

Locations

* AltContainer store={LocationStore}
* AltContainer store={FavoritesStore}

## Folder structure

The folder structure looks like

```
ajax-loader.gif
build/
index.html
package.json
README.md
src/
├── actions/
│   └── LocationActions.js
├── components/
│   └── Locations.jsx
├── sources/
│   └── LocationSource.js
├── stores/
│   ├── FavoritesStore.js
│   └── LocationStore.js
├── alt.js
└── App.jsx
```


### package.json

* dependencies: `alt` and `react`;
* devDependencies: `browserify` and `reactify`.

### index.html

Displays the app with

```html
<script src="build/app.js"></script>
```

### alt.js

Requires `[alt](http://alt.js.org)`: a flux compliant library for JavaScript applications.

## License

BSD 3-Clause License

