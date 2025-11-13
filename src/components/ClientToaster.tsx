"use client"; // Bu juda muhim!

import { Toaster } from "react-hot-toast";

export default function ClientToaster() {
  return <Toaster position="top-right" reverseOrder={false} />;
}
