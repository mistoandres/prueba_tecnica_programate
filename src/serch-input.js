import { FaSearch } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { setInput } from "./app/slice";
import { useState } from "react";

function Sear() {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();

  const handleSearch = () => {
    dispatch(setInput(query));
  }

  return (
    <div className="input-group">
      <div className="form-outline mx-auto my-5 d-flex">
        <input
          type="search"
          id="form1"
          className="form-control"
          placeholder="Buscar superheroe por nombre..."
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="button" className="btn btn-danger" onClick={handleSearch}>
          <FaSearch />
        </button>
      </div>
    </div>
  );
}

export default Sear;
