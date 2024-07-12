const {join} = require("node:path");

module.exports = ({ env }) => ({
  connection: {
    client: 'sqlite',
    connection: {
      filename: join(__dirname, '..', env('DATABASE_FILENAME', '.tmp/data.db')),
    },
    useNullAsDefault: true,
  },
});

// module.exports = ({ env }) => ({
//     connection: {
//         client: 'postgres',
//         connection: {
//             connectionString: env('DATABASE_PRIVATE_URL')
//         },
//         pool: { min: 0 }
//     }
// });
