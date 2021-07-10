'use strict';
module.exports = robot => {
  robot.hear(/Привет/i, msg => {
    const user_id = msg.message.user.id;
    msg.send(`Привет! Товарищ <@${user_id}>`);
  });
  robot.hear(/昼食/i, msg => {
    const user_id = msg.message.user.id;
    const lots = ['コンビニ', '吉野家', 'はしご', 'はなまるうどん', '行ったことのない店'];
    const lot = lots[Math.floor(Math.random() * lots.length)];
    msg.send(`<@${user_id}> 昼食は${lot}が良かろう`);
  });
  robot.hear(/おみくじ/i, msg => {
    const user_id = msg.message.user.id;
    const lots = ['大吉', '吉', '中吉', '末吉', '凶'];
    const lot = lots[Math.floor(Math.random() * lots.length)];
    msg.send(`<@${user_id}> 今日の運勢は${lot}です`);
  });
};
