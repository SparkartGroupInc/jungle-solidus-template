var Alerter = require('blocks-alerter');
var alertTemplate = require('./alerter-template.hbs');
var qs = require('querystring');

module.exports = function(){
  var params = qs.parse(window.location.search.split('?').pop());

  global.window.pageAlerter = new Alerter({
    template: alertTemplate,
    prependTo: document.querySelector('.widget-alert') || document.querySelector('#content') || 'body'
  });

  if (params.msg){
    pageAlerter.create({
      message: params.msg,
      dismissable: false
    });
  }

  if (pageAlerter instanceof Alerter) {
    window.dispatchEvent(new CustomEvent('alerterReady'));
  }

  return pageAlerter;
};