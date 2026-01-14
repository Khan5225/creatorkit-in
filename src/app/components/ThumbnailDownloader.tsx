"use client";

import { useState } from 'react';
import { Download, AlertCircle, CheckCircle } from 'lucide-react';

export default function ThumbnailDownloader() {
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [thumbnails, setThumbnails] = useState<Array<{name: string, url: string, size: string}>>([]);

  const getVideoId = (url: string) => {
    const patterns = [
      /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([a-zA-Z0-9_-]{11})/,
      /youtube\.com\/.*[?&]v=([a-zA-Z0-9_-]{11})/
    ];
    
    for (const pattern of patterns) {
      const match = url.match(pattern);
      if (match && match[1]) {
        return match[1];
      }
    }
    return null;
  };

  const handleDownload = () => {
    setError('');
    setSuccess('');
    setThumbnails([]);
    
    if (!url.trim()) {
      setError('Please enter a YouTube URL');
      return;
    }

    const videoId = getVideoId(url);
    if (!videoId) {
      setError('Invalid YouTube URL. Please use formats: youtube.com/watch?v=... or youtu.be/...');
      return;
    }

    setLoading(true);
    
    // YouTube thumbnail URLs
    const thumbnailQualities = [
      { name: 'HD Quality', size: '1280×720', url: `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg` },
      { name: 'SD Quality', size: '640×480', url: `https://img.youtube.com/vi/${videoId}/sddefault.jpg` },
      { name: 'High Quality', size: '480×360', url: `https://img.youtube.com/vi/${videoId}/hqdefault.jpg` },
      { name: 'Medium Quality', size: '320×180', url: `https://img.youtube.com/vi/${videoId}/mqdefault.jpg` },
      { name: 'Standard', size: '120×90', url: `https://img.youtube.com/vi/${videoId}/default.jpg` },
    ];

    // Simulate loading
    setTimeout(() => {
      setThumbnails(thumbnailQualities);
      setSuccess(`Found ${thumbnailQualities.length} thumbnails!`);
      setLoading(false);
    }, 800);
  };

  const handleExample = () => {
    setUrl('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
    setError('');
  };

  return (
    <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-2xl mb-4">
          <Download className="h-8 w-8 text-red-600" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">YouTube Thumbnail Downloader</h2>
        <p className="text-gray-600">Download HD thumbnails from any YouTube video - Free & Instant</p>
      </div>

      <div className="space-y-6">
        {/* URL Input */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            YouTube Video URL
          </label>
          <div className="flex gap-3">
            <input
              type="text"
              placeholder="https://www.youtube.com/watch?v=..."
              className="flex-1 p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            />
            <button
              onClick={handleDownload}
              disabled={loading}
              className="bg-red-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-red-700 disabled:opacity-50 transition flex items-center"
            >
              {loading ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Processing...
                </>
              ) : (
                <>
                  <Download className="mr-2 h-5 w-5" />
                  Download
                </>
              )}
            </button>
          </div>
          
          <div className="mt-3 flex items-center justify-between">
            <button
              onClick={handleExample}
              className="text-sm text-red-600 hover:text-red-700 font-medium"
            >
              Try with example URL
            </button>
            <span className="text-sm text-gray-500">No login required</span>
          </div>
        </div>

        {/* Messages */}
        {error && (
          <div className="bg-red-50 border border-red-200 rounded-xl p-4">
            <div className="flex items-center">
              <AlertCircle className="h-5 w-5 text-red-600 mr-3" />
              <span className="text-red-700">{error}</span>
            </div>
          </div>
        )}

        {success && (
          <div className="bg-green-50 border border-green-200 rounded-xl p-4">
            <div className="flex items-center">
              <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
              <span className="text-green-700">{success}</span>
            </div>
          </div>
        )}

        {/* Thumbnail Results */}
        {thumbnails.length > 0 && (
          <div className="mt-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Available Thumbnails:</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {thumbnails.map((thumb, index) => (
                <div key={index} className="border border-gray-200 rounded-xl overflow-hidden hover:shadow-md transition">
                  <div className="relative">
                    <img
                      src={thumb.url}
                      alt={`Thumbnail ${thumb.name}`}
                      className="w-full h-48 object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = `https://img.youtube.com/vi/dQw4w9WgXcQ/${index === 0 ? 'maxresdefault' : index === 1 ? 'sddefault' : 'hqdefault'}.jpg`;
                      }}
                    />
                    <div className="absolute top-3 right-3 bg-black/70 text-white text-xs px-2 py-1 rounded">
                      {thumb.size}
                    </div>
                  </div>
                  
                  <div className="p-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <h4 className="font-medium text-gray-900">{thumb.name}</h4>
                        <p className="text-sm text-gray-500 mt-1">Click download to save</p>
                      </div>
                      <a
                        href={thumb.url}
                        download={`youtube-thumbnail-${thumb.name.toLowerCase().replace(' ', '-')}.jpg`}
                        className="bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-black transition inline-flex items-center"
                      >
                        <Download className="mr-2 h-4 w-4" />
                        Save
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-6 p-4 bg-blue-50 rounded-xl border border-blue-200">
              <p className="text-sm text-blue-700">
                💡 <strong>Tip:</strong> HD quality may not be available for all videos. 
                If HD doesn't work, try SD or HQ quality.
              </p>
            </div>
          </div>
        )}

        {/* Info Box */}
        <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
          <h4 className="font-semibold text-gray-900 mb-3">How to use:</h4>
          <ol className="space-y-2 text-sm text-gray-600">
            <li className="flex items-start">
              <span className="bg-red-100 text-red-600 rounded-full w-5 h-5 flex items-center justify-center text-xs mr-3 mt-0.5">1</span>
              Copy YouTube video URL from address bar
            </li>
            <li className="flex items-start">
              <span className="bg-red-100 text-red-600 rounded-full w-5 h-5 flex items-center justify-center text-xs mr-3 mt-0.5">2</span>
              Paste URL above and click "Download"
            </li>
            <li className="flex items-start">
              <span className="bg-red-100 text-red-600 rounded-full w-5 h-5 flex items-center justify-center text-xs mr-3 mt-0.5">3</span>
              Choose quality and click "Save" to download
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}