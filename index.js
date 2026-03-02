const mineflayer = require('mineflayer');
const http = require('http');

// 1. RENDER PORT FIX (Bot ko 24/7 zinda rakhne ke liye)
http.createServer((req, res) => {
  res.write("Bot is online!");
  res.end();
}).listen(8080); //

// 2. BOT SETTINGS
const botArgs = {
  host: 'corrruptedsmpxyz.falix.gg', 
  port: 28853,                       
  username: 'aurora_assistant',      
  version: '1.21.4',                 //
  auth: 'offline'
};

let bot;

function createBot() {
  bot = mineflayer.createBot(botArgs);

  bot.on('spawn', () => {
    console.log('✅ Bot Joined! Authenticating...');
    
    // 2 second baad Register (Sirf pehli baar kaam karega)
    setTimeout(() => {
      bot.chat('/register TeraPass123 TeraPass123');
    }, 2000);

    // 4 second baad Login (Har restart ke baad kaam karega)
    setTimeout(() => {
      bot.chat('/login TeraPass123');
    }, 4000);
  });

  // RESTART LOGIC: Agar server restart ho toh bot wapas join karega
  bot.on('end', () => {
    console.log('⚠️ Server restart ya disconnect hua. Reconnecting in 5s...');
    setTimeout(createBot, 5000); // 5 second baad naya bot banayega
  });

  bot.on('error', (err) => console.log('❌ Error: ', err.message));
  bot.on('kicked', (reason) => console.log('⚠️ Kicked: ', reason)); //
}

createBot();






