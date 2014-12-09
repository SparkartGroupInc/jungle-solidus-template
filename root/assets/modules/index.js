var SubscribeEmail = require('blocks-subscribe-email');
var subscribeTemplate = require('./subscribe-template.hbs');
//var Alerter = require('blocks-alerter');

if (window.addEventListener) {
  window.addEventListener('load', initWidgets, false);
} else if (window.attachEvent)  {
  window.attachEvent('onload', initWidgets);
}

var mailingListConfig = {template: subscribeTemplate};

if (site.integrations.sendgrid_apikey) {
  mailingListConfig.service = 'sendgrid';
  mailingListConfig.key = site.integrations.sendgrid_apikey;
} else if (site.integrations.mailchimp_url) {
  mailingListConfig.service = 'mailchimp';
  mailingListConfig.url = site.integrations.mailchimp_url;
} else {
  mailingListConfig.service = 'universe';
  mailingListConfig.key = site.integrations.universe_apikey;
}

function initWidgets() {

  var subscribePlaceholders = document.querySelectorAll('.widget-subscribe .subscribe-placeholder');

  Array.prototype.forEach.call(subscribePlaceholders, function(placeholder){
    mailingListConfig.element = placeholder;
    var mySubscribeForm = new SubscribeEmail(mailingListConfig);
  });

};