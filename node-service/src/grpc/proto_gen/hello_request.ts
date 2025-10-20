import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { HelloRequest as _HelloRequest, HelloRequest__Output as _HelloRequest__Output } from './HelloRequest';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  HelloRequest: MessageTypeDefinition<_HelloRequest, _HelloRequest__Output>
}

