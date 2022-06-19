import neo4j from "neo4j-driver";
const Uri="neo4j://localhost:7687";
const Dbname="neo4j";
const password="123456";
class DbNeo4j{
    constructor(){
        
    }
    _connect(){
       const session=neo4j.driver(Uri,neo4j.auth.basic(Dbname,password)).session();
       if(session)
       {
        console.log("Connect Neo4j successfully");
       }
       else{
        console.log("Connect Neo4j failed");
       }
    }

    _disconnect(){
       const closeSession=neo4j.driver(Uri,neo4j.auth.basic(username,password)).closeSession()
       if(closeSession==false)
       {
        console.log("Connect Neo4j disconnected");
       }
    }
}

export default new DbNeo4j;