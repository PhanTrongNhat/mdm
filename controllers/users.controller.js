import neo4j from "neo4j-driver";
let driver = neo4j.driver(
  "neo4j://localhost:7687",
  neo4j.auth.basic("neo4j", "123456")
);
const session = driver.session();
import tinh from "../models/tinh.models.js";
import huyen from "../models/huyen.model.js";
import xa from "../models/xa.model.js";
import user from "../models/users.models.js";
import TT from "../models/trungtam.model.js";

export const getAll = async (req, res) => {
  // const num_nodes = await session.run("MATCH (n) RETURN n", {});

  // console.log("RESULT", !num_nodes ? 0 : num_nodes.records);
  //  res( !num_nodes ? 0 : num_nodes.records.length);
  res.render("home", {
    // showTitle: num_nodes.records.length,

    // Override `foo` helper only for this rendering.
  });
  session.close();
};
export const getUser = async (req, res) => {
  try {
    const resultHuyen = await huyen.find();
    const result = await tinh.find();
       const resultTT = await TT.find();
    res.render("user", {
      tinh: result,
      huyen: resultHuyen,
      TT: resultTT,
    });
  } catch (error) {}
};
export const getHuyenByIdTinh = async (req, res) => {
  try {
    const result = await huyen.find({'tinhId':req.query.id});
    res.status(200).send(result);
  } catch (error) {}
};
export const getXaByIdHuyen = async (req, res) => {
  try {
    const result = await xa.find({ huyenId: req.query.id });
    res.status(200).send(result);
  } catch (error) {}
};

export const registerUser = async (req, res) => {
  const data = new user(req.body);
  await data.save();
  res.render("success");
};
// export const insertData = async (req, res) => {
//   const data = await TT.insertMany([
//     { tenTT: "VNVC Thái Bình" },
//     { tenTT: "VNVC Yên Bái" },
//     { tenTT: "VNVC Hà Đông" },
//     { tenTT: "VNVC Sơn Tây" },
//     { tenTT: "VNVC Bắc Giang" },
//     { tenTT: "VNVC Hưng Yên" },
//     { tenTT: "VNVC Nguyễn Thái Học" },
//     { tenTT: "VNVC Long Biên" },
//     { tenTT: "VNVC Đông Anh" },
//     { tenTT: "VNVC Ninh Bình" },
//     { tenTT: "VNVC Mỹ Đình" },
//     { tenTT: "VNVC Vĩnh Yên" },
//     { tenTT: "VNVC ICON 4 Cầu Giấy" },
//     { tenTT: "VNVC Thái Nguyên" },
//     { tenTT: "VNVC Hải Phòng" },
//     { tenTT: "VNVC Bắc Ninh" },
//     { tenTT: "VNVC Nam Định" },
//     { tenTT: "VNVC Phú Thọ" },
//     { tenTT: "VNVC Hạ Long" },
//     { tenTT: "VNVC Thanh Hóa" },
//     { tenTT: "VNVC Trường Chinh" },
//     { tenTT: "VNVC Thái Hòa" },
//     { tenTT: "VNVC Đô Lương" },
//     { tenTT: "VNVC Phan Thiết" },
//     { tenTT: "VNVC Hoàng Mai" },
//     { tenTT: "VNVC Đức Trọng Lâm Đồng" },
//     { tenTT: "VNVC Đồng Hới" },
//     { tenTT: "VNVC Hà Tĩnh" },
//     { tenTT: "VNVC Quảng Ngãi" },
//     { tenTT: "VNVC Pleiku" },
//     { tenTT: "VNVC Thành phố Huế" },
//     { tenTT: "VNVC Tam Kỳ" },
//     { tenTT: "VNVC Quy Nhơn" },
//     { tenTT: "VNVC Buôn Ma Thuột" },
//     { tenTT: "VNVC Nha Trang" },
//     { tenTT: "VNVC Đà Nẵng" },
//     { tenTT: "VNVC Thành phố Vinh" },
//     { tenTT: "VNVC Bến Lức" },
//     { tenTT: "VNVC Quận 1" },
//     { tenTT: "VNVC Thuận An" },
//     { tenTT: "VNVC Mỹ Tho 2" },
//     { tenTT: "VNVC Bà Rịa" },
//     { tenTT: "VNVC Long Bình Tân" },
//     { tenTT: "VNVC Tây Ninh" },
//     { tenTT: "VNVC Bình Phước" },
//     { tenTT: "VNVC Cà Mau" },
//     { tenTT: "VNVC Vĩnh Long" },
//     { tenTT: "VNVC Bến Tre" },
//     { tenTT: "VNVC Tân Phú" },
//     { tenTT: "VNVC Công Viên Thanh Lễ, Bình Dương" },
//     { tenTT: "VNVC Lê Đại Hành" },
//     { tenTT: "VNVC Long Thành" },
//     { tenTT: "VNVC Bình Thạnh" },
//     { tenTT: "VNVC Đồng Nai" },
//     { tenTT: "VNVC Long Khánh" },
//     { tenTT: "VNVC Quận 7" },
//     { tenTT: "VNVC CANTAVIL Q2" },
//     { tenTT: "VNVC Vũng Tàu" },
//     { tenTT: "VNVC Dĩ An" },
//     { tenTT: "VNVC Bình Tân" },
//     { tenTT: "VNVC Thủ Đức" },
//     { tenTT: "VNVC Trung Sơn Bình Chánh" },
//     { tenTT: "VNVC Tân An - Long An" },
//     { tenTT: "VNVC Quận 12" },
//     { tenTT: "VNVC Long Xuyên" },
//     { tenTT: "VNVC Rạch Giá" },
//     { tenTT: "VNVC Mỹ Tho" },
//     { tenTT: "VNVC Cần Thơ" },
//     { tenTT: "VNVC Hoàng Văn Thụ" },
//   ]);
//   res.send(data);
// };
