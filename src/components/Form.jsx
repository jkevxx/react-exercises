import React, { useState } from "react";

/*
const Form = () => {
  const [name, setName] = useState("");
  const [flavor, setFlavor] = useState("");
  const [language, setLanguage] = useState("");
  const [term, setTerm] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("form sent");
  };

  return (
    <>
      <h1>Forms</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <br />
        <p>Choose your favorite flavor of JS</p>
        <input
          type="radio"
          id="vanilla"
          name="flavor"
          value="vanilla"
          onChange={(e) => setFlavor(e.target.value)}
          defaultChecked
        />
        <label htmlFor="vanilla">Vanilla</label>
        <input
          type="radio"
          id="react"
          name="flavor"
          value="react"
          onChange={(e) => setFlavor(e.target.value)}
        />
        <label htmlFor="react">React</label>
        <input
          type="radio"
          id="vue"
          name="flavor"
          value="vue"
          onChange={(e) => setFlavor(e.target.value)}
        />
        <label htmlFor="vue">VueJS</label>
        <br />
        <p>Choose your favorite language</p>
        <select
          name="language"
          id=""
          onChange={(e) => setLanguage(e.target.value)}
        >
          <option value="">-----</option>
          <option value="js">JavaScript</option>
          <option value="php">PHP</option>
          <option value="py">Python</option>
          <option value="go">Go</option>
          <option value="rb">Ruby</option>
        </select>

        <br />
        <label htmlFor="term">Accept Terms and Conditions</label>
        <input
          type="checkbox"
          name="term"
          id=""
          onChange={(e) => setTerm(e.target.checked)}
        />
        <br />
        <input type="submit" value="Send" />
      </form>
    </>
  );
};

export default Form;*/

const Form = () => {
  const [form, setForm] = useState({});

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleChecked = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.checked,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("form sent");
  };

  return (
    <>
      <h1>Forms</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={form.name || ""}
          onChange={handleChange}
        />

        <br />
        <p>Choose your favorite flavor of JS</p>
        <input
          type="radio"
          id="vanilla"
          name="flavor"
          value="vanilla"
          onChange={handleChange}
          defaultChecked
        />
        <label htmlFor="vanilla">Vanilla</label>
        <input
          type="radio"
          id="react"
          name="flavor"
          value="react"
          onChange={handleChange}
        />
        <label htmlFor="react">React</label>
        <input
          type="radio"
          id="vue"
          name="flavor"
          value="vue"
          onChange={handleChange}
        />
        <label htmlFor="vue">VueJS</label>
        <br />
        <p>Choose your favorite language</p>
        <select name="language" id="" onChange={handleChange}>
          <option value="">-----</option>
          <option value="js">JavaScript</option>
          <option value="php">PHP</option>
          <option value="py">Python</option>
          <option value="go">Go</option>
          <option value="rb">Ruby</option>
        </select>

        <br />
        <label htmlFor="term">Accept Terms and Conditions</label>
        <input type="checkbox" name="term" id="" onChange={handleChecked} />
        <br />
        <input type="submit" value="Send" />
      </form>
    </>
  );
};

export default Form;
