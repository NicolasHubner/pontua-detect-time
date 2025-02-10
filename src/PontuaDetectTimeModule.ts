import { requireNativeModule } from "expo";

declare class PontuaDetectTimeModule {
  isAutoDateTimeEnabled(): Promise<boolean>;
  isAutoTimeZoneEnabled(): Promise<boolean>;
}

// This call loads the native module object from the JSI.
export default requireNativeModule<PontuaDetectTimeModule>("PontuaDetectTime");
