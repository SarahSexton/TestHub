var Botkit = require('botkit');
var controller = Botkit.slackbot();
var bot = controller.spawn({
  token: 'xoxb-39868469910-KNd2o6uJphkqXPkFvbSg8vkw'
})
bot.startRTM(function (err, bot, payload) {
  if (err) {
    throw new Error('Could not connect to Slack');
  }
  
  //Hello
  controller.hears('hello', ['direct_message', 'direct_mention', 'mention'], function (bot, message) {
    bot.reply(message, 'Hello yourself. thanks for saying: ' + message.text);
  });
});