async function concurrentRequests() {
  const apiCall1 = new Promise((resolve) =>
    setTimeout(() => resolve("Données de l'API 1"), 2000)
  );
  const apiCall2 = new Promise((resolve) =>
    setTimeout(() => resolve("Données de l'API 2"), 3000)
  );

  try {
    const results = await Promise.all([apiCall1, apiCall2]);
    console.log("Résultats combinés:", results);
  } catch (error) {
    console.error("Une erreur est survenue lors des requêtes:", error);
  }
}

// Exemple d'utilisation
concurrentRequests();
