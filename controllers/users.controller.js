import neo4j from "neo4j-driver";
let driver = neo4j.driver(
  "neo4j://localhost:7687",
  neo4j.auth.basic("neo4j", "123456")
);

const session = driver.session();
export const getAll = async (req, res) => {
  const num_nodes = await session.run("MATCH (n) RETURN n", {});
  
  console.log("RESULT", !num_nodes ? 0 : num_nodes.records);
  //  res( !num_nodes ? 0 : num_nodes.records.length);
  res.render("home", {
    showTitle: num_nodes.records.length,

    // Override `foo` helper only for this rendering.

  });
  session.close();
};
export const getUser = (req, res) => {
  res.render("user");
};
