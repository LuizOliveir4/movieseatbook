export async function loadMovies() {
    const response = await fetch("https://luizoliveir4.github.io/movieseatbookingapi/movies.json");
    const movies = await response.json();

    return movies
}