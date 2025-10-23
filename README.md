# grpc studies

project with a demo grpc application, with a single and simple rpc service implemented

## structure

/proto - directory containing the service contract proto files. used to generate server skeletons and client stubs

/java-service - grpc server code implemented using java (spring boot)

/node-service - rest api and the grpc server's client. Implemented using Node and TypeScript

## code generation

### java-service

``` mvn clean install ```

### node-service

``` npm run grpc ```

## run

### java-service

``` mvn spring-boot:run ```

runs grpc server on port 9090 by default

### node-service

``` npm start ```

runs rest api on port 3000 by default
