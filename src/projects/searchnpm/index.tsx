import React, { useState } from "react";
import { useAction } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypeSelector";
import { actionCreators } from "../../redux";

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
          type="text"
          name="name"
          value={term}
          onChange={(event) => setTerm(event.target.value)}
        />
        <button>Search</button>
      </form>
      {error && error}
      {loading && "Loading..."}
      <div
        style={{
          height: "80vh",
          width: "500px",
          overflow: "scroll",
          marginTop: 40,
          border: "1px solid #ccc",
        }}
      >
        {!loading && !error && (
          <>
            {data.map((name) => {
              return <p key={name}>{name}</p>;
            })}
          </>
        )}
      </div>
    </div>
  );
};

export default SearchNpm;
