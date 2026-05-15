import { useState } from 'react';
import API from '../../api/axios';
import { Upload, CheckCircle2 } from 'lucide-react';

const AddBook = () => {
  const [formData, setFormData] = useState({
    title: '', author: '', isbn: '', category: '', totalStock: 1
  });
  const [image, setImage] = useState(null);
  const [status, setStatus] = useState({ type: '', msg: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(); // Required for file uploads
    Object.keys(formData).forEach(key => data.append(key, formData[key]));
    if (image) data.append('image', image);

    try {
      await API.post('/books', data);
      setStatus({ type: 'success', msg: 'Book added successfully!' });
      setFormData({ title: '', author: '', isbn: '', category: '', totalStock: 1 });
    } catch (err) {
      setStatus({ type: 'error', msg: 'Failed to add book.' });
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Add New Inventory</h1>
        <p className="text-gray-500">Expand the library catalog with new titles.</p>
      </div>

      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 space-y-6">
        {status.msg && (
          <div className={`p-4 rounded-xl flex items-center space-x-2 ${status.type === 'success' ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
            <CheckCircle2 size={20} />
            <span>{status.msg}</span>
          </div>
        )}

        <div className="grid grid-cols-2 gap-6">
          <div className="col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">Book Title</label>
            <input type="text" required value={formData.title} onChange={e => setFormData({...formData, title: e.target.value})} className="w-full px-4 py-2 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Author</label>
            <input type="text" required value={formData.author} onChange={e => setFormData({...formData, author: e.target.value})} className="w-full px-4 py-2 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
            <input type="text" required value={formData.category} onChange={e => setFormData({...formData, category: e.target.value})} className="w-full px-4 py-2 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none" />
          </div>
        </div>

        <div className="border-2 border-dashed border-gray-200 rounded-2xl p-8 text-center hover:border-blue-400 transition-colors">
          <label className="cursor-pointer">
            <Upload className="mx-auto h-12 w-12 text-gray-400 mb-2" />
            <span className="text-sm text-gray-600">Click to upload cover image</span>
            <input type="file" className="hidden" onChange={e => setImage(e.target.files[0])} />
            {image && <p className="mt-2 text-blue-600 font-medium">{image.name}</p>}
          </label>
        </div>

        <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-2xl font-bold hover:bg-blue-700 shadow-lg shadow-blue-100 transition-all">
          Publish Book
        </button>
      </form>
    </div>
  );
};

export default AddBook;