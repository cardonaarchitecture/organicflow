import { useState } from 'react';

interface Design {
  color: string;
  position: [number, number, number];
}

/**
 * A custom React hook for interacting with an AI design assistant.
 *
 * @returns An object containing functions and state related to the AI design assistant.
 */
export function useAIDesignAssistant() {
  /**
   * State variable to track if the design generation is in progress.
   */
  const [isLoading, setIsLoading] = useState(false);

  /**
   * State variable to store the result of the design generation.
   * Contains the generated design or an error message.
   */
  const [design, setDesign] = useState<Design | null>(null);
  const [error, setError] = useState<string | null>(null);

  /**
   * Function to generate a design using the AI design assistant.
   *
   * 1. Sets isLoading state to true and clears any existing error state.
   * 2. Makes a POST request to the design assistant API endpoint.
   * 3. If the response is not successful, throws an error.
   * 4. If the response contains an error, throws an error.
   * 5. Updates the design state with the generated design.
   * 6. If an error occurs, updates the error state with the error message.
   * 7. Finally, sets isLoading state to false.
   */
  const generateDesign = async () => {
    setIsLoading(true);
    setError(null);

    try {
      // 2. Make the POST request to the design assistant API endpoint
      const response = await fetch('/api/groq/design-assist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'generate_design' }),
      });

      // 3. If the response is not successful, throw an error
      if (!response.ok) {
        throw new Error('Failed to generate design');
      }

      // 4. Parse the response JSON
      const data = await response.json();

      // 5. If the response contains an error, throw an error
      if (data.error) {
        throw new Error(data.error);
      }

      // 6. Update the design state with the generated design
      setDesign(data.design);
    } catch (err) {
      // 7. If an error occurs, update the error state with the error message
      setError(err instanceof Error ? err.message : 'An unexpected error occurred');
      setDesign(null);

    } finally {
      // 8. Finally, set isLoading state to false
      setIsLoading(false);
    }
  };

  /**
   * Returns an object containing the generateDesign function, isLoading state,
   * and the design and error properties from the result state.
   */
  return { generateDesign, isLoading, design, error };
}