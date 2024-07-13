import type { NextPage } from 'next'
import Head from 'next/head'
import ImprovedOrganicFlowUI from '@/components/ImprovedOrganicFlowUI'


/**
 * Displays the home page with the OrganicFlowUI component.
 * Serves as the home page of the application.
 */
const Home: NextPage = () => {
    return (
        <div>
            <Head>
                <title>W.A — ARCHITECT</title>
                <meta name="description" content="Organic architectural designs" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <ImprovedOrganicFlowUI />
        </div>
    )
}

export default Home