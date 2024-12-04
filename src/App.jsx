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

    if (
      !formData.title ||
      !formData.image ||
      !formData.content ||
      !formData.published
    )
      return alert("Riempi tutti i campi");

    setPosts((posts) => [...posts, { id: Date.now(), ...formData }]);
    setFormData(defaultFormData);
  };

  const handleDelete = (id) => {
    setPosts([...posts.filter((post) => post.id !== id)]);
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
            <div className="card" key={post.id}>
              <div className="card-header">
                <img className="card-image" src={post.image} />
                <i
                  onClick={() => handleDelete(post.id)}
                  className="fa-solid fa-trash"
                ></i>
              </div>
              <div className="card-body">
                <h3 className="card-title">{post.title}</h3>
                <p className="card-description">{post.content}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}

export default App;
