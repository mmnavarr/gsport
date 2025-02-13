import React from 'react';
import { Switch, Route } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@ui-kit/components/ui/toaster";

function Router() {
  return (
    <Switch>
      <Route path="/" component={() => <div>Welcome to the Web App!</div>} />
      <Route>404 - Not Found</Route>
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
      <Toaster />
    </QueryClientProvider>
  );
}

export default App; 