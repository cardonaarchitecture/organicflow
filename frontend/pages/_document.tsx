/**
 * Custom Document for Next.js application.
 * This component is used to modify the default HTML structure of the application.
 * It includes the favicon, description meta tag, and other necessary elements.
 *
 * @extends Document
 */
import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'

  /**
   * Static method to get initial props for the Document component.
   * This method is called server-side during page rendering and client-side when navigating to a new page.
   * It fetches the initial props for the Document component.
   *
   * @param {DocumentContext} ctx - The Document context object.
   * @returns {Promise<DocumentProps>} - The initial props for the Document component.
   */
class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  /**
   * Render method for the Document component.
   * This method is called on the server and client-side to generate the HTML markup for the Document component.
   * It includes the favicon, description meta tag, and the Main and NextScript components.
   *
   * @returns {JSX.Element} - The JSX element representing the Document component.
   */
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta name="description" content="OrganicFlow - AI-powered organic design tool" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument