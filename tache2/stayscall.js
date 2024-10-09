async function awaitCall() {
  // Simuler l'obtention de données à partir d'une API
  const data = await new Promise((resolve) =>
    setTimeout(() => resolve("Données de l'API"), 2000)
  );
  console.log(data);
}

// Exemple d'utilisation
awaitCall();
