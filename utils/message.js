const moment = require('moment');

function formatMessage(author, text) {
    return {
        author,
        text,
        time : moment().format('h:mm a')
    };
}

module.exports = {
    formatMessage
};