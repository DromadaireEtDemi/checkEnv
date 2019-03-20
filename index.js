const dotEnv = require('dotenv');
const fs = require('fs');

const checkPath = '.env.default';

module.exports = function(options = {}) {
  dotEnv.config(options);
  const checkEnv = dotEnv.parse(fs.readFileSync(options.checkPath || checkPath));
  let code = 0;
  for (const envVar in checkEnv) {
    if (!process.env[envVar]) {
      console.error('\x1b[43m%s\x1b[0m', `${envVar} not found in environment variables !`);
      code = 1;
    }
  }
  if (options.shouldExit && code)
    process.exit(code);
};
