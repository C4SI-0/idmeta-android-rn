"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.startIdmetaFlow = exports.default = void 0;
var _reactNative = require("react-native");
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
// Extract the native module
const {
  IdmetaAndroidRnModule
} = _reactNative.NativeModules;

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
  return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      margin: 20
    }
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Text, null, "Start the IDMeta Flow"), /*#__PURE__*/_react.default.createElement(_reactNative.Button, {
    title: "Start Flow",
    onPress: startFlow
  }));
};

// Export the component for use in the host app
var _default = exports.default = StartIdmetaFlowButton;
const startIdmetaFlow = (flowId, userToken) => {
  IdmetaModule.startIdmetaFlow(flowId, userToken);
};
exports.startIdmetaFlow = startIdmetaFlow;
//# sourceMappingURL=index.js.map