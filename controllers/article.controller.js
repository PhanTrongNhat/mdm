
import article from "../models/article.model.js";
export const findArtitcle = async (req, res) => {
    if (req.query.title) {
      const data = await article.find({ title: { $regex: req.query.title } });
      res.render("article", { baiviet: data });
    } else {
           const data = await article.find();
           res.render("article", { baiviet: data });
    }

};



// // Tạo KeySpace: 
// CREATE KEYSPACE QLSinhVien
// WITH replication = { 
// 'class': 'QUANYSINHVIEN', 
// 'QLSV': 1 };

// CREATE TABLE SINHVIEN (
// MaSV INT, 
// HoTen TEXT, 
// Email TEXT, 
// DiaChi TEXT, 
// PRIMARY KEY (MaSV) 
// );
// CREATE TABLE MONHOC ( 
// MaMH TEXT, 
// TenMH TEXT, 
// SoChi INT, 
// PRIMARY KEY (MaMH) 
// );
// CREATE TABLE SV_MH ( 
// MaSV INT, 
// HoTen TEXT, 
// MaMH TEXT, 
// TenMH TEXT, 
// PRIMARY KEY (MaSV, MaMH) 
// );



// // 1.	Thêm cột NamSinh, CMND vào SINHVIEN
// ALTER TABLE SINHVIEN ADD NamSinh INT, CMND TEXT;
// // 2.	Xóa cột diachi của sinh viên 2
// DELETE DiaChi FROM SINHVIEN WHERE MaSV = 2;
// // 3.	Thêm cột LopTruong = 'x' cho sinh viên 3
// ALTER TABLE SINHVIEN ADD LopTruong TEXT; 
// UPDATE SINHVIEN SET LopTruong = 'x' 
// WHERE MaSV = 3;
// // 4.	Cập nhật địa chỉ của sinh viên 1 và 3 thành 'Tan Binh'
// UPDATE SINHVIEN 
// SET DiaChi = 'Tan Binh'
// WHERE MaSV = 1 and MaSV = 3;
// // 5.	Cho biết email của sinh viên có MaSV = 1
// SELECT Email FROM SINHVIEN WHERE MaSV = 1;
// // 6.	Cho biết tên môn học mà sinh viên 1 và 3 theo học
// SELECT TenMH FROM SV_MH WHERE MaSV = 1 and MaSV = 3;
// // 7.	Cho biết họ tên, mã MH và tên MH của sinh viên có mã > 1
// SELECT HoTen, MaMH, TenMH FROM SV_MH WHERE MaSV > 1;
// // 8.	Cho biết tên MH của sinh viên có HoTen là An
// SELECT TenMH FROM SV_MH WHERE HoTen = 'An';
// // 9.	Cho biết danh sách sinh viên học CSDL
// SELECT MaSV, TenSV FROM SV_MH WHERE TenMH = 'CSDL';
