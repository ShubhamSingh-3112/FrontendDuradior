import { useParams } from "react-router-dom";

function bagpackdetail() {
  const { id } = useParams();

  return (
    <div style={{ padding: "20px" }}>
      
      <p>This is a detailed description of the {id}.</p>
      
    </div>
  );
}

export default bagpackdetail;