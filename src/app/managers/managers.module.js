import angular from 'angular';

import routing from './managers.routing';

import ManagersLookupComponent from './managers-lookup/managers-lookup.component';
import ManagersService from './managers.service';


let mod = angular.module('wealthManagers.managers', []);
mod.component('managersLookup', ManagersLookupComponent);
mod.service('managersService', ManagersService);


mod.config(routing);


export default mod.name;
