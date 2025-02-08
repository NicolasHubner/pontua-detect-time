import * as React from 'react';

import { PontuaDetectTimeViewProps } from './PontuaDetectTime.types';

export default function PontuaDetectTimeView(props: PontuaDetectTimeViewProps) {
  return (
    <div>
      <iframe
        style={{ flex: 1 }}
        src={props.url}
        onLoad={() => props.onLoad({ nativeEvent: { url: props.url } })}
      />
    </div>
  );
}
