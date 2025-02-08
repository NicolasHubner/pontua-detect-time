import { registerWebModule, NativeModule } from 'expo';

import { PontuaDetectTimeModuleEvents } from './PontuaDetectTime.types';

class PontuaDetectTimeModule extends NativeModule<PontuaDetectTimeModuleEvents> {
  PI = Math.PI;
  async setValueAsync(value: string): Promise<void> {
    this.emit('onChange', { value });
  }
  hello() {
    return 'Hello world! 👋';
  }
}

export default registerWebModule(PontuaDetectTimeModule);
