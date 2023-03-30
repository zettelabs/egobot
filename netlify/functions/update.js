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
                    await hashnode.getFeaturedPosts().then((async result => {
                        console.log("storiesFeed " + result)
                        await sendMessage(message.chat.id, result + "a");
                    }));
                break;

            default:
                await sendMessage(message.chat.id, "I don't understand that command.");
        }
    }



// You can clear a periodic function by uncommenting:
// clearInterval(intervalId);


    return {statusCode: 200};
};