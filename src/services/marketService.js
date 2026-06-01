export function loadCategories() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { name: "Gaming" },
        { name: "Music" },
        { name: "Travel" },
        { name: "Basketball" },
        { name: "Coding" },
      ]);
    }, 2000);
  });
}

