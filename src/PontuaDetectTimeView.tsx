import { requireNativeView } from 'expo';
import * as React from 'react';

import { PontuaDetectTimeViewProps } from './PontuaDetectTime.types';

const NativeView: React.ComponentType<PontuaDetectTimeViewProps> =
  requireNativeView('PontuaDetectTime');

export default function PontuaDetectTimeView(props: PontuaDetectTimeViewProps) {
  return <NativeView {...props} />;
}
