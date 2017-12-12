import _ from 'lodash';
import angular from 'angular';

import approot from './components/approot.component';


import '../style.css';

angular.module("app", [])
    .component("appRoot", approot);