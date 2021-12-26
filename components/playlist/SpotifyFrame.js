function SpotifyFrame({ playlistUrl }) {
  return (
    <iframe
      src={playlistUrl}
      className="w-[250px] h-[300px] lg:w-[500px] lg:h-[600px]"
      frameBorder="0"
      allowtransparency="true"
      allow="encrypted-media"
    ></iframe>
  );
}

export default SpotifyFrame;
