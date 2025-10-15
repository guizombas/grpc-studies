package com.grpc.demo.controller;

import com.grpc.demo.proto_gen.GreeterGrpc;
import com.grpc.demo.proto_gen.HelloReplyOuterClass;
import org.springframework.stereotype.Service;

@Service
public class GreeterGrpcServiceImpl extends GreeterGrpc.GreeterImplBase {
    @Override
    public void sayHello(com.grpc.demo.proto_gen.HelloRequestOuterClass.HelloRequest request,
                  io.grpc.stub.StreamObserver<com.grpc.demo.proto_gen.HelloReplyOuterClass.HelloReply> responseObserver) {
        this.sayHelloDefinitively(request, responseObserver);
    }

    @Override
    public void sayHelloAgain(com.grpc.demo.proto_gen.HelloRequestOuterClass.HelloRequest request, io.grpc.stub.StreamObserver<com.grpc.demo.proto_gen.HelloReplyOuterClass.HelloReply> responseObserver) {
        this.sayHelloDefinitively(request, responseObserver);
    }

    private void sayHelloDefinitively(com.grpc.demo.proto_gen.HelloRequestOuterClass.HelloRequest request, io.grpc.stub.StreamObserver<com.grpc.demo.proto_gen.HelloReplyOuterClass.HelloReply> responseObserver) {
        String message = "Hello " + request.getName();
        System.out.println(message);
        var reply = HelloReplyOuterClass.HelloReply.newBuilder().setMessage(message).build();

        responseObserver.onNext(reply);
        responseObserver.onCompleted();
    }

}
