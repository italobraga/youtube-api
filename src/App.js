import React from "react";
import "./App.css";
import "materialize-css/dist/css/materialize.min.css";
import FetchPlaylist from "./components/FetchPlaylist";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

const queryClient = new QueryClient()

const Application = () => {
  return (
      <div className="center">
        <FetchPlaylist />
        <ReactQueryDevtools initialIsOpen={false} position={'bottom-right'}/>
      </div>
  );
}

export default function App(){
  return(<QueryClientProvider client={queryClient} contextSharing={true}>
        <Application/>
    </QueryClientProvider>
  );
}
