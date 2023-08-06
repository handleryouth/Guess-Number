import React from "react";
import { NavigationStack } from "@src/navigation";
import { Layout } from "@src/components";
import { FontProvider } from "@src/font";

export default function App() {
  return (
    <FontProvider>
      <Layout>
        <NavigationStack />
      </Layout>
    </FontProvider>
  );
}
