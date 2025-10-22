import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import type { ProtoGrpcType } from './proto_gen/greet';

const protoDir = process.env.PROTO_DIR || '../proto';
const protoPath = protoDir + '/services/greet.proto';

const packageDefinition = protoLoader.loadSync(protoPath, {
  includeDirs: [protoDir],
});
const proto = (grpc.loadPackageDefinition(
  packageDefinition
) as unknown) as ProtoGrpcType;

export const greeterServiceClient = new proto.Greeter(
  process.env.GRPC_SERVER_URL || 'localhost:9090',
  grpc.credentials.createInsecure()
);