function showMessage() {
    const msg = document.getElementById("message");
    msg.textContent = "✨ Tip: Start solving DSA problems on LeetCode and follow CS Dojo’s playlist daily!";
  }
  function showMessage() {
    const msg = document.getElementById("message");
    msg.textContent =
      "✨ Pro Tip: Choose one playlist and follow it daily. Consistency beats motivation!";
  }
  
  const searchInput = document.getElementById("searchInput");
  searchInput.addEventListener("input", function () {
    const query = this.value.toLowerCase();
    const playlists = document.querySelectorAll(".playlist");
  
    playlists.forEach((playlist) => {
      const title = playlist.querySelector("h3").textContent.toLowerCase();
      if (title.includes(query)) {
        playlist.style.display = "block";
      } else {
        playlist.style.display = "none";
      }
    });
  });
  