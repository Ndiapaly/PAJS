async function parallelCalls(urls) {
  try {
    const fetchPromises = urls.map((url) =>
      fetch(url).then((response) => response.json())
    );
    const results = await Promise.all(fetchPromises);
    console.log("Réponses des appels parallèles:", results);
  } catch (error) {
    console.error("Une erreur est survenue lors des appels parallèles:", error);
  }
}

// Exemple d'utilisation
const urls = [
  "https://jsonplaceholder.typicode.com/posts/1",
  "https://jsonplaceholder.typicode.com/posts/2",
  "https://jsonplaceholder.typicode.com/posts/3",
];
parallelCalls(urls);
