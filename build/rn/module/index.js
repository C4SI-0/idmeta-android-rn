import { NativeModules } from 'react-native';
import React from 'react';
import { Button, View, Text } from 'react-native';

// Extract the native module
const {
  IdmetaAndroidRnModule
} = NativeModules;

// Define a TypeScript interface for the module (optional but recommended)

// Ensure the module is properly typed
const IdmetaModule = IdmetaAndroidRnModule;

// Create a React component that the host app can use
const StartIdmetaFlowButton = ({
  flowId,
  userToken
}) => {
  const startFlow = () => {
    if (!IdmetaModule) {
      console.warn('IdmetaAndroidRnModule is not defined.');
      return;
    }
    try {
      IdmetaModule.startIdmetaFlow(flowId, userToken);
    } catch (error) {
      console.error('Error starting flow:', error);
    }
  };
  return /*#__PURE__*/React.createElement(View, {
    style: {
      margin: 20
    }
  }, /*#__PURE__*/React.createElement(Text, null, "Start the IDMeta Flow"), /*#__PURE__*/React.createElement(Button, {
    title: "Start Flow",
    onPress: startFlow
  }));
};

// Export the component for use in the host app
export default StartIdmetaFlowButton;
export const startIdmetaFlow = (flowId, userToken) => {
  IdmetaModule.startIdmetaFlow(flowId, userToken);
};
//# sourceMappingURL=index.js.map