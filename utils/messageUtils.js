// messageUtils.js

/**
 * Extracts messages from a given string based on specified delimiters.
 * @param {string} input - The string from which to extract messages.
 * @param {string[]} delimiters - Array of delimiters to split the messages.
 * @returns {string[]} - An array of extracted messages.
 */
function extractMessages(input, delimiters) {
    const regex = new RegExp(`[${delimiters.join('')}]+`);
    return input.split(regex).filter(msg => msg.trim() !== '');
}

/**
 * Parses a command string and extracts the command and its arguments.
 * @param {string} commandString - The command string to parse.
 * @returns {{ command: string, args: string[] }} - An object containing the command and its arguments.
 */
function parseCommand(commandString) {
    const parts = commandString.trim().split(/\s+/);
    const command = parts[0];
    const args = parts.slice(1);
    return { command, args };
}

module.exports = { extractMessages, parseCommand };