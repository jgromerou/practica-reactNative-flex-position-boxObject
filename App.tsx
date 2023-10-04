import { Platform, SafeAreaView } from 'react-native';
import ContadorScreen from './src/screen/ContadorScreen';
import { BoxObjectModelScreen } from './src/screen/BoxObjectModelScreen';
import { DimensionesScreen } from './src/screen/DimensionesScreen';
import PositionScreen from './src/screen/PositionScreen';
import { FlexScreen } from './src/screen/FlexScreen';
import { Tarea1Sceen } from './src/screen/Tarea1Sceen';

export default function App() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#28425b',
        paddingTop: Platform.OS === 'android' ? 24 : 0,
      }}
    >
      {/* <BoxObjectModelScreen /> */}
      {/* <DimensionesScreen /> */}
      {/* <PositionScreen /> */}
      {/* <FlexScreen /> */}
      <Tarea1Sceen />
    </SafeAreaView>
  );
}
