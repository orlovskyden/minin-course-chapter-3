import React, { useState } from "react";
import api from "../api";

const Users = () => {
  const [users, setUsers] = useState(api.users.fetchAll());

  const handleDelete = (userId) =>
    setUsers(users.filter((user) => userId !== user._id));

  const renderPhrase = (number) => {
    const lastOne = +users.length.toString().slice(-1);
    console.log(lastOne);
    if ((number > 4 && number < 15) || number === 1) return "человек тусанёт";
    if ([2, 3, 4].indexOf(lastOne) >= 0) return "человека тусанут";
  };

  return (
    <>
      <h2>
        <span
          className={`badge m-2 bg-${users.length > 0 ? "primary" : "danger"}`}
        >
          {users.length > 0
            ? `${users.length} ${renderPhrase(users.length)} с тобой сегодня`
            : "Сегодня никто с тобой не тусанёт"}
        </span>
      </h2>
      {users.length > 0 ? (
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Имя</th>
              <th scope="col">Профессия</th>
              <th scope="col">Качества</th>
              <th scope="col">Количество встреч</th>
              <th scope="col">Оценка</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id}>
                <th scope="row">{user.name}</th>
                <td>
                  {user.qualities.map((item) => (
                    <span
                      className={`badge m-1 bg-${item.color}`}
                      key={item._id}
                    >
                      {item.name}
                    </span>
                  ))}
                </td>
                <td>{user.profession.name}</td>
                <td>{user.completedMeetings}</td>
                <td>{user.rate}</td>
                <td>
                  <button
                    onClick={() => handleDelete(user._id)}
                    className="btn btn-danger"
                  >
                    Удалить
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        ""
      )}
    </>
  );
};

export default Users;
