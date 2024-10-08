import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './navigation/AppNavigator';
export default function App() {
    return (
        <NavigationContainer independent={true}>
            <AppNavigator />
        </NavigationContainer>

    );
}
