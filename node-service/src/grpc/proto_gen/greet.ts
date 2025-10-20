import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { GreeterClient as _GreeterClient, GreeterDefinition as _GreeterDefinition } from './Greeter';
import type { HelloReply as _HelloReply, HelloReply__Output as _HelloReply__Output } from './HelloReply';
import type { HelloRequest as _HelloRequest, HelloRequest__Output as _HelloRequest__Output } from './HelloRequest';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  Greeter: SubtypeConstructor<typeof grpc.Client, _GreeterClient> & { service: _GreeterDefinition }
  HelloReply: MessageTypeDefinition<_HelloReply, _HelloReply__Output>
  HelloRequest: MessageTypeDefinition<_HelloRequest, _HelloRequest__Output>
}

