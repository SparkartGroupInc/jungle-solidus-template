var yaml = require('js-yaml');
var site = yaml.safeLoad(fs.readFileSync('site.yml'));

var SubscribeEmail = require('blocks-subscribe-email');
//var Alerter = require('blocks-alerter');

if (window.addEventListener) {
  window.addEventListener('load', initWidgets, false);
} else if (window.attachEvent)  {
  window.attachEvent('onload', initWidgets);
}

//TODO: make this iterate over all widget instances
function initWidgets() {
  var mySubscribeForm = new SubscribeEmail({
    element: '#subscribe-form',
    service: 'universe',
    key: site.mailinglist_apikey
  });
};