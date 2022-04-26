// Bai 1
// khối 1
// khối 2
// khối 3

function getEle(id) {
  return document.getElementById(id);
}

function manager_core() {
  var core1 = getEle("core_1").value; // đầu vào điểm 1
  var core2 = getEle("core_2").value; //đầu vào điểm 2
  var core3 = getEle("core_3").value; //đầu vào điểm 3
  var diemchuan = getEle("diemChuan").value; //đầu vào điểm chuẩn

  core1 = parseInt(core1); //đổi sang kiểu int
  core2 = parseInt(core2);
  core3 = parseInt(core3);
  diemchuan = parseInt(diemchuan);

  var kv = getEle("kv").value; //lấy giá trị option value trả về của thẻ select
  kv = parseInt(kv); //đổi giá trị sang số

  //   kv0 = 0;
  //   kv1 = 2;
  //   kv2 = 1;
  //   kv3 = 0.5;

  var dt = getEle("dt").value; //lấy giá trị option value trả về của thẻ select
  dt = parseInt(dt); //đổi giá trị sang số

  //   dt0 = 0;
  //   dt1 = 2.5;
  //   dt2 = 1.5;
  //   dt3 = 1;

  // tính tổng điểm
  var tong = core1 + core2 + core3;
  //   tinh diem uu tien
  tong = tong + kv + dt;
  var kq; // biến đầu ra
  //   so sánh điểm chuẩn để biết đậu hay rớt
  if (tong >= diemchuan) {
    kq = "Bạn đã đạt điểm";
  } else {
    kq = "Bạn đã trượt";
  }
  getEle("kq").innerHTML = "Tổng điểm là " + tong + " " + kq; // xuất kết quả ra màn hình
}

// bài2
// khối 1 đầu vào
// khối 2 xử lý
// khối 3 đầu ra

// đầu vào cố định
const _50kw1 = 500;
const _50kw2 = 650;
const _100kw = 850;
const _150kw = 1100;
const other = 1300;

function tinhtiendien(sokw, tienkw) { //hàm tính tiền điện
  var kq1 = 0;
  kq1 = sokw * tienkw;
  return kq1;
}
getEle("tinhtien").onclick = function () {
  var ten = getEle("ten").value; // đầu vào tên
  var kwh = getEle("kww").value; //đầu vào só kw
  var tongtien;

  kwh = parseInt(kwh); // ép kiểu
  // tính tiền điện
  if (kwh > 0 && kwh <= 50) { //so sánh trong lộ trình tính tiền điện
    tongtien = tinhtiendien(kwh, _50kw1); //gán tông = hàm tính tiền điện 
  } else if (kwh > 50 && kwh <= 100) {
    tongtien = tinhtiendien(kwh, _50kw2);
  } else if (kwh > 100 && kwh <= 200) {
    tongtien = tinhtiendien(kwh, _100kw);
  } else if (kwh > 200 && kwh <= 350) {
    tongtien = tinhtiendien(kwh, _150kw);
  } else if (kwh > 350) {
    tongtien = tinhtiendien(kwh, other);
  }
  getEle("kq2").innerHTML = "Họ tên: " + ten + " Tiền điện: " + tongtien + " VNĐ"; // xuất ra kết quả
};
