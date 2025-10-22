package com.grpc.demo.controller;

import com.grpc.demo.proto_gen.GreeterGrpc;
import com.grpc.demo.proto_gen.HelloReplyOuterClass;
import org.springframework.stereotype.Service;

@Service
public class GreeterGrpcServiceImpl extends GreeterGrpc.GreeterImplBase {
    @Override
    public void sayHello(com.grpc.demo.proto_gen.HelloRequestOuterClass.HelloRequest request,
            io.grpc.stub.StreamObserver<com.grpc.demo.proto_gen.HelloReplyOuterClass.HelloReply> responseObserver) {
        System.out.println(java.time.LocalDateTime.now() + " == Received request for name: " + request.getName());
        String message = "Hello " + request.getName();
        int randomCode = (int) (Math.random() * 1000);
        System.out.println(message);
        var reply = HelloReplyOuterClass.HelloReply.newBuilder()
            .setMessage(message)
            .setCode(randomCode)
            .build();

        responseObserver.onNext(reply);
        System.out.println(java.time.LocalDateTime.now() + " == Sent response with code: " + randomCode);
        responseObserver.onCompleted();
        System.out.println(java.time.LocalDateTime.now() + " == Completed response");
    }

}
