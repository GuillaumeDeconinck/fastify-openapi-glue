export default (
  data
) => `// Fastify plugin autogenerated by fastify-openapi-glue
import openapiGlue from "${data.pluginPackageName}";
import { Service } from "./${data.serviceFile}";
import { Security } from "./${data.securityFile}";
const localFile = ( fileName ) => (new URL(fileName,import.meta.url)).pathname

const options = {
  specification: localFile('./${data.specFile}'),
  service: new Service(),
  securityHandlers: new Security(),
};

export default async function (fastify, opts) {
  fastify.register(openapiGlue, options);
};
`;