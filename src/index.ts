// Reexport the native module. On web, it will be resolved to PontuaDetectTimeModule.web.ts
// and on native platforms to PontuaDetectTimeModule.ts
export { default } from './PontuaDetectTimeModule';
export { default as PontuaDetectTimeView } from './PontuaDetectTimeView';
export * from  './PontuaDetectTime.types';
