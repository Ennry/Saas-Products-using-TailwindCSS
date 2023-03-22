const followBtns = document.querySelectorAll(".follow-btn");

followBtns.forEach((btn) => {
btn.style.fontWeight = "bold";
let isFollowing = false;
btn.addEventListener("click", () => {
if (isFollowing) {
btn.innerHTML = '<i class="fa-solid fa-plus fa-sm" style="color: #ffffff;"></i> Follow';
isFollowing = false;
btn.style.color = 'white';
btn.style.backgroundColor = '#213c8b';
} else {
isFollowing = true;
btn.innerHTML = '<i class="fa-solid fa-check" style="color: #213c8b;"></i> Following';
btn.style.color = '#213c8b';
btn.style.backgroundColor = 'transparent';
}
});
});