import React, { useState, useEffect, useRef } from "react";

const userData = [
  {
    id: 1,
    name: "shravan",
  },
  {
    id: 2,
    name: "poonam",
  },
  {
    id: 3,
    name: "manoj",
  },
  {
    id: 4,
    name: "manjeet",
  },
  {
    id: 5,
    name: "suraj",
  },
];

const UserSearh: React.FC = () => {
  const [name, setName] = useState("");
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [users, setUsers] =
    useState<{ name: string; id: number | undefined }>();

  useEffect(() => {
    if (!inputRef.current) {
      return;
    }

    inputRef.current.focus();
  });

  const userFind = () => {
    const foundSearch = userData.find((user) => {
      return user.name === name;
    });
    setUsers(foundSearch);
    setName("");
  };

  const keyPressHandler = (event: any) => {
    if (event.key === "Enter") {
      userFind();
    }
  };
  return (
    <div>
      <h1>Find User</h1>
      <input
        ref={inputRef}
        value={name}
        name="name"
        onChange={(e) => setName(e.target.value)}
        onKeyPress={keyPressHandler}
      />
      <button onClick={userFind}>Find</button>
      <br />
      <br />
      {users ? (
        <>
          {users.name}'s secure ID is{" "}
          <span style={{ color: "green" }}>{users.id}</span>
        </>
      ) : (
        "Found Nothing"
      )}
    </div>
  );
};

export default UserSearh;
