async function Home() {
  const response = await fetch('https://jsonplaceholder.typicode.com/albums');
  if (!response.ok) {
    throw new Error("Failed to fetch data from the API");
  }

  const albums = await response.json();

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-black">
      {albums.map((album: {id:number, title:string}) => (
        <div key={album.id} className="text-center">
          <h2 className="text-2xl font-bold">{album.title}</h2>
          <p>{ album.id}</p>
        </div>
      ))}
    </div>
  );
}

export default Home;