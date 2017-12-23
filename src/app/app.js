import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import angularAnimate from 'angular-animate';
import angularMessages from 'angular-messages';
import angularTouch from 'angular-touch';
import angularUIBootstrap from 'angular-ui-bootstrap';
import angularSanitize from 'angular-sanitize';
import angularGrid from 'angulargrid';
import uiSelect from 'ui-select';

import commonModule from './common/common.module';
import managersModule from './managers/managers.module';

import routing from './app.routing';

// uncomment the line below to reproduce the issue
import { childApp } from '@some/child';

let mod = angular.module('hostApp', [
	// vendors
	uiRouter,
	uiSelect,
	angularSanitize,
	angularAnimate,
	angularMessages,
	angularTouch,
	angularUIBootstrap,
	angularGrid,
	// proprietary
	commonModule,
	managersModule,
]);


mod.config(routing);
