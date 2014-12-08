var SubscribeEmail = require('blocks-subscribe-email');
var subscribeTemplate = require('./subscribe-template.hbs');
//var Alerter = require('blocks-alerter');

if (window.addEventListener) {
  window.addEventListener('load', initWidgets, false);
} else if (window.attachEvent)  {
  window.attachEvent('onload', initWidgets);
}

function initWidgets() {

  var subscribePlaceholders = document.querySelectorAll('.widget-subscribe .subscribe-placeholder');

  Array.prototype.forEach.call(subscribePlaceholders, function(placeholder){
    var mySubscribeForm = new SubscribeEmail({
      element: placeholder,
      service: 'sendgrid',
      key: site.integrations.mailinglist_apikey,
      template: subscribeTemplate
    });
  });

};