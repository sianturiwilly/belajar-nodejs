// console.log('Hello WPU');
// const nama = 'Willi Sianturi';
// const cetakNama = (nama) => `Hai, nama saya ${nama}.`;
// console.log(cetakNama(nama));
// console.log(window);

// const fs = require('fs'); // Core module
// const cetakNama = require('./coba'); // Local Module
// const moment = require('moment'); // Third party module / npm module / npm_modules

// console.log('Hello WPU');

// const cetakNama = require('./coba');
// const PI = require('./coba');
const coba = require('./coba');

console.log(
    coba.cetakNama('Willi'),
    coba.PI,
    coba.mahasiswa.cetakMhs(),
    new coba.Orang()
);