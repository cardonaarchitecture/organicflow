/**
 * Import custom matchers from '@testing-library/jest-dom' for use in Jest tests.
 * This library provides a set of custom jest matchers that help make your tests more readable and maintainable.
 * 
 * @example
 * import '@testing-library/jest-dom';
 * 
 * test('renders learn react link', () => {
 *   render(<App />);
 *   const linkElement = screen.getByText(/learn react/i);
 *   expect(linkElement).toBeInTheDocument();
 * });
 * 
 * @see {@link https://github.com/testing-library/jest-dom} for more information.
 */
import '@testing-library/jest-dom';

// Add any global test setup here