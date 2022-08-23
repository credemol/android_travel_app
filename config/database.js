/* it use when you work on your computer (local)
module.exports = {
    host: 'localhost',
    user: 'your id',
    password: 'your pw',
    database: 'travel_user'
};
*/
//it use when you work on your aws rds.
module.exports = {
    host: process.env.TRAVEL_DB_HOST || 'localhost',
    user: process.env.TRAVEL_DB_USER || 'root',
    password: process.env.TRAVEL_DB_PASSWORD || 'secretpassword',
    database: process.env.TRAVEL_DB_DATABASE || 'travel_app'
};