'use strict';

// able to use .should
require( './helpers/setup' );

const wd = require( 'wd' );
const _  = require( 'underscore' );

const serverConfig = {
  'host' : 'localhost',
  'port' : 4723
};

// can't be change to arrow function
// since it has no binding of `this`
describe( 'ios simple', function () {
  this.timeout( 300000 );

  let driver;
  let allPassed = true;

  before( () => {
    // With this option, tests are written by stringing together
    // a whole series of method calls with dot operators.
    // To enable it, you must first obtain the driver object with
    // wd.promiseChainRemote rather than wd.Remote:
    driver = wd.promiseChainRemote( serverConfig );
    require( './helpers/logging' ).configure( driver );

    const desired = {
      'browserName'     : '',
      'appium-version'  : '1.6',
      'platformName'    : 'iOS',
      'platformVersion' : '10.2',
      'automationName'  : 'XCUITest',
      'deviceName'      : 'iPhone 5s',

      'app' : 'http://appium.github.io/appium/assets/TestApp7.1.app.zip'
    };

    return driver.init( desired );
  } );

  afterEach( () => {
    console.log( 'Done!' );
  } );

  it( 'should compute the sum', function () {
    return driver.resolve();
  } );
} );
