This site is built with:

 - [**Solidus**][solidus] serves pages from API data and [Handlebars templates][handlebars]
 - [**storyteller.io**][storyteller] provides reliable access to APIs
 - [**gulp**][gulp] runs tasks to compile and fingerprint assets
 - [**npm**][npm] manages library and third-party dependencies

Previously the site was built with Clique Tools, a retired content/commerce/community platform. It was migrated to Solidus and a variety of other services following the [jungle-solidus migration path][jungle-solidus].


Making Updates :octocat:
--------------------------------------------------------------------------------

[Install the Solidus devbox][devbox] for the easiest way to get up and running. The devbox uses Vagrant to create and maintain a consistent development environment complete with everything you need.

Be sure to [use branches][github-flow] and push granular commits regularly [with good messages][git-messages].

### Review

Ready to share your updates with others? [Open a pull request][github-pullrequest] and share the URL with everyone in any corresponding Trello cards, Slack, etc. With great formatting features and [checklists][github-checklists] a pull request provides a great place to discuss updates, feedback, etc.

In addition to code differences your branch will also automatically be hosted at this point on a public URL for others to easily see and interact with your changes. This site uses [CircleCI][circle] to automatically deploy any updates to [Modulus][modulus], our node.js host. If a Modulus project doesn’t exist for your branch, one will be created automatically for you by [qa-deployer][qa-deployer]. The URL will be added as a comment in your pull request once it’s ready, typically within 5 minutes.


Going Live :star2:
--------------------------------------------------------------------------------

Commits pushed (or merged) to master automatically deploy within 5 minutes. Therefore keeping with [GitHub Flow][github-flow] master should always be ready to go live.

### Notifications

Success/fail messages from CircleCI are posted in the [#deployments][slack] Slack channel. To get [notifications from Slack][slack-notifications] via email or on your phone, match up your Slack and GitHub usernames. You can also [check CircleCI directly][circle-repo] (login with your GitHub account) to see the status of a deploy with a full log. Any failed deploys can be retried here as well.


[solidus]: https://github.com/SparkartGroupInc/solidus
[handlebars]: http://handlebarsjs.com
[gulp]: http://gulpjs.com
[npm]: https://www.npmjs.com
[storyteller]: http://www.storyteller.io
[jungle-solidus]: https://github.com/sparkartgroupinc/jungle-solidus/wiki
[devbox]: https://github.com/solidusjs/solidus-devbox

[github-checklists]: https://github.com/blog/1375
[github-pullrequest]: https://guides.github.com/activities/hello-world/#pr
[github-flow]: http://guides.github.com/overviews/flow
[git-messages]: http://tbaggery.com/2008/04/19/a-note-about-git-commit-messages.html

[modulus]: http://modulus.io
[circle]: https://circleci.com
[circle-repo]: https://circleci.com/gh/sparkartgroupinc/{%= name %}
[qa-deployer]: https://github.com/sparkartgroupinc/qa-deployer
[slack]: https://sparkart.slack.com/messages/deployments
[slack-notifications]: https://slack.zendesk.com/hc/en-us/articles/201895138-Notifications-overview