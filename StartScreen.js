import React from 'react';
import { View, Button } from 'react-native';

const StartScreen = () => {
    return (
        <View>
            <Button
                onPress={onPressLearnMore}
                title="Learn More"
                color="#841584"
                accessibilityLabel="Learn more about this purple button"
            />
        </View>
    );
};

export default StartScreen;