import "regenerator-runtime";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./component/card-title";
global.jQuery = require('jquery');
import app from "./scripts/app";
import jsSetting from "./scripts/script";
import "./styles/main.css";

app();
jsSetting();