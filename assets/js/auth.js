let auth = document.getElementById("auth");

if (localStorage.getItem("role") !== "admin") {
  auth.style.display = "none";
}
