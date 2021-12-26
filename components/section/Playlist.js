import SpotifyFrame from "../playlist/SpotifyFrame";

function Playlist() {
  const playlistUrls = [
    "https://open.spotify.com/embed/playlist/7AhTBC120ArcSDvf6SEilz",
    "https://open.spotify.com/embed/playlist/2oQ6FpFSi4SojUGpEYCztc",
    "https://open.spotify.com/embed/playlist/62dCLYuHCNRMeGXfz6Om8e",
  ];

  return (
    <div className="flex flex-col space-y-10 2xl:space-y-0 2xl:flex-row min-h-screen justify-between lg:justify-around items-center pt-36 2xl:pt-0">
      {playlistUrls.map((url, index) => {
        return <SpotifyFrame key={index} playlistUrl={url} />;
      })}
    </div>
  );
}

export default Playlist;
