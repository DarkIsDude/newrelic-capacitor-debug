import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './i18n';
import { Capacitor } from '@capacitor/core';

async function initNewrelic() {
  if (!Capacitor) {
    return;
  }

  if (Capacitor.getPlatform() === 'web') {
    return;
  }

  console.info('Initializing New Relic for Capacitor');

  const { NewRelicCapacitorPlugin } = await import('@newrelic/newrelic-capacitor-plugin');

  const appToken = "eu01xxbd3be6889f366a070da4d61a7c5f76868a60-NRMA";

  let agentConfig = {
    analyticsEventEnabled: true,
    crashReportingEnabled: true,
    interactionTracingEnabled: true,
    networkRequestEnabled: true,
    networkErrorRequestEnabled: true,
    httpResponseBodyCaptureEnabled: true,
    loggingEnabled: true,
    logLevel: "info",
    webViewInstrumentation: true,
    sendConsoleEvents: true,
    fedRampEnabled: false,
    offlineStorageEnabled: true,
    backgroundReportingEnabled: false,
    newEventSystemEnabled: true
  }

  NewRelicCapacitorPlugin.start({appKey:appToken, agentConfiguration:agentConfig})
}

initNewrelic();

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
