//Funktion der logger en besked med timestamp
function log(message) {
    const timestamp = new Date().toLocaleString('da-Dk');
    console.log(`[${timestamp}] ${message}`);
}

// Eksporter funktionen
module.exports = log;