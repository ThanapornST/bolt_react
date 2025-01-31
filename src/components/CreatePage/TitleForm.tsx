import React from 'react';
import { X, Image as ImageIcon } from 'lucide-react';

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
  onSubmit
}) => {
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
              <X className="w-6 h-6" />
            </button>
          </div>

          <h2 className="text-2xl font-bold text-center mb-2">Create Title</h2>
          <p className="text-gray-500 text-center mb-6">The type of story you want to create</p>

          <form onSubmit={onSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="md:col-span-1 space-y-6">
              <div className="aspect-square bg-gray-100 rounded-lg flex flex-col items-center justify-center border-2 border-dashed border-gray-300">
                <ImageIcon className="w-12 h-12 text-gray-400 mb-2" />
                <span className="text-lg font-medium text-gray-900">Image jpg/png</span>
                <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                  Choose File
                </button>
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
                    className={`px-4 py-2 rounded-lg ${
                      formData.selectedTime === time.toString() ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
                    }`}
                    onClick={() => onInputChange({ target: { name: 'selectedTime', value: time.toString() } } as any)}
                  >
                    {time} seconds
                  </button>
                ))}
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-black text-white rounded-lg hover:bg-gray-800"
              >
                Generate Text
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TitleForm;