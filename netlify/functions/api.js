// Netlify Function: wraps the Express app so /api/* and /health run serverless.
const serverless = require("serverless-http");
const app = require("../../server");

module.exports.handler = serverless(app, {
  binary: ["application/pdf", "multipart/form-data", "application/octet-stream"]
});
