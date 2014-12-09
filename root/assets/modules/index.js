var subscribe = require('./subscribe');
var alerter = require('./alerter');

if (window.addEventListener) {
  window.addEventListener('load', initWidgets, false);
} else if (window.attachEvent)  {
  window.attachEvent('onload', initWidgets);
}

function initWidgets() {

  alerter();
  subscribe();

};