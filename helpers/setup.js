'use strict';

require( 'colors' );

const wd   = require( 'wd' );
const chai = require( 'chai' );

const chaiAsPromised = require( 'chai-as-promised' );

chai.use( chaiAsPromised );

const should = chai.should();

chaiAsPromised.transferPromiseness = wd.transferPromiseness;

exports.should = should;
