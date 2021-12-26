import SpotifyFrame from "../playlist/SpotifyFrame";

function Playlist() {
  const playlistUrls = [
    "https://open.spotify.com/embed/playlist/7AhTBC120ArcSDvf6SEilz",
    "https://open.spotify.com/embed/playlist/2oQ6FpFSi4SojUGpEYCztc",
    "https://open.spotify.com/embed/playlist/62dCLYuHCNRMeGXfz6Om8e",
  ];

  return (
    <div className="flex flex-col space-y-10 lg:flex-row lg:min-h-screen justify-between lg:justify-around items-center py-36 lg:py-24 lg:pt-0">
      {playlistUrls.map((url, index) => {
        return <SpotifyFrame key={index} playlistUrl={url} />;
      })}
    </div>
  );
}

export default Playlist;
