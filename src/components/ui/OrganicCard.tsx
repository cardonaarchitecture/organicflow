/**
 * A React functional component that represents an organic card.
 *
 * @param props - The properties of the organic card.
 * @param props.title - The title of the organic card.
 * @param props.content - The content of the organic card.
 *
 * @returns - A React element representing the organic card.
 */
import React from 'react'

interface OrganicCardProps {
  /** The title of the organic card. */
  title: string
  /** The content of the organic card. */
  content: string
}

export default function OrganicCard({ title, content }: OrganicCardProps) {
  return (
    <div className="bg-gradient-to-br from-green-100 to-blue-100 rounded-3xl p-6 shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105">
      <h2 className="text-2xl font-bold mb-4 text-green-800">{title}</h2>
      <p className="text-blue-800">{content}</p>
    </div>
  )
}