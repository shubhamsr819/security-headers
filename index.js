const express = require("express");
const app = express();

// Removing headers to show server -> due to security purpose.
// app.use((req, res, next) => {
//   res.removeHeader("X-Powered-By");
//   next();
// });

// const redirectsToHttps = (req, res, next) => {
//   if (req.headers["x-forwarded-proto"] !== "https") {
//     // Redirect to https
//     return res.redirect(["https://", req.get("Host"), req.url].join(""));
//   }
//   next();
// };

// app.use(redirectsToHttps);

app.use((req, res, next) => {
  res.set("Referrer-Policy", "no-referrer"); // not sending any Referrer policy
  res.removeHeader("X-Powered-By");  // preventing to send server details 
  res.setHeader("X-Content-Type-Options", "nosniff"); // preventing cross-site scritpting attacks.
  res.setHeader(
    "Strict-Transport-Security",
    "max-age-31536000; includeSubDomains; preload" // preload is a hardcoded list of sites that browser use to force HTTPS connections from the first visit, without needing to wait for the first response from the server.
  );
  next();
});

// nosniff -> it means don't do any smartness

app.get("/list", (req, res) => {
  res.send([
    {
      id: 1,
      title: "shubham singh",
    },
  ]);
});

const port = process.env.PORT || 5010;
app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
