function getEnvVar(
  name: string,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  defaultValue?: any,
  options?: { parseFloat?: boolean; parseInt?: boolean; parseBoolean?: boolean },
) {
  const envVar = process.env[name] || defaultValue;

  if (!options) {
    return envVar;
  }

  if (options.parseInt) {
    return parseInt(envVar, 10);
  }

  if (options.parseFloat) {
    return parseFloat(envVar);
  }

  if (options.parseBoolean && (envVar == 'true' || envVar == 'TRUE')) {
    return true;
  }

  if (options.parseBoolean && (envVar == 'false' || envVar == 'FALSE')) {
    return false;
  }

  return envVar;
}

const nodeEnv = getEnvVar('NODE_ENV', 'development').toLowerCase();
const isProduction: boolean = nodeEnv.includes('prod');

const name = '@raspberry/pi';

const config = {
  debugLevel: getEnvVar('DEBUG', `${name}:*:error`),
  environment: nodeEnv || 'development',
  isProduction: isProduction,
  name,
};

console.log(config);

export default config;
