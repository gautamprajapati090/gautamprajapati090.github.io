import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, LogBox, ActivityIndicator } from 'react-native';
import { Provider } from 'react-redux'
import { FirebaseProvider, store } from './redux';
import AppContainer from './src/navigation/AppNavigator';
import { Asset } from 'expo-asset';
import * as Font from 'expo-font';
import * as Updates from 'expo-updates';
import { useEffect, useState } from 'react';
import { FirebaseConfig } from './src/common/FirebaseConfig';
import { NativeBaseProvider } from 'native-base';


export default function App() {

  const [assetsLoaded, setAssetsLoaded] = useState(false);
  const [updateMsg, setUpdateMsg] = useState('');

  useEffect(() => {
    LogBox.ignoreAllLogs(true); //Hide all warning notifications on front-end
    LogBox.ignoreLogs(['Warning: ...']); //Hide warnings
    LogBox.ignoreLogs(['Setting a timer']);
    LogBox.ignoreLogs(['It appears that']);
    onLoad();
  }, []);

  const _loadResourcesAsync = async () => {
    return Promise.all([
      // Asset.loadAsync([
      //   require('./assets/images/background.jpg'),
      //   require('./assets/images/logo165x90white.png'),
      //   require('./assets/images/bg.jpg'),
      //   require('./assets/images/intro.jpg'),
      // ]),
      Font.loadAsync({
        'Sofia-Pro-Bold': require('./assets/fonts/Sofia-Pro-Bold.otf'),
        'Sofia-Pro-SemiBold': require('./assets/fonts/Sofia-Pro-Semi-Bold.otf'),
        'Sofia-Pro-Regular': require('./assets/fonts/Sofia-Pro-Regular.otf'),
        'Sofia-Pro-Medium': require('./assets/fonts/Sofia-Pro-Medium.otf'),
        'Sofia-Pro-Light': require('./assets/fonts/Sofia-Pro-Light.otf'),
      }),
    ]);
  };

  const onLoad = async () => {
    const loadingMsg = 'Loading';
    if (__DEV__) {
      setUpdateMsg(loadingMsg + '...');
      _loadResourcesAsync().then(() => setAssetsLoaded(true));

    } else {
      try {
        setUpdateMsg(loadingMsg + '.');
        Updates.checkForUpdateAsync().then((update) => {
          if (update.isAvailable) {
            setUpdateMsg(loadingMsg + '..');
            Updates.fetchUpdateAsync().then((fetchResult) => {
              if (fetchResult.isNew) {
                Updates.reloadAsync().catch(() => {
                  setUpdateMsg(loadingMsg + '...');
                  _loadResourcesAsync().then(() => setAssetsLoaded(true));
                })
              } else {
                setUpdateMsg(loadingMsg + '...');
                _loadResourcesAsync().then(() => setAssetsLoaded(true));
              }
            }).catch((error) => {
              setUpdateMsg(loadingMsg + '...');
              _loadResourcesAsync().then(() => setAssetsLoaded(true));
            });
          } else {
            setUpdateMsg(loadingMsg + '...');
            _loadResourcesAsync().then(() => setAssetsLoaded(true));
          }
        }).catch(error => {
          setUpdateMsg(loadingMsg + '...');
          _loadResourcesAsync().then(() => setAssetsLoaded(true));
        });
      } catch (error) {
        setUpdateMsg(loadingMsg + '...');
        _loadResourcesAsync().then(() => setAssetsLoaded(true));
      }
    }
  }


  return (
    assetsLoaded ?
      <Provider store={store}>
        <FirebaseProvider config={FirebaseConfig}>
          {/* <View style={styles.container}>
          <Text>Open up App.js to start working on your app!</Text>
          <StatusBar style="auto" />
        </View> */}
          <NativeBaseProvider>
            <AppContainer />
          </NativeBaseProvider>
        </FirebaseProvider>
      </Provider>
      :
      <View style={styles.container}>
        <ActivityIndicator />
        <Text style={{ paddingBottom: 100 }}>{updateMsg}</Text>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
