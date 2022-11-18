import MyTabs from "./HomeComponents/MyTabs";
import { NativeBaseProvider } from "native-base";

export default function App() {
  return (
    <NativeBaseProvider>
      <MyTabs />
    </NativeBaseProvider>
  );
}
