import React, { useState } from "react";
import axios from "axios";
import { useQuery } from "react-query";
import DispList from "./DispList";

const FetchPlaylist = () => {
  const [pageToken, setPageToken] = useState();
  const KEY = process.env.REACT_APP_HOST_API_KEY;
  const fetchPlaylist = async (key) => {
      console.log(pageToken)
    const { data } = await axios.get(
      "https://www.googleapis.com/youtube/v3/playlistItems",
      {
        params: {
          part: "snippet",
          playlistId: "PLWieWKZeFoVSLVo0Bn5UdlUdsuz21CXcF",
          key: KEY,
          maxResults: 6,
          pageToken: pageToken,
        },
      }
    );
    return data;
  };
  const { data, isLoading, error } = useQuery(
    ["playlist", pageToken],
    fetchPlaylist,
  );


  return (
    <div className="container">
      <h3>Playlist FlowPodcast</h3>
      {error && <div>Algo saiu errado ...</div>}

      {isLoading ? (
        <div>Aguardando Playlist ...</div>
      ) : (
        <>
          <button
            className="btn"
            onClick={() => setPageToken(data.prevPageToken)}
            disabled={!data.prevPageToken}
          >
            Página Anterior
          </button>
          <button
            className="btn"
            onClick={() => setPageToken(data.nextPageToken)}
            disabled={!data.nextPageToken}
          >
            Próxima Página
          </button>
          <DispList data={data} />
        </>
      )}
    </div>
  );
};

export default FetchPlaylist;
