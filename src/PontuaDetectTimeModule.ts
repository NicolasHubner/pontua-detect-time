import { NativeModule, requireNativeModule } from 'expo';

import { PontuaDetectTimeModuleEvents } from './PontuaDetectTime.types';

declare class PontuaDetectTimeModule extends NativeModule<PontuaDetectTimeModuleEvents> {
  PI: number;
  hello(): string;
  setValueAsync(value: string): Promise<void>;
}

// This call loads the native module object from the JSI.
export default requireNativeModule<PontuaDetectTimeModule>('PontuaDetectTime');
