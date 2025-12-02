// bot/messageHandler.js

class MessageHandler {
    constructor() {
        this.commands = {};
    }

    registerCommand(command, callback) {
        this.commands[command] = callback;
    }

    handleMessage(message) {
        const command = this.extractCommand(message);
        if (this.commands[command]) {
            this.commands[command](message);
        } else {
            this.handleUnknownCommand(message);
        }
    }

    extractCommand(message) {
        const parts = message.split(' ');
        return parts[0].toLowerCase(); // Assuming the command is the first part
    }

    handleUnknownCommand(message) {
        console.log(`Unknown command: ${message}`);
        // Add more handling logic for unknown commands, if needed
    }
}

module.exports = new MessageHandler();