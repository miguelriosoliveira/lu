This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `.env` file

You'll need to create a `.env` file in order to run the application correctly.<br />
The map used is a Google Maps map, which needs an API key to be displayed. This key can be generated [here](https://developers.google.com/maps/documentation/javascript/get-api-key).<br />
The `.env` file will be something like this:

```shell
# .env
REACT_APP_GOOGLE_KEY=<API_KEY>
```

The `REACT_APP_` prefix is mandatory.
