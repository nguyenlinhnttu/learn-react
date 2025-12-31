import { useContext } from 'react';
import {AppContext, AppProvider} from './useContext/AppContext';

function DemoUseContext() {
    return (
        <AppProvider>
            <div>
                <h1>DemoUseContext</h1>
                <ConsumerButton />
                <Content />
            </div>
        </AppProvider>
    )
}

function ConsumerButton() {
    const appContext = useContext(AppContext);

    return (
        <button onClick={appContext.toggleTheme}>Switch Theme</button>
    );
}

function Content() {
    const appContext = useContext(AppContext);

    return <div>Content : {appContext.theme}</div>;
}

export default DemoUseContext;