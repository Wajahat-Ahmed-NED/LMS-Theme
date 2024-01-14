let auth = document.getElementById("auth");

if (localStorage.getItem("role") !== "trainee") {
  auth.style.display = "none";
}
