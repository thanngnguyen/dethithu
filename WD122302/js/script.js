const namee = document.getElementsByName("Fullname")[0];
const r = document.getElementsByName("Rate")[0];

function check() {
  let n = namee.value.trim();
  let r = rate.value.trim();

  if (!n || !r) {
    alert("Ban can dien day du thong tin");
    return;
  }
  if (!isValidNumber(r)) {
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
