cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
  {
    "id": "cordova-plugin-customurlscheme.LaunchMyApp",
    "file": "plugins/cordova-plugin-customurlscheme/www/android/LaunchMyApp.js",
    "pluginId": "cordova-plugin-customurlscheme",
    "clobbers": [
      "window.plugins.launchmyapp"
    ]
  },
  {
    "id": "cordova-plugin-inappbrowser.inappbrowser",
    "file": "plugins/cordova-plugin-inappbrowser/www/inappbrowser.js",
    "pluginId": "cordova-plugin-inappbrowser",
    "clobbers": [
      "cordova.InAppBrowser.open",
      "window.open"
    ]
  },
  {
    "id": "cordova-plugin-keychain-touch-id.TouchID",
    "file": "plugins/cordova-plugin-keychain-touch-id/www/touchid.js",
    "pluginId": "cordova-plugin-keychain-touch-id",
    "clobbers": [
      "window.plugins.touchid"
    ]
  },
  {
    "id": "cordova-plugin-qrscanner.QRScanner",
    "file": "plugins/cordova-plugin-qrscanner/www/www.min.js",
    "pluginId": "cordova-plugin-qrscanner",
    "clobbers": [
      "QRScanner"
    ]
  },
  {
    "id": "cordova-plugin-qrscanner-monya.QRScanner",
    "file": "plugins/cordova-plugin-qrscanner-monya/www/www.min.js",
    "pluginId": "cordova-plugin-qrscanner-monya",
    "clobbers": [
      "QRScanner"
    ]
  },
  {
    "id": "cordova-plugin-splashscreen.SplashScreen",
    "file": "plugins/cordova-plugin-splashscreen/www/splashscreen.js",
    "pluginId": "cordova-plugin-splashscreen",
    "clobbers": [
      "navigator.splashscreen"
    ]
  },
  {
    "id": "cordova-plugin-statusbar.statusbar",
    "file": "plugins/cordova-plugin-statusbar/www/statusbar.js",
    "pluginId": "cordova-plugin-statusbar",
    "clobbers": [
      "window.StatusBar"
    ]
  },
  {
    "id": "cordova-clipboard.Clipboard",
    "file": "plugins/cordova-clipboard/www/clipboard.js",
    "pluginId": "cordova-clipboard",
    "clobbers": [
      "cordova.plugins.clipboard"
    ]
  }
];
module.exports.metadata = 
// TOP OF METADATA
{
  "cordova-plugin-customurlscheme": "4.3.0",
  "cordova-plugin-inappbrowser": "2.0.1",
  "cordova-plugin-keychain-touch-id": "3.2.1",
  "cordova-plugin-qrscanner": "2.5.0",
  "cordova-plugin-qrscanner-monya": "2.5.4",
  "cordova-plugin-splashscreen": "4.1.0",
  "cordova-plugin-statusbar": "2.4.1",
  "cordova-plugin-whitelist": "1.3.3",
  "cordova-clipboard": "1.1.1"
};
// BOTTOM OF METADATA
});