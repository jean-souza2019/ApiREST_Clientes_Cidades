const fs = require('fs');

const path = './dbTest.sqlite';

try {
    fs.unlinkSync(path)
} catch (err) {
    console.error(err)
}