var SubscribeEmail = require('blocks-subscribe-email');
var subscribeTemplate = require('./subscribe-template.hbs');

module.exports = function(){
  var mailingListConfig = {template: subscribeTemplate, alerter: false};

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

  var subscribePlaceholders = document.querySelectorAll('.widget-subscribe .subscribe-placeholder');

  Array.prototype.forEach.call(subscribePlaceholders, function(placeholder){
    mailingListConfig.element = placeholder;
    var mySubscribeForm = new SubscribeEmail(mailingListConfig);

    mySubscribeForm.on('subscriptionSuccess', function(payload){
      console.log(payload);
      pageAlerter.create({
        message: 'Thanks for signing up for the mailing list!',
        details: payload.message,
        errors: payload.messages,
        type: 'success',
        dismissable: true
      });
    });

    mySubscribeForm.on('subscriptionError', function(payload){
      console.log(payload);
      pageAlerter.create({
        message: 'There was an error adding you to the mailing list.',
        details: payload.message,
        errors: payload.messages,
        type: 'error',
        dismissable: true
      });
    });
  });
};