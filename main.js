/**
 * Bài tập JS buổi 5 : Hàm
 */
// Bài 1 : Quản lý tuyển sinh

/**
 * Khối 1 : Inputs
 * diemMon1, diemMon2, diemMon3
 * khuVuc, doiTuong
 * diemChuan
 * 
 * 
 * Khối 2 : Xử lý
 * B1 : Tạo biến lấy kết quả từ form
 * B2 : Tính điểm ưu tiên theo khu vực
 *  Nếu khuVuc = A => diemKV = 2
 *  Ngược lại Nếu khuVuc = B => diemKV = 1
 *  Ngược lại => diemKV = 0.5 
 * 
 * B3 : Tính điểm ưu tiên theo đối tượng
 *  doituongUT = 1 => diemDoituongUT = 2.5
 * doituongUT = 2 => diemDoituongUT = 1.5
 * doituongUT = 3 => diemDoituongUT = 1
 * 
 * B4 : Tính tongDiem = diem3mon + diemKV + điemoituongUT
 * B5 : Xét diemMon1 = 0 || diemMon2 = 0 || diemMon3 0 => Không đỗ
 * B6 : So tongDiem với diemChuan
 *  Nếu tongDiem >= diemChuan => Đỗ đại học
 * Ngược lại => Không đỗ 
 * 
 * Khối 3 : Outputs
 * 
 * Xuất kết quả tuyển sinh
 * 
 */

function tuyenSinh(){

    var diemMon1 = parseFloat(document.getElementById("inputMon1").value);
    var diemMon2 = parseFloat(document.getElementById("inputMon2").value);
    var diemMon3 = parseFloat(document.getElementById("inputMon3").value);

    // Tính điểm ưu tiên theo khu vực
    
    var khuVuc = document.getElementById("inputKhuvuc").value;
    var diemKV = 0;
    if (khuVuc == "A" ){
        diemKV = 2;
    }else if(khuVuc == "B"){
        diemKV = 1;
    }else if(khuVuc == "C"){
        diemKV = 0.5;
    }else{
        diemKV = 0;
    }

    // Tính điểm ưu tiên theo đối tượng

    var doituongUT = document.getElementById("doituongUutien").value;
    diemDoituongUT = 0;
    switch (doituongUT){
        case "1":
            diemDoituongUT = 2.5;
            break;
        case "2":
            diemDoituongUT = 1.5;
            break;
        case "3":
            diemDoituongUT = 1;
            break;
        default : diemDoituongUT = 0;
    }
    var diem3mon = diemMon1 + diemMon2 + diemMon3;
    var tongDiem = diem3mon + diemKV + diemDoituongUT;
    var diemChuan = parseFloat(document.getElementById("inputDiemchuan").value);
    if(diemMon1 == 0 || diemMon2 == 0 || diemMon3 == 0){
        document.getElementById("txtThongbao").innerHTML = "BẠn không đỗ đại học vì có môn điểm liệt";
    }else if(tongDiem >= diemChuan){
        document.getElementById("txtThongbao").innerHTML = "Bạn đã đỗ đại học với tổng điểm : " + tongDiem;
    }else{
        document.getElementById("txtThongbao").innerHTML = "Bạn đã thi trược!";
    }
}

document.getElementById("btnXuat").onclick = tuyenSinh;

// Bài 2 : Tính tiền điện

/**
 * Khối 1 : Inputs
 * tenKH, soKW
 * 
 * 
 * Khối 2 : Xử lý
 * B1 : Tạo biến lấy kết quả từ form
 * 
 * B2 : Tính tiền điện theo số KW tiêu thụ
 * Nếu 0 < soKW và soKW <= 50) => tongTien = soKW * 500;
    Nếu 50 < soKW và soKW <= 100) => tongTien = (50 * 500) + (soKW - 50) * 650;
        Nếu 100 < soKW && soKW <= 200) => tongTien = (50 * 500) + (50 * 650) + (soKW - 100) * 850;
            Nếu 200 < soKW && soKW <= 350 => tongTien = (50 * 500) + (50 * 650) + (100 * 850) + (soKW - 200) * 1100;
    Ngược lại
        tongTien = (50 * 500) + (50 * 650) + (100 * 850) + (150 * 1100) + (soKW - 350) * 1300;
 * 
 * 
 * Khối 3 : Outputs
 * 
 * Xuất ra hóa đơn tiền điện
 * 
 */

 function tinhTiendien(){
    var tenKH = document.getElementById("txtTenKH").value;
    var soKW = parseInt(document.getElementById("inputSoKW").value);
    var tongTien = 0;

    if (0 < soKW && soKW <= 50){
        tongTien = soKW * 500;
        document.getElementById("txtThongbaotd").innerHTML = tenKH +" Tổng tiền điện :  " + tongTien;
    }else if(50 < soKW && soKW <= 100){
        tongTien = (50 * 500) + (soKW - 50) * 650;
        document.getElementById("txtThongbaotd").innerHTML = tenKH +" Tổng tiền điện : " + tongTien;
    }else if(100 < soKW && soKW <= 200){
        tongTien = (50 * 500) + (50 * 650) + (soKW - 100) * 850;
        document.getElementById("txtThongbaotd").innerHTML = tenKH +" Tổng tiền điện :  "+ tongTien;
    }else if(200 < soKW && soKW <= 350){
        tongTien = (50 * 500) + (50 * 650) + (100 * 850) + (soKW - 200) * 1100;
        document.getElementById("txtThongbaotd").innerHTML = tenKH +" Tổng tiền điện :  "+ tongTien;
    }else if(soKW > 350){
        tongTien = (50 * 500) + (50 * 650) + (100 * 850) + (150 * 1100) + (soKW - 350) * 1300;
        document.getElementById("txtThongbaotd").innerHTML = tenKH +" Tổng tiền điện :  "+ tongTien;
    }
    else{
        document.getElementById("txtThongbaotd").innerHTML = "Số KW không hợp lệ.";
    } 
}   

document.getElementById("btnTinhtd").onclick = tinhTiendien;

// Bài 3 : Tính thuế thu nhập cá nhân

/**
 * Khối 1 : Inputs
 * hoTen, tongTN, soNguoi
 * 
 * 
 * Khối 2 : Xử lý
 * B1 : Tạo biến lấy kết quả từ form
 * 
 * B2 : Tính thu nhập chịu thuế
 * thuNhapCT = tongTN - 4000000 - (soNguoi * 1600000)
 * 
 * B3 : Tính thuế thu nhập
 * Nếu 0 < thuNhapCT và thuNhapCT <= 60000000)
 *  => thueTNCN = (thuNhapCT * 5) / 100;
        Nếu thuNhapCT > 60000000 và thuNhapCT <= 120000000 )
        => thueTNCN = (thuNhapCT * 10) / 100;
            Nếu thuNhapCT > 120000000 và thuNhapCT <= 210000000 )
            => thueTNCN = (thuNhapCT * 15) / 100;
                Nếu thuNhapCT > 210000000 && thuNhapCT <= 384000000 )
                => thueTNCN = (thuNhapCT * 20) / 100;
                    Nếu thuNhapCT > 384000000 && thuNhapCT <= 624000000 
                     => thueTNCN = (thuNhapCT * 25) / 100;
                        Nếu thuNhapCT > 624000000 && thuNhapCT <= 926000000
                        => thueTNCN = (thuNhapCT * 30) / 100;
Ngược lại => thueTNCN = (thuNhapCT * 35) / 100;

 * Khối 3 : Outputs
 * 
 * Xuất kết quả thuế thu nhập
 * 
 */

function tinhThueTNCN(){
    var hoTen = document.getElementById("txtHoten").value;
    var tongTN = parseFloat( document.getElementById("inputTongTN").value);
    var soNguoi = parseInt(document.getElementById("inputSonguoi").value);
    var thuNhapCT = tongTN - 4000000 - (soNguoi * 1600000);
    var thueTNCN = 0;
    
    if(0 < thuNhapCT && thuNhapCT <= 60000000){
        thueTNCN = (thuNhapCT * 5) / 100;
        document.getElementById("txtThongbaothue").innerHTML = hoTen +" Thuế thu nhập  :  "+ new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(thueTNCN);
    }else if(thuNhapCT > 60000000 && thuNhapCT <= 120000000 ){
        thueTNCN = (thuNhapCT * 10) / 100;
        document.getElementById("txtThongbaothue").innerHTML = hoTen +" Thuế thu nhập  :  "+ new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(thueTNCN);
    }
    else if(thuNhapCT > 120000000 && thuNhapCT <= 210000000 ){
        thueTNCN = (thuNhapCT * 15) / 100;
        document.getElementById("txtThongbaothue").innerHTML = hoTen +" Thuế thu nhập  :  "+ new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(thueTNCN);
    }else if(thuNhapCT > 210000000 && thuNhapCT <= 384000000 ){
        thueTNCN = (thuNhapCT * 20) / 100;
        document.getElementById("txtThongbaothue").innerHTML = hoTen +" Thuế thu nhập  :  "+ new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(thueTNCN);
    }else if(thuNhapCT > 384000000 && thuNhapCT <= 624000000 ){
        thueTNCN = (thuNhapCT * 25) / 100;
        document.getElementById("txtThongbaothue").innerHTML = hoTen +" Thuế thu nhập  :  "+ new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(thueTNCN);
    }else if(thuNhapCT > 624000000 && thuNhapCT <= 926000000 ){
        thueTNCN = (thuNhapCT * 30) / 100;
        document.getElementById("txtThongbaothue").innerHTML = hoTen +" Thuế thu nhập  :  "+ new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(thueTNCN);
    }else{
        thueTNCN = (thuNhapCT * 35) / 100;
        document.getElementById("txtThongbaothue").innerHTML = hoTen +" Thuế thu nhập  :  "+ new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(thueTNCN);
    }
}

document.getElementById("btnTinhthueTN").onclick = tinhThueTNCN;

// Bài 4 : Tính tiền cáp

/**
 * Khối 1 : Inputs
 * maKH, loaiKH, soKenhCC, soKN
 * 
 * Khối 2 : Xử lý
 * B1 : Tạo biến lấy kết quả từ form
 * 
 * B2 : Viết hàm kiểm tra khách hàng
 * Nếu loaiKH == 2 => hiển thị input Doanhnghiep, trả kết quả 
 * Nếu loaiKH == 1 => ẩn input Doanhnghiep, trả kết quả 
 * 
 * B3 : TÍnh tiền cáp
 * Gán loaiKH = kiemtraKH();
 * Nếu loaiKH == 1 => tongTiencap = phiDVCBCN + phiHDCN + (soKenhCC * kenhCCCN);
 * Ngược lại
 *  Nếu soKN <=10 => tongTiencap = phiHDDN + phiDVCBDN + (soKenhCC * kenhCCDN);
 *  Ngược lại
 *  =>tongTiencap = phiHDDN + phiDVCBDN + (soKenhCC * kenhCCDN) + (soKN - 10)* 5;
 * 
 * 
 * Khối 3 : Outputs
 * 
 * Xuất tổng tiền cáp
 * 
 */

const phiHDCN = 4.5;
const phiDVCBCN = 20.5;
const kenhCCCN = 7.5;

const phiHDDN = 15;
const phiDVCBDN = 75;
const kenhCCDN = 50;

document.getElementById("Doanhnghiep").style.display = "none";

function kiemTraKH(){
    var loaiKH = parseInt(document.getElementById("inputLoaiKH").value) ;
    if(loaiKH == 2){
        document.getElementById("Doanhnghiep").style.display = "block";
        return loaiKH;
    }else{
        document.getElementById("Doanhnghiep").style.display = "none";
        return loaiKH;
    }
}

function tinhTiencap(){
    var maKH = document.getElementById("txtMaKH").value;
    var soKenhCC = parseInt(document.getElementById("inputSokenh").value);
    var soKN = parseInt(document.getElementById("inputSoketnoi").value);
    var tongTiencap = 0;
    var loaiKH = kiemTraKH();
    if(loaiKH == 1){
        tongTiencap = phiDVCBCN + phiHDCN + (soKenhCC * kenhCCCN);
        document.getElementById("txtTiencap").innerHTML = "Mã khách hàng : " +maKH + " Tổng tiền : " + tongTiencap;
    }else{
        if(soKN <= 10)
        {
            tongTiencap = phiHDDN + phiDVCBDN + (soKenhCC * kenhCCDN);
            document.getElementById("txtTiencap").innerHTML = "Mã khách hàng : " +maKH + " Tổng tiền : " + tongTiencap;
        }else{
            tongTiencap = phiHDDN + phiDVCBDN + (soKenhCC * kenhCCDN) + (soKN - 10)* 5;
            document.getElementById("txtTiencap").innerHTML = "Mã khách hàng : " +maKH + " Tổng tiền : " + tongTiencap;
        }
    }
}

document.getElementById("btnTinhtiencap").onclick = tinhTiencap;