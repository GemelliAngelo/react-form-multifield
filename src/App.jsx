import { useState } from "react";

const defaultFormData = {
  title: "",
  image: "",
  content: "",
  category: "",
  published: false,
};

function App() {
  const [posts, setPosts] = useState([]);
  const [formData, setFormData] = useState(defaultFormData);

  const handleFormData = (e) => {
    const newValue =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;

    setFormData((formData) => ({
      ...formData,
      [e.target.name]: newValue,
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    setPosts([...formData]);
    setsetFormData(defaultFormData);
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
            <label htmlFor="title">Titolo</label>
            <input
              name="title"
              onChange={handleFormData}
              type="text"
              className="form-input"
              id="title"
              value={formData.title}
            />
            <label htmlFor="image">Image</label>
            <input
              name="image"
              onChange={handleFormData}
              type="text"
              className="form-input"
              id="image"
              value={formData.image}
            />
            <label htmlFor="content">Description</label>
            <textarea
              name="content"
              onChange={handleFormData}
              className="form-input text-area"
              id="content"
              value={formData.content}
            />
            <div>
              <label htmlFor="category">Category</label>
              <select
                name="category"
                onChange={handleFormData}
                className="form-input select"
                id="category"
                value={formData.category}
              />
              <label htmlFor="published">Published</label>
              <input
                name="published"
                checked={formData.published}
                onChange={handleFormData}
                type="checkbox"
                className="form-input checkbox"
                id="published"
              />
            </div>
            <button className="form-button">AGGIUNGI</button>
          </form>

          {posts.map((post) => (
            <div className="card" key={post.name}>
              <div className="card-header">
                <img className="card-image" src="placeholder.png" />
                <i
                  onClick={() => handleDelete(post.name)}
                  className="fa-solid fa-trash"
                ></i>
              </div>
              <div className="card-body">
                <h3 className="card-title">{post.name}</h3>
                <p className="card-description">{formData.content}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}

export default App;
