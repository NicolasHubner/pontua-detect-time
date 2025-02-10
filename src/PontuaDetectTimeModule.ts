import { NativeModule, requireNativeModule } from "expo";

declare class PontuaDetectTimeModule extends NativeModule {
  isAutoDateTimeEnabled(): Promise<boolean>;
  isAutoTimeZoneEnabled(): Promise<boolean>;
}

// This call loads the native module object from the JSI.
export default requireNativeModule<PontuaDetectTimeModule>("PontuaDetectTime");
