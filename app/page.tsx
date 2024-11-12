async function Home() {
  const response = await fetch("https://jsonplaceholder.typicode.com/albums");
  if (!response.ok) {
    throw new Error("Failed to fetch data from the API");
  }

  const albums = await response.json();

  return (
    <div className="grid min-h-screen grid-rows-[20px_1fr_20px] items-center justify-items-center gap-16 p-8 pb-20 sm:p-20">
      {albums.map((album: { id: number; title: string }) => (
        <div key={album.id} className="text-center">
          <h2 className="h1-bold font-gellixItalic">{album.title}</h2>
          <p className="font-gellixMedium">{album.id}</p>
        </div>
      ))}
    </div>
  );
}

export default Home;
