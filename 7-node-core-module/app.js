// Willi
// Minggu, 5 Februari 2023
// Core Module
// File System
const fs = require('fs');

// Menuliskan string ke file (synchronous)
// try {
//     fs.writeFileSync('data/test.txt', 'Hello World secara synchronous.');
// } catch(e) {
//     console.log(e);
// }

// Menuliskan string ke file (asynchronous)
// fs.writeFile('data/test.txt', 'Hello World secara asynchronous.', (e) => {
//     console.log(e);
// });

// Membaca isi file (synchronous)
// const data = fs.readFileSync('data/test.txt', 'utf-8');
// console.log(data);

// Membaca isi file (asynchronous)
// fs.readFile('data/test.txt', 'utf-8', (err, data) => {
//     if(err) throw err;
//     console.log(data);
// });

// Readline
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question('Masukkan Nama Anda : ', (nama) => {
    rl.question('Masukkan No HP Anda : ', (noHP) => {
        const contact = { nama, noHP };
        const file = fs.readFileSync('data/contacts.json', 'utf-8');
        const contacts = JSON.parse(file);
        
        contacts.push(contact);

        fs.writeFileSync('data/contacts.json', JSON.stringify(contacts));

        console.log('Terima kasih sudah memasukkan data.')

        rl.close();
    });    
});