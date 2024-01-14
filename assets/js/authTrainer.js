let auth = document.getElementById("auth");

if (localStorage.getItem("role") !== "trainer") {
  auth.style.display = "none";
}
