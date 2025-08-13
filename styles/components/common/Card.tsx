import React from 'react'
import { CardProps } from "../../../interfaces/index"
const Card: React.FC<CardProps> = ({ title, imageUrl }) => {
  return (
    <div className="border rounded-lg shadow p-4">
      <img src={imageUrl} alt={title} className="w-full h-48 object-cover rounded-md" />
      <h3 className="mt-2 text-lg font-semibold">{title}</h3>
    </div>
  )
}

export default Card
