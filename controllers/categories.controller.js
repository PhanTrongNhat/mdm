import article from "../models/article.model.js";
import { session } from "../dbNeo4j.js";
export const getCategoriesList = async (req, res) => {
  try {
    const num_nodes = await session.run(
      "MATCH (p:vacxinCategory) RETURN p.ten",
      {}
    );
    const data = num_nodes.records.map((item) => {
      return {
        ten: item._fields[0],
      };
    });

    res.status(200).send(data);
  } catch (error) {
    res.send(error);
  }
};

export const getCategories = async (req, res) => {
  try {
    console.log("body", req.query);
    const num_nodes = await session.run(
      "MATCH (p:vacxinCategory) RETURN p.ten",
      {}
    );
    const dataListCategories = num_nodes.records.map((item) => {
      return {
        ten: item._fields[0],
      };
    });

    if (req.query?.ten) {
      const num_nodes = await session.run(
        `MATCH (p:vacxinCategory{ten:'${req.query?.ten}'})<-[:thuoc]-(v:vacxin) RETURN v.ten, v.noiDung`,
        {}
      );
      const data = num_nodes.records.map((item) => {
        return {
          ten: item._fields[0],
          noiDung: item._fields[1],

        };
      });

      res.status(200).render("findCategories", {
        data,
        dataListCategories,
        ten: req.query?.ten,
      });
    } else {
      res.status(200).render("findCategories", { dataListCategories });
    }
  } catch (error) {
    res.send(error);
  }
};
// session.close();
//   if (req.query.title) {
//     const data = await article.find({ title: { $regex: req.query.title } });
//     res.render("findCategories", { baiviet: data });
//   } else {
//     const data = await article.find();
//     res.render("findCategories", { baiviet: data });
//   }
