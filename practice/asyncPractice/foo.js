const bar = async (movie) => {
    await fetch(`/api/download/${movie}`);
    console.log(`Downloaded: ${movie}`);
};
async function downloadMovies(movies) {
    movies.forEach(bar);
    console.log("Done!");
}

async function asyncDownloadMovies(movies) {
    for (const movie of movies) {
        await fetch(`https://fakestoreapi.com/users/${movie}`);
        console.log(`Downloaded: ${movie}`);
    }
    console.log("Done!");
}

let a = new Array(1, 2, 3, 4, 5, 6);
asyncDownloadMovies(a);
