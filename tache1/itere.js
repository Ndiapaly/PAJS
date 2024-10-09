async function iterateWithAsyncAwait(values) {
  for (const value of values) {
    console.log(value);
    await new Promise((resolve) => setTimeout(resolve, 1000)); // Délai de 1 seconde
  }
}

// Exemple d'utilisation
iterateWithAsyncAwait([1, 2, 3, 4, 5]);
