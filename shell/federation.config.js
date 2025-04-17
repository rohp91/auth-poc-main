const { withNativeFederation, share } = require('@angular-architects/native-federation/config');

module.exports = withNativeFederation({

  shared: share({
    '@angular/core': { singleton: true, strictVersion: true, requiredVersion: 'auto' },
    '@angular/common': { singleton: true, strictVersion: true, requiredVersion: 'auto' },
    '@angular/router': { singleton: true, strictVersion: true, requiredVersion: 'auto' },
    '@angular/platform-browser': { singleton: true, strictVersion: true, requiredVersion: 'auto' },
    '@angular/platform-browser-dynamic': { singleton: true, strictVersion: true, requiredVersion: 'auto' },
    '@angular/animations': { singleton: true, strictVersion: true, requiredVersion: 'auto' },
    '@angular/material': { singleton: true, strictVersion: true, requiredVersion: 'auto' },
    '@angular/cdk': { singleton: true, strictVersion: true, requiredVersion: 'auto' },
    'rxjs': { singleton: true, strictVersion: true, requiredVersion: 'auto' },
  }),
  skip: [
    'rxjs/ajax',
    'rxjs/fetch',
    'rxjs/testing',
    'rxjs/webSocket',
    // Add further packages you don't need at runtime
  ]

  // Please read our FAQ about sharing libs:
  // https://shorturl.at/jmzH0
  
});
