const csv = require('csvtojson');

(async function() {
  const csvFilePath = process.argv[2];

  const jsonArray = await csv().fromFile(csvFilePath);

  console.log(jsonArray);
})();
