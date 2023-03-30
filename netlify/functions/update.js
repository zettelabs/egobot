const sendMessage = require("../../sendMessage");
const messageParts = require("../../messageParts");
const hashnode = require("../../hashnode");

exports.handler = async (event) => {
    const { message } = JSON.parse(event.body);
    const { command, botName, extra } = messageParts(message.text);
    await sendMessage(message.chat.id, command)
    if (botName === "TgEgoBot" || botName === null) {
        switch (command) {
            case "echo":
                await sendMessage(message.chat.id, extra || "ECHO!");
                break;

            case "hashnodefeatured":
                const { storiesFeed } = await hashnode.getFeaturedPosts();

                await sendMessage(message.chat.id, storiesFeed);
                break;

            default:
                await sendMessage(message.chat.id, "I don't understand that command.");
        }
    }

    return { statusCode: 200 };
};