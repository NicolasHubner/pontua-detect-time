import PontuaDetectTimeModule from "./PontuaDetectTimeModule";

export function getTheme(): string {
  return PontuaDetectTimeModule.getTheme();
}

export function isAutoDateTimeEnabled(): Promise<boolean> {
  return PontuaDetectTimeModule.isAutoDateTimeEnabled();
}

export function isAutoTimeZoneEnabled(): Promise<boolean> {
  return PontuaDetectTimeModule.isAutoTimeZoneEnabled();
}
