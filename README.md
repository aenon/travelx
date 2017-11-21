# travelx

travelx - react and alt.js app showing travel destinations


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

## Files

ajax-loader.gif
build
index.html
package.json
README.md
src
├── actions
│   └── LocationActions.js
├── components
│   └── Locations.jsx
├── sources
│   └── LocationSource.js
├── stores
│   ├── FavoritesStore.js
│   └── LocationStore.js
├── alt.js
└── App.jsx

<img src="https://facebook.github.io/flux/img/flux-simple-f8-diagram-with-client-action-1300w.png" width="400px" alt="flux dataflow">

### alt.js

Requires `[alt](http://alt.js.org)`: a flux compliant library for JavaScript applications.

## License

BSD 3-Clause License

