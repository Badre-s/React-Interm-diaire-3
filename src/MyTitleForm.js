import { useState } from "react";

function MyTitleForm() {
  const [title, setTitle] = useState("Awesome Title");

  const handleChange = (event) => {
    const Title = event.target.value.replace("*", "");
    setTitle(Title);
  };

  return (
    <header>
      <h1>{title}</h1>
      <label htmlFor="title">Title :</label>
      <input
        id="title"
        name="character"
        type="text"
        value={title}
        onChange={handleChange}
      />
    </header>
  );
}

export default MyTitleForm;
