import type { AppProps } from 'next/app'
// 1. Import `NextUIProvider` component
import {NextUIProvider} from "@nextui-org/react";
import { useEffect } from 'react'
import { useProjectStore } from '@/utils/state/useProjectStore'
import '../styles/globals.css'


/**
 * Renders the main application component with the provided props within a ThemeProvider.
 *
 * @param {AppProps} Component - The component to be rendered within the application.
 * @param {AppProps} pageProps - The props passed to the component.
 * @return {JSX.Element} The wrapped component with the ThemeProvider.
 */
function MyApp({ Component, pageProps }: AppProps) {
    const fetchProjects = useProjectStore(state => state.fetchProjects)

    useEffect(() => {
        fetchProjects()
    }, [fetchProjects])

    // 2. Use NextUIProvider's ThemeProvider to set your desired theme
    return (
        <NextUIProvider>
            <Component {...pageProps} />
        </NextUIProvider>
    );
}

export default MyApp
