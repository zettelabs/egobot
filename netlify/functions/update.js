const sendMessage = require("../../sendMessage");
const messageParts = require("../../messageParts");
const hashnode = require("../../hashnode");

exports.handler = async (event) => {
    const {message} = JSON.parse(event.body);
    const {command, botName, extra} = messageParts(message.text);
    if (botName === "TgEgoBot" || botName === null) {
        switch (command) {
            case "stop":
                await sendMessage(message.chat.id, extra || "STOPPED!");
                break;

            case "start":
                await sendMessage(message.chat.id, extra || "STARTED!");
                setInterval(send(), 60000)
                break;

            default:
                await sendMessage(message.chat.id, "I don't understand that command.");
        }
    }

    return {statusCode: 200};
};

async function send() {
    hashnode.getFeaturedPosts().then((async result => {
        console.log("storiesFeed " + result)
        await sendMessage(message.chat.id, result + "a");
    }))
}