// Importerer logger fra utils mappen
const log = require('./utils/logger');
// Importerer math modulet
const math = require('./utils/math');

// Test logger funktionen
log('serveren er startet');
log('Dette er en test besked');

// Test math funktionen
const resultat = math.add(5, 3);
log(`Resultatet af 5 + 3 er: ${resultat}`);

// Test med flere matematiske operationer
const sum1 = math.add(10, 20);
const sum2 = math.add(15, 25);

log(`Resultatet af 10 + 20 er: ${sum1}`);
log(`Resultatet af 15 + 25 er: ${sum2}`);