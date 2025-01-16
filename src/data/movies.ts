export async function loadMovies() {
    const response = await fetch("https://gist.githubusercontent.com/LuizOliveir4/628367dc34f5031618a2c541f11fc37c/raw/48144cc74064e47d2d83fc55262223f92c0f5ddb/movies.json");
    const movies = await response.json();

    return movies
}