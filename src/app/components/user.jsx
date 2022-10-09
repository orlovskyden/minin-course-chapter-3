import React from "react";
import Qualitie from "./qualitie";
import Bookmark from "./bookmark";

const User = ({
  _id,
  name,
  profession,
  qualities,
  completedMeetings,
  rate,
  bookmark,
  onDelete,
  onToggleBookmark,
}) => {
  return (
    <tr key={_id}>
      <th scope="row">{name}</th>
      <td>
        {qualities.map((qual) => (
          <Qualitie key={qual._id} {...qual} />
        ))}
      </td>
      <td>{profession.name}</td>
      <td>{completedMeetings}</td>
      <td>{rate}</td>
      <td>
        <Bookmark onClick={() => onToggleBookmark(_id)} status={bookmark} />
      </td>
      <td>
        <button onClick={() => onDelete(_id)} className="btn btn-danger">
          Удалить
        </button>
      </td>
    </tr>
  );
};

export default User;
