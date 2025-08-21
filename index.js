document.addEventListener("DOMContentLoaded", function () {
  const items = document.querySelectorAll(".search-item");
  const searchbox = document.getElementById("search-box");

  searchbox.addEventListener("input", function () {
    const value = searchbox.value.trim().toLowerCase();
    let found = false;
    if (value === "") {
      items.forEach((item) => {
        item.style.setProperty("display", "block", "important");
      });
      document.getElementById("messege").textContent = "";
      return;
    }
    items.forEach((item) => {
      const text = item.textContent.trim().toLowerCase();
      if (text.includes(value) && value !== "") {
        item.style.setProperty("display", "block", "important");
        found = true;
      } else {
        item.style.setProperty("display", "none", "important");
      }
    });

    if (!found && value !== "") {
      document.getElementById("messege").textContent = "نتیجه ایی یافت نشد !";
    } else {
      document.getElementById("messege").textContent = "";
    }
  });
});
