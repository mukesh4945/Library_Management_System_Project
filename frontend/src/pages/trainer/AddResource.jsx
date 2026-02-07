import React, { useState } from 'react';
import { BookPlus, FileText, Globe, UploadCloud, CheckCircle2 } from 'lucide-react';
import "./AddResource.css";

const AddResource = () => {
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    category: 'Book', // Default category
    isbn: '',
    link: '' // For eBooks/PDFs
  });
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Yahan API call ya state update logic aayega
    console.log("Resource Added:", formData);
    setIsSuccess(true);
    setTimeout(() => {
      setIsSuccess(false);
      setFormData({ title: '', author: '', category: 'Book', isbn: '', link: '' });
    }, 2000);
  };

  return (
    <div className="add-resource-wrapper">
      <div className="add-resource-header">
        <h2>Library Item Creation</h2>
        <p>Add new Books, PDFs, or eBooks to the digital library catalog.</p>
      </div>

      <div className="add-resource-grid">
        <form className="resource-form glass-effect" onSubmit={handleSubmit}>
          <div className="input-group-row">
            <div className="input-field">
              <label>Resource Title</label>
              <input 
                type="text" 
                placeholder="e.g. Mastering React" 
                value={formData.title}
                onChange={(e) => setFormData({...formData, title: e.target.value})}
                required 
              />
            </div>
            <div className="input-field">
              <label>Author Name</label>
              <input 
                type="text" 
                placeholder="e.g. John Doe" 
                value={formData.author}
                onChange={(e) => setFormData({...formData, author: e.target.value})}
                required 
              />
            </div>
          </div>

          <div className="input-group-row">
            <div className="input-field">
              <label>Resource Type</label>
              <select 
                value={formData.category}
                onChange={(e) => setFormData({...formData, category: e.target.value})}
              >
                <option value="Book">Physical Book</option>
                <option value="PDF">PDF Document</option>
                <option value="eBook">Digital eBook</option>
              </select>
            </div>
            <div className="input-field">
              <label>{formData.category === 'Book' ? 'ISBN / Book ID' : 'Source Link (URL)'}</label>
              <input 
                type="text" 
                placeholder={formData.category === 'Book' ? "e.g. 978-3-16" : "https://example.com/file.pdf"} 
                value={formData.category === 'Book' ? formData.isbn : formData.link}
                onChange={(e) => formData.category === 'Book' ? setFormData({...formData, isbn: e.target.value}) : setFormData({...formData, link: e.target.value})}
                required 
              />
            </div>
          </div>

          <button type="submit" className="add-item-btn">
            {isSuccess ? <><CheckCircle2 size={20} /> Item Added!</> : <><UploadCloud size={20} /> Create Resource</>}
          </button>
        </form>

        <div className="resource-preview-panel glass-effect">
          <h3>Quick Preview</h3>
          <div className="preview-card">
            <div className="preview-icon">
              {formData.category === 'Book' ? <BookPlus size={40} color="#8b5cf6" /> : <FileText size={40} color="#10b981" />}
            </div>
            <div className="preview-meta">
              <h4>{formData.title || "Resource Title"}</h4>
              <p>{formData.author || "Author Name"}</p>
              <span className="type-badge">{formData.category}</span>
            </div>
          </div>
          <div className="preview-guide">
            <p>✔ This item will be visible in student search.</p>
            <p>✔ Availability tracking will be enabled automatically.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddResource;