const config = {
    user: 'kalpesh',
    password: 'kalpesh@123',
    server: '172.16.12.236',
    database: 'Asset',
    "options": {
      "encrypt": false, // Set to true if using Azure SQL
      "enableArithAbort": false
    },
    port : 1433
}

module.exports = config; 