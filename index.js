const mineflayer = require('mineflayer');
const http = require('http');

// 1. RENDER KO ZINDA RAKHNE KE LIYE (Port Fix)
http.createServer((req, res) => {
  res.write("Bot is online!");
  res.end();
}).listen(8080); // Isse Render 'Live' dikhayega

// 2. BOT KI DETAILS
const bot = mineflayer.createBot({
  host: 'corrruptedsmpxyz.falix.gg', 
  port: 28853,                       
  username: 'aurora_assistant',      
  version: '1.21.4',                 //
  auth: 'offline'
});

// 3. AUTO LOGIN (Jaise hi bot join karega)
bot.on('spawn', () => {
  console.log('✅ Bot server ke andar aa gaya hai!');
  // YAHAN APNA PASSWORD LIKHO (Example: /login 12345)
  bot.chat('/login TERAPASSWORD'); 
});

// 4. AGAR KICK HO JAYE TOH LOGS MEIN DIKHEGA
bot.on('kicked', (reason) => {
  console.log('⚠️ Bot kick ho gaya: ', reason); //
});

bot.on('error', (err) => console.log('❌ Error: ', err.message));






