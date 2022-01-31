import React, { useState } from "react";
import { useAction } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypeSelector";

const SearchNpm: React.FC = () => {
  const [term, setTerm] = useState<string>("");
  const { searchNpms } = useAction();
  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    searchNpms(term);
  };

  const { data, loading, error } = useTypedSelector(
    (state) => state.npmReducer
  );

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          className="searchInput"
          type="text"
          name="name"
          value={term}
          onChange={(event) => setTerm(event.target.value)}
        />
        <button className="btnBox">Search</button>
      </form>
      {error && error}
      {loading && "Loading..."}
      <div style={{ height: "80vh" }}>
        {!loading && !error && data.length !== 0 && (
          <div
            style={{
              height: "100%",
              width: "680px",
              overflow: "scroll",
              marginTop: 40,
              border: "1px solid #ccc",
              textAlign: "left",
              padding: "5px 20px",
              borderRadius: 5,
            }}
          >
            <>
              {data.map((name) => {
                return <p key={name}>npm install {name}</p>;
              })}
            </>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchNpm;
