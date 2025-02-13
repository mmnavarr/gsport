import React from 'react';
import { Switch, Route } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import Showcase from "@/pages/Showcase";
import ButtonsShowcase from "@/pages/components/ButtonsShowcase";
import InputsShowcase from "@/pages/components/InputsShowcase";
import DataDisplayShowcase from "@/pages/components/DataDisplayShowcase";
import OverlaysShowcase from "@/pages/components/OverlaysShowcase";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Showcase} />
      <Route path="/components/buttons" component={ButtonsShowcase} />
      <Route path="/components/inputs" component={InputsShowcase} />
      <Route path="/components/data-display" component={DataDisplayShowcase} />
      <Route path="/components/overlays" component={OverlaysShowcase} />
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
