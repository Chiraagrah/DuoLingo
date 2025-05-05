"use client";

import dynamic from "next/dynamic";

// ✅ This dynamic import is now in a client component — allowed!
const App = dynamic(() => import("./app"), { ssr: false });

const ClientWrapper = () => {
  return <App />;
};

export default ClientWrapper;
