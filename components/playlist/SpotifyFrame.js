function SpotifyFrame({ playlistUrl }) {
  return (
    <iframe
      src={playlistUrl}
      className="w-[250px] h-[300px] md:w-[500px] md:h-[300px] 2xl:w-[500px] 2xl:h-[600px]"
      frameBorder="0"
      allowtransparency="true"
      allow="encrypted-media"
    ></iframe>
  );
}

export default SpotifyFrame;
