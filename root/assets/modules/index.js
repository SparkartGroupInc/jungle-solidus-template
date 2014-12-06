var SubscribeEmail = require('blocks-subscribe-email');
var subscribeTemplate = require('./subscribe-template.hbs');
//var Alerter = require('blocks-alerter');

if (window.addEventListener) {
  window.addEventListener('load', initWidgets, false);
} else if (window.attachEvent)  {
  window.attachEvent('onload', initWidgets);
}

function initWidgets() {

  $('.widget-subscribe .subscribe-placeholder').each(function(index){
    var mySubscribeForm = new SubscribeEmail({
      element: $(this),
      service: 'sendgrid',
      key: site.name,
      template: subscribeTemplate
    });
  });

};