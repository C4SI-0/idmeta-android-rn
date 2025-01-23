import { NativeModules } from 'react-native';
import React from 'react';
import { Button, View, Text } from 'react-native';

// Extract the native module
const { IdmetaAndroidRnModule } = NativeModules;

// Define a TypeScript interface for the module (optional but recommended)
interface IdmetaAndroidRnModuleInterface {
    startIdmetaFlow: (flowId: string, userToken: string) => void;
}

// Ensure the module is properly typed
const IdmetaModule: IdmetaAndroidRnModuleInterface = IdmetaAndroidRnModule;

// Create a React component that the host app can use
const StartIdmetaFlowButton: React.FC<{ flowId: string; userToken: string }> = ({ flowId, userToken }) => {
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


    return (
        <View style={{ margin: 20 }}>
            <Text>Start the IDMeta Flow</Text>
            <Button title="Start Flow" onPress={startFlow} />
        </View>
    );
};

// Export the component for use in the host app
export default StartIdmetaFlowButton;

export const startIdmetaFlow = (flowId: string, userToken: string) => {
    IdmetaModule.startIdmetaFlow(flowId, userToken);
};
