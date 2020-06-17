const moment = require('moment');

function formatMessage(id, author, text) {
    return {
        id,
        author,
        text,
        time : moment().format('h:mm a')
    };
}

module.exports = {
    formatMessage
};