import React from "react";

const SearchStatus = ({ length }) => {
  const renderPhrase = (number) => {
    const lastOne = +number.toString().slice(-1);
    console.log(lastOne);
    if ((number > 4 && number < 15) || number === 1) return "человек тусанёт";
    if ([2, 3, 4].indexOf(lastOne) >= 0) return "человека тусанут";
  };

  return (
    <h2>
      <span className={`badge m-2 bg-${length > 0 ? "primary" : "danger"}`}>
        {length > 0
          ? `${length} ${renderPhrase(length)} с тобой сегодня`
          : "Сегодня никто с тобой не тусанёт"}
      </span>
    </h2>
  );
};

export default SearchStatus;
