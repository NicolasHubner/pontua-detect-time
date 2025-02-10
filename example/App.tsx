import {
  isAutoDateTimeEnabled,
  isAutoTimeZoneEnabled,
} from "pontua-detect-time";
import { Text, View } from "react-native";

export default function App() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Hello World</Text>
      <Text>isAutoDateTimeEnabled</Text>
      <Text>{isAutoDateTimeEnabled().toString()}</Text>
      <Text>isAutoTimeZoneEnabled</Text>
      <Text>{isAutoTimeZoneEnabled().toString()}</Text>
    </View>
  );
}
