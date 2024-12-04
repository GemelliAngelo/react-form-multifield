import { useState } from "react";

function App() {
  const [Titles, setTitles] = useState("");
  const [posts, setPosts] = useState([]);
  const [formData, setFormData] = useState({
    image: "",
    content: "",
    category: false,
  });

  const handleInputChange = (e) => {
    setTitles(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!Titles) {
      alert("Inserisci un titolo valido");
      return;
    }

    setPosts([...posts, { name: Titles }]);
    setTitles("");
  };

  const handleFormData = (e) => {
    setFormData((formData) => ({
      ...formData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleDelete = (name) => {
    setPosts([...posts.filter((post) => post.name !== name)]);
  };

  return (
    <>
      <header>
        <h1>REACT BLOG FORM</h1>
      </header>
      <main>
        <div className="container">
          <form onSubmit={handleFormSubmit}>
            <input
              onChange={handleInputChange}
              type="text"
              className="form-input"
              value={Titles}
            />
            <input
              name="image"
              onChange={handleFormData}
              type="text"
              className="form-input"
              value={formData.image}
            />
            <textarea
              name="content"
              onChange={handleFormData}
              className="form-input text-area"
              value={formData.content}
            />
            <select
              name="category"
              onChange={handleFormData}
              className="form-input select"
              value={formData.category}
            />
            <button className="form-button">AGGIUNGI</button>
          </form>

          {posts.map((post) => (
            <div className="card" key={post.name}>
              <div className="card-header">
                <img className="card-image" src={formData.image} />
                <i
                  onClick={() => handleDelete(post.name)}
                  className="fa-solid fa-trash"
                ></i>
              </div>
              <div className="card-body">
                <h3 className="card-title">{post.name}</h3>
                <p className="card-description"></p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}

export default App;
