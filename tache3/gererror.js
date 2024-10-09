async function awaitCallWithErrorHandling() {
  try {
    // Simuler l'obtention de données à partir d'une API
    const data = await new Promise((resolve, reject) =>
      setTimeout(() => reject(new Error("Erreur de l'API")), 2000)
    );
    console.log(data);
  } catch (error) {
    console.error("Une erreur est survenue :", error.message);
  }
}

// Exemple d'utilisation
awaitCallWithErrorHandling();
