const { connect, connection } = require("mongoose");
const bandFabric = require('./fabrics/bandfabric')
const genreFabric = require('./fabrics/genrefabric')
const gigFabric = require('./fabrics/gigfabric')
const newsFabric = require('./fabrics/newsfabric')
const placeFabrics = require('./fabrics/placefabrics')

require('dotenv').config()


async function main() {
  await connect(process.env.DB_ATLAS_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  });

  console.log(process.env.DB_ATLAS_URL);

  // await bandFabric()
  // await genreFabric()
  await gigFabric()
  // await newsFabric()
  // await placeFabrics()
  console.log('vi molodets');
  await connection.close();
}

main();



