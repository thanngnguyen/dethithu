const namee = document.getElementsByName("Fullname")[0];
const image = document.getElementsByName("Image")[0];

function check() {
  let n = namee.value.trim();
  let i = image.value.trim();

  if (!n || !i) {
    alert("Ban can dien day du thong tin");
    return;
  }
  if (!isValidNumber(i)) {
    alert("Ban nhap sai dinh dang. Moi nhap lai!");
    return;
  } else {
    alert("Nhap thanh cong!!!");
    return;
  }
}
function isValidNumber(value) {
  const regex = /^[0-9]+$/;
  return regex.test(value);
}
