module.exports = async function (context, req) {
    console.log("JavaScript HTTP trigger function processed a request.");
    const name = req.query.name || (req.body && req.body.name);
    const responseMessage = name
        ? "Hello, " +
          name +
          ". This HTTP triggered function executed successfully."
        : "This HTTP triggered function executed successfully. Pass a name in the query string or in the request body for a personalized response.";
    // 03ef3d18-e860-444f-8f00-ab8be20ffcd5
    context.res = {
        body: responseMessage,
    };
};
