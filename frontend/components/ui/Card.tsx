/**
 * A React functional component that represents an organic card.
 *
 * @remarks
 * This component is used to display a card with a gradient background, rounded corners, padding, shadow, and hover effects.
 *
 * @param props - The properties of the organic card.
 * @param props.children - The content of the organic card.
 * @param props.className - An optional CSS class name to apply to the organic card.
 *
 * @returns - A React element representing the organic card.
 *
 * @example
 * ```tsx
 * <OrganicCard>
 *   <h2>Card Title</h2>
 *   <p>Card Content</p>
 * </OrganicCard>
 * ```
 */

import React, { ReactNode } from 'react'

interface CardProps {
  children: ReactNode;
  className?: string;
}

/**
 * Renders an organic card component with a gradient background, rounded corners, padding, shadow, and hover effects.
 *
 * @param {CardProps} props - The properties of the organic card.
 * @param {ReactNode} props.children - The content of the organic card.
 * @param {string} [props.className=''] - An optional CSS class name to apply to the organic card.
 * @return {JSX.Element} The organic card component.
 */
export function Card({ children, className = '' }: CardProps) {
  return (
    <div className={`bg-gradient-to-br from-green-100 to-blue-100 rounded-3xl p-6 shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 ${className}`}>
      {children}
    </div>
  )
}