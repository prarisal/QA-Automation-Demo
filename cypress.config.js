const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    viewportWidth: 1200,
    viewportHeight: 800,
    baseUrl: 'https://dev.delekhomes.com',
    env: {
      userEmail:'prisal@gmail.com',
      userPw:'12345',
      adminEmail:'admin@gmail.com',
      adminPw:'DontTestMe'
    },
  },
});
