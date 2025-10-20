import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { HelloReply as _HelloReply, HelloReply__Output as _HelloReply__Output } from './HelloReply';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  HelloReply: MessageTypeDefinition<_HelloReply, _HelloReply__Output>
}

