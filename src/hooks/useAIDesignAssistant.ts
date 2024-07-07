import { useState } from 'react';

interface AIDesignResponse {
  suggestion: string;
  error: string | null;
}

/**
 * A custom React hook for interacting with an AI design assistant.
 *
 * @returns An object containing the `getDesignSuggestion` function, `isLoading` boolean, and `result` object.
 */
export function useAIDesignAssistant() {
  /**
   * A boolean indicating whether the AI assistant is currently loading a suggestion.
   */
  const [isLoading, setIsLoading] = useState(false);

  /**
   * An object containing the AI suggestion and any error encountered during the request.
   */
  const [result, setResult] = useState<AIDesignResponse>({
    suggestion: '',
    error: null,
  });

  /**
   * Fetches a design suggestion from the AI assistant based on the provided prompt.
   *
   * @param prompt - The user's prompt for the AI assistant.
   * @returns A Promise that resolves when the suggestion is received or rejects if an error occurs.
   */
  const getDesignSuggestion = async (prompt: string) => {
    setIsLoading(true);
    try {
      const response = await fetch('/api/groq/design-assist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: [{ role: 'user', content: prompt }] }),
      });
      const data = await response.json();
      setResult({ suggestion: data.choices[0].message.content, error: null });
    } catch (error) {
      setResult({ suggestion: '', error: 'Failed to get AI suggestion' });
    } finally {
      setIsLoading(false);
    }
  };

  return { getDesignSuggestion, isLoading, result };
}
