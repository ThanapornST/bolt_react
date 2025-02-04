import React, { useState } from "react";
import { Eye, EyeOff, Image as ImageIcon } from "lucide-react";
import { useNavigate } from 'react-router-dom';

interface FormData {
  novelTitle: string;
  numberOfCharacters: string;
  plotSummary: string;
  additionalInfo: string;
  toneOfStory: string;
  storyStructure: string;
  genre: string;
  era: string;
  selectedTime: string;
}

interface TitleFormProps {
  formData: FormData;
  onClose: () => void;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  onSubmit: (e: React.FormEvent) => void;
}

const TitleForm: React.FC<TitleFormProps> = ({
  formData,
  onClose,
  onInputChange,
  onSubmit: propOnSubmit
}) => {
  const navigate = useNavigate();
  const [coverImage, setCoverImage] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [activeButton, setActiveButton] = useState<string>(formData.selectedTime);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Save form data to localStorage for AI generation
    localStorage.setItem('novelData', JSON.stringify(formData));
    propOnSubmit(e);
    // Navigate to Including character creation page with AI view active
    navigate('/including-character-creation');
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 2 * 1024 * 1024) {
        alert('Image size must be less than 2MB');
        return;
      }
      if (!file.type.startsWith('image/')) {
        alert('Please upload an image file');
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        setCoverImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    const file = e.dataTransfer.files[0];
    if (file) {
      if (file.size > 2 * 1024 * 1024) {
        alert('Image size must be less than 2MB');
        return;
      }
      if (!file.type.startsWith('image/')) {
        alert('Please upload an image file');
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        setCoverImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const removeImage = () => {
    setCoverImage(null);
  };

  const handleTimeSelect = (time: string) => {
    setActiveButton(time);
    onInputChange({ target: { name: 'selectedTime', value: time } } as never);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen p-4">
        <div className="fixed inset-0 bg-black bg-opacity-50" onClick={onClose}></div>
        
        <div className="relative bg-white rounded-lg w-full max-w-4xl p-6">
          <div className="absolute top-4 right-4">
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-500"
            >
              <EyeOff className="w-6 h-6" />
            </button>
          </div>

          <h2 className="text-2xl font-bold text-center mb-2">Create Title</h2>
          <p className="text-gray-500 text-center mb-6">The type of story you want to create</p>

          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="md:col-span-1">
              <div 
                className={`aspect-square bg-gray-100 rounded-lg flex flex-col items-center justify-center border-2 ${
                  isDragging ? 'border-blue-500 bg-blue-50' : 'border-dashed border-gray-300'
                } relative overflow-hidden`}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
              >
                {coverImage ? (
                  <div className="relative w-full h-full group">
                    <img
                      src={coverImage}
                      alt="Cover preview"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100">
                      <button
                        type="button"
                        onClick={removeImage}
                        className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors"
                      >
                        Remove Image
                      </button>
                    </div>
                  </div>
                ) : (
                  <>
                    <ImageIcon className="w-12 h-12 text-gray-400 mb-2" />
                    <span className="text-lg font-medium text-gray-900">Drag & Drop or Click to Upload</span>
                    <span className="text-sm text-gray-500 mt-2">JPG, PNG or GIF (Max 2MB)</span>
                    <label className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg cursor-pointer active:bg-blue-600">
                      Choose File
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                        className="hidden"
                      />
                    </label>
                  </>
                )}
              </div>
            </div>

            <div className="md:col-span-1 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Novel Title *</label>
                <input
                  type="text"
                  name="novelTitle"
                  value={formData.novelTitle}
                  onChange={onInputChange}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Number of Characters *</label>
                <input
                  type="number"
                  name="numberOfCharacters"
                  value={formData.numberOfCharacters}
                  onChange={onInputChange}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Plot Summary *</label>
                <textarea
                  name="plotSummary"
                  value={formData.plotSummary}
                  onChange={onInputChange}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 h-24"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Additional Information (optional)</label>
                <textarea
                  name="additionalInfo"
                  value={formData.additionalInfo}
                  onChange={onInputChange}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 h-24"
                />
              </div>
            </div>

            <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Tone of the Story *</label>
                <select
                  name="toneOfStory"
                  value={formData.toneOfStory}
                  onChange={onInputChange}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  required
                >
                  <option value="">Select tone</option>
                  <option value="dramatic">Dramatic</option>
                  <option value="humorous">Humorous</option>
                  <option value="serious">Serious</option>
                  <option value="light">Light</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Story Structure *</label>
                <select
                  name="storyStructure"
                  value={formData.storyStructure}
                  onChange={onInputChange}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  required
                >
                  <option value="">Select structure</option>
                  <option value="linear">Linear</option>
                  <option value="nonlinear">Non-linear</option>
                  <option value="episodic">Episodic</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Genre *</label>
                <select
                  name="genre"
                  value={formData.genre}
                  onChange={onInputChange}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  required
                >
                  <option value="">Select genre</option>
                  <option value="romance">Romance</option>
                  <option value="fantasy">Fantasy</option>
                  <option value="scifi">Science Fiction</option>
                  <option value="mystery">Mystery</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Specify the Era *</label>
                <select
                  name="era"
                  value={formData.era}
                  onChange={onInputChange}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  required
                >
                  <option value="">Select era</option>
                  <option value="ancient">Ancient</option>
                  <option value="medieval">Medieval</option>
                  <option value="modern">Modern</option>
                  <option value="future">Future</option>
                </select>
              </div>
            </div>

            <div className="md:col-span-2">
              <div className="flex justify-center space-x-4 mb-6">
                {[15, 30, 60, 120].map((time) => (
                  <button
                    key={time}
                    type="button"
                    className={`px-4 py-2 rounded-lg transition-colors ${
                      activeButton === time.toString()
                        ? 'bg-blue-500 text-white'
                        : 'bg-gray-200 text-gray-700 active:bg-blue-500 active:text-white'
                    }`}
                    onClick={() => handleTimeSelect(time.toString())}
                  >
                    {time} seconds
                  </button>
                ))}
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-black text-white rounded-lg active:bg-gray-800 hover:bg-gray-900 transition-colors"
              >
                Generate Novel with AI
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TitleForm;