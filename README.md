# idmeta-android-rn

## Getting started

`$ npm install idmeta-android-rn --save`

### Mostly automatic installation

`$ react-native link idmeta-android-rn`


# idmeta-android-rn

`idmeta-android-rn` is a React Native library integrated with the Idmeta SDK, providing seamless integration and functionality for your React Native applications.

## Installation

Note: "idmeta-android-rn" project is still in development and is tested upto **RN-0.77** version , this is the beta release for testing.
To install the library, run:

```sh
npm install https://github.com/C4SI-0/idmeta-android-rn.git
```

Then do "Yarn Install" for better native linking with the module,

Note: Yarn install is required for now for better automatic installation.

```sh
yarn install
```

## Android Setup

```js

To configure your Android project to use this package, 

Open <host>\android\build.gradle

Add the following code under buildscript.

allprojects {
    repositories {
        maven {
            url uri("../../node_modules/idmeta-android-rn/build/host/outputs/repo")
        }
        maven {
            url "https://storage.googleapis.com/download.flutter.io"
        }
    }
}

```

# Resource Shrinking and Proguard Configuration for Android App

### 1. Enable Proguard in Release Builds

In your `android/app/build.gradle` file, define a variable to enable Proguard in release builds:

```gradle
def enableProguardInReleaseBuilds = true


buildTypes {
    debug {
        signingConfig signingConfigs.debug
    }
    release {
        // Caution! In production, you need to generate your own keystore file.
        // see https://reactnative.dev/docs/signed-apk-android.
        signingConfig signingConfigs.release
        minifyEnabled true
        shrinkResources true
        proguardFiles getDefaultProguardFile("proguard-android.txt"), "proguard-rules.pro"
    }
}


```
Add Proguard Rules

```Proguard Rules


# Keep necessary Flutter-related classes
-keep class io.flutter.** { *; }

# Keep all classes related to Play Core library
-keep class com.google.android.play.core.** { *; }
-keepclassmembers class com.google.android.play.core.** { *; }
-dontwarn com.google.android.play.core.**

# Keep Flutter-specific classes
-keep class io.flutter.app.** { *; }
-keep class io.flutter.plugins.** { *; }
-keep class io.flutter.embedding.** { *; }
-keep class io.flutter.util.** { *; }


# Prevent obfuscation of the Flutter engine and activity classes
-keep class io.flutter.embedding.engine.** { *; }
-keep class io.flutter.embedding.android.FlutterActivity { *; }

# Prevent obfuscation of the Flutter plugin registrant
-keep class io.flutter.plugins.GeneratedPluginRegistrant { *; }

# Keep all method names and classes involved in MethodChannel communication
-keepclassmembers class ** extends io.flutter.plugin.common.MethodChannel$MethodCallHandler {
    public void onMethodCall(io.flutter.plugin.common.MethodCall, io.flutter.plugin.common.MethodChannel$Result);
}
```

### 2. Use packaging options for legacy packaging of jniLibs
```gradle
android {
  packagingOptions {
      jniLibs {
          useLegacyPackaging true
      }
  }
}
```

## Error Building

If you getting error on after build

```js
error: Error: Unable to resolve module idmeta-android-rn from. idmeta-android-rn could not be found within the project or in these directories:

```
```sh
yarn install
```
Do "Yarn Install" and build the app. It will resolve the issue 


## Usage

```js
import React from 'react';
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native';
import StartIdmetaFlowButton from 'idmeta-android-rn';  // Import the module directly

const App = (): React.JSX.Element => {
  const flowId = 'YourFlowId'; // Replace with actual flowId
  const userToken = 'YourUserToken'; // Replace with actual userToken

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={styles.content}>
          <Text style={styles.title}>Start IDMeta Flow</Text>
          <StartIdmetaFlowButton flowId={flowId} userToken={userToken} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 20,
  },
});

export default App;


```




## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---
