const { defineConfig } = require("cypress");

module.exports = defineConfig({
    e2e: {
        baseUrl: 'https://www.demoblaze.com/'
    },

    env: {
        uid: 'neelChawde',
        pw: 'neel@123'
    }
})