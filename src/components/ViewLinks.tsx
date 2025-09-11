import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
  faHeart,
  faEdit,
  faExternalLinkAlt,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";

interface LinkItem {
  id: number;
  title: string;
  url: string;
  description: string;
  favourite: boolean;
}

// Default Shein card
const defaultLinks: LinkItem[] = [
  {
    id: 1,
    title: "Shein",
    url: "https://www.shein.com",
    description: "Trendy Fashion and Style..",
    favourite: false,
  },
];

function View() {
  const [links, setLinks] = useState<LinkItem[]>(defaultLinks);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState<LinkItem>({
    id: Date.now(),
    title: "",
    url: "",
    description: "",
    favourite: false,
  });
  const [editingId, setEditingId] = useState<number | null>(null);

  // Load saved links
  useEffect(() => {
    const raw = localStorage.getItem("links");
    if (raw) {
      const saved = JSON.parse(raw) as LinkItem[];
      const shein = defaultLinks[0];
      const hasShein = saved.some((l) => l.id === shein.id);
      setLinks(hasShein ? saved : [shein, ...saved]);
    }
  }, []);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem("links", JSON.stringify(links));
  }, [links]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleAddLink = () => {
    if (!formData.title || !formData.url) {
      alert("Please fill in Title and Link");
      return;
    }

    if (editingId) {
      // Update existing link
      setLinks((prev) =>
        prev.map((item) =>
          item.id === editingId ? { ...formData, id: editingId } : item
        )
      );
    } else {
      // Add new link
      setLinks((prev) => [...prev, { ...formData, id: Date.now() }]);
    }

    // Reset form
    setFormData({
      id: Date.now(),
      title: "",
      url: "",
      description: "",
      favourite: false,
    });
    setEditingId(null);
    setShowForm(false);
  };

  const handleDelete = (id: number) => {
    setLinks((prev) => prev.filter((item) => item.id !== id));
  };

  const handleToggleFavourite = (id: number) => {
    setLinks((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, favourite: !item.favourite } : item
      )
    );
  };

  const handleEdit = (item: LinkItem) => {
    setFormData(item); // Pre-fill form with selected item
    setEditingId(item.id);
    setShowForm(true);
  };

  return (
    <div className="view-wrapper">
      <div className="view-inner">
        <h2 className="page-title">My Links</h2>

        <div className="links-list">
          {links.length === 0 ? (
            <p className="no-links">No links added yet</p>
          ) : (
            links.map((item) => (
              <div key={item.id} className="link-card">
                {/* Left content */}
                <div className="link-left">
                  <div className="link-top">
                    <h3 className="link-title">{item.title}</h3>
                    <span className="link-domain">{item.url}</span>
                  </div>
                  {item.description && (
                    <p className="link-description">{item.description}</p>
                  )}
                  <div className="pills">
                    <a href={item.url} target="_blank" rel="noopener noreferrer">
                      <button className="pill-btn">
                        <FontAwesomeIcon icon={faExternalLinkAlt} /> Open
                      </button>
                    </a>
                    <button
                      className="pill-btn outline"
                      onClick={() => handleEdit(item)}
                    >
                      <FontAwesomeIcon icon={faEdit} /> Edit
                    </button>
                  </div>
                </div>

                {/* Right icons */}
                <div className="link-right">
                  <button
                    className="icon-btn"
                    onClick={() => handleDelete(item.id)}
                  >
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                  <button
                    className="icon-btn heart-btn"
                    onClick={() => handleToggleFavourite(item.id)}
                  >
                    <FontAwesomeIcon
                      icon={faHeart}
                      color={item.favourite ? "red" : "rgb(115,95,134)"}
                    />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Floating Add Button */}
      <button
        className="floating-add"
        onClick={() => {
          setEditingId(null); // reset edit mode
          setFormData({
            id: Date.now(),
            title: "",
            url: "",
            description: "",
            favourite: false,
          });
          setShowForm(true);
        }}
      >
        <span className="plus">
          <FontAwesomeIcon icon={faPlus} />
        </span>
        Add Link
      </button>

      {/* Popup Form */}
      {showForm && (
        <div className="popup-overlay">
          <div className="popup-card">
            <h2>{editingId ? "Edit Link" : "Add Link"}</h2>
            <label>Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Enter title"
            />
            <label>Link</label>
            <input
              type="url"
              name="url"
              value={formData.url}
              onChange={handleChange}
              placeholder="https://example.com"
            />
            <label>Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Enter description"
            />
            <div className="fav-row">
              <input
                type="checkbox"
                name="favourite"
                checked={formData.favourite}
                onChange={handleChange}
              />
              <span>Add to favourites</span>
            </div>

            <div className="popup-actions">
              <button className="save" onClick={handleAddLink}>
                <FontAwesomeIcon icon={faPlus} /> Save
              </button>
              <button className="cancel" onClick={() => setShowForm(false)}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default View;
