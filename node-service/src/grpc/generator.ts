import { execSync } from "child_process";
import { globSync } from "glob";

const protoDir = process.env.PROTO_DIR || "../proto";
const protoPath = protoDir + "/**/*.proto";

const files = globSync(protoPath, { windowsPathsNoEscape: true });
if (files.length === 0) {
  console.error("❌ Nenhum arquivo .proto encontrado!");
  process.exit(1);
}

const command = [
  "proto-loader-gen-types",
  "--longs=String",
  "--enums=String",
  "--defaults",
  "--oneofs",
  "--grpcLib=@grpc/grpc-js",
  "--includeDirs=" + protoDir,
  "--outDir=src/grpc/proto_gen",
  ...files
].join(" ");

console.log("🔧 Gerando tipos gRPC...");
execSync(command, { stdio: "inherit" });