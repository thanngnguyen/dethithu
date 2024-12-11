const namee = document.getElementsByName("Fullname")[0];
const phone = document.getElementsByName("Phone")[0];
const date = document.getElementsByName("Date")[0];

function check() {
  let n = namee.value.trim();
  let p = phone.value.trim();
  let d = date.value.trim();

  if (!n || !p || !d) {
    alert("Bạn chưa nhập đầy đủ thông tin!");
    return;
  }
  if (!isValidPhoneNumber(p)) {
    alert("Bạn nhập sai số điện thoại!");
    return;
  }
  if (!isValidDate(d)) {
    alert("Bạn nhập sai ngày tháng năm!");
    return;
  } else {
    alert("Nhập thành công!");
  }
}

function isValidPhoneNumber(phone) {
  const regex =
    /^(0|\+84)?[-.\s]?\(?[0-9]{3}\)?[-.\s]?[0-9]{3}[-.\s]?[0-9]{3,4}$/; //   //  /^(0|\+84)[0-9]{9}$/; -> cái này là nhập kiểu 0923247342 || +8472857436
  return regex.test(phone);
}

function isValidDate(date) {
  const regex = /^([0-9]{4})-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/;
  if (!regex.test(date)) {
    return false;
  }

  const [year, month, day] = date.split("-").map(Number);
  const d = new Date(year, month - 1, day);
  return (
    d.getFullYear() === year &&
    d.getMonth() + 1 === month &&
    d.getDate() === day
  );
}
