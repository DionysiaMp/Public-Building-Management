'use strict';
let sqlite3 = require('sqlite3');

let db = new sqlite3.cached.Database('./model/sqlite/proj10.sqlite', (err) => {
    if (err) {
        if (err) throw err;
    }
});

db.run('PRAGMA journal_mode = WAL;')

module.exports = db;