// Fetch your GitHub profile info dynamically
fetch("https://api.github.com/users/Nubsh0t")
  .then((res) => res.json())
  .then((data) => {
    document.getElementById("avatar").src = data.avatar_url;
    document.getElementById("name").textContent = data.name || "Nubsh0t";
    document.getElementById("bio").textContent =
      data.bio || "Developer | Tech Enthusiast";
  })
  .catch((err) => console.error("Error loading GitHub data:", err));
