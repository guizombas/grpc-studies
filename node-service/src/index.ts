import express from "express";
import { greeterServiceClient } from "./grpc/serviceDefinitions";

const app = express();
app.use(express.json());

app.get("/", (_req, res) => {
  res.send({ message: "App running" });
});

app.post("/operation", async (req, res) => {
  const { operation } = req.body ?? {};
  if (!operation)
    return res.status(400).send({ message: "missing 'operation'" });
  console.log(new Date().toISOString() + " == Received operation:", operation);
  // do stuff
  await new Promise((resolve) => setTimeout(resolve, 1000));
  
  console.log(
    new Date().toISOString() + " == Calling gRPC service with operation:",
    operation
  );

  greeterServiceClient.sayHello({ name: operation }, async (err, response) => {
    if (err) {
      console.error(
        new Date().toISOString() + " == Error calling gRPC service:",
        err
      );
      return res
        .status(500)
        .send(new Date().toISOString() + " == gRPC service error");
    }

    console.log(
      new Date().toISOString() + " == gRPC service response:",
      response
    );
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(
      new Date().toISOString() + " == sending response back to client"
    );
    res.send({
      message:
        "successful operation with code " +
        response.code +
        " and message: " +
        response.message,
    });
  });
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log("Server is running on port " + port);
});
