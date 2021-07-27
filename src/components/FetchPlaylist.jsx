import React from "react";
import axios from "axios";
import { useQuery } from "react-query";
import DispList from "./DispList";

const FetchPlaylist = () => {
  const KEY = process.env.REACT_APP_HOST_API_KEY;
  const fetchPlaylist = async () => {
    const { data } = await axios.get(
      "https://www.googleapis.com/youtube/v3/playlistItems",
      {
        params: {
          part: "snippet",
          playlistId: "PLWieWKZeFoVSLVo0Bn5UdlUdsuz21CXcF",
          key: KEY,
        },
      }
    );
    return data;
  };
  const { data, isLoading, error } = useQuery("playlist", fetchPlaylist);
  console.log(isLoading);
  return (
    <div className="container">
        <h3>Playlist FlowPodcast</h3>
      {error && <div>Algo saiu errado ...</div>}

      {isLoading ? (
        <div>Aguardando Playlist ...</div>
      ) : (
        <DispList data={data} />
      )}
    </div>
  );
};

export default FetchPlaylist;
