import { DiagConsoleLogger, DiagLogLevel, diag } from '@opentelemetry/api';
import { OTLPTraceExporter } from '@opentelemetry/exporter-trace-otlp-http';
import { appConfig } from './config/constants';
import { getNodeAutoInstrumentations } from '@opentelemetry/auto-instrumentations-node';
import { log } from './utils/logger';
import opentelemetry from '@opentelemetry/sdk-node';

log.info(`tracing: ${appConfig.enableTracing}`);
if(appConfig.enableTracing) {

  // For troubleshooting, set the log level to DiagLogLevel.DEBUG
  diag.setLogger(new DiagConsoleLogger(), DiagLogLevel.INFO);

  const sdk = new opentelemetry.NodeSDK({
    instrumentations: [getNodeAutoInstrumentations()],
    serviceName: 'API',
    traceExporter:  new OTLPTraceExporter({
      // optional - collection of custom headers to be sent with each request, empty by default
      headers: {},
      // optional - default url is http://localhost:4318/v1/traces
      url: 'http://localhost:4318/v1/traces', //"http://localhost:14268/api/traces",
    }),
  });

sdk.start();

}
