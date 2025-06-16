'use client';

import React, { useState } from "react";
import { useParams } from "next/navigation"; // Correct hook for Next.js App Router
import VehicleDetails from "../../../../components/VehicleDetails"

const VehicleSlugPage = () => {
  const { slug } = useParams(); // Get dynamic route param

  return (
    <div>
      <VehicleDetails slug={slug} />
    </div>
  );
};

export default VehicleSlugPage;
