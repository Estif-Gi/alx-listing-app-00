import React from "react";
import { PropertyProps } from "@/interfaces";

const PropertyCard: React.FC<{ property: PropertyProps }> = ({ property }) => {
  return (
    <div className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition">
      <img src={property.image} alt={property.name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="font-semibold text-lg">{property.name}</h3>
        <p className="text-gray-500">{property.address.city}, {property.address.country}</p>
        <p className="mt-2 font-bold">${property.price} / night</p>
        <p className="text-yellow-500">⭐ {property.rating}</p>
      </div>
    </div>
  );
};

export default PropertyCard;
