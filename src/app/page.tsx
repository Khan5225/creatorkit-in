import ThumbnailDownloader from './components/ThumbnailDownloader';
import { Download, TrendingUp, Users, Zap, Shield, Globe } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-linear-to-b from-gray-50 to-white">
      {/* Navigation Header */}
      <nav className="sticky top-0 z-50 border-b bg-white/95 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 bg-red-600 rounded-lg"></div>
              <span className="text-2xl font-bold text-gray-900">CreatorKit</span>
              <span className="text-xs bg-red-100 text-red-600 px-2 py-1 rounded-full">.in</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#tools" className="text-gray-700 hover:text-red-600 font-medium">Tools</a>
              <a href="#features" className="text-gray-700 hover:text-red-600 font-medium">Features</a>
              <a href="#pricing" className="text-gray-700 hover:text-red-600 font-medium">Pricing</a>
              <a href="#blog" className="text-gray-700 hover:text-red-600 font-medium">Blog</a>
              <button className="bg-red-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-red-700 transition">
                Start Free
              </button>
            </div>
            
            <button className="md:hidden">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Supercharge Your
              <span className="text-red-600 block">YouTube Growth</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
              Free tools for Indian creators - Thumbnail downloader, SEO analyzer, 
              tag generator, and more. Start growing your channel today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#downloader" 
                className="bg-red-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-red-700 transition shadow-lg hover:shadow-xl inline-flex items-center justify-center"
              >
                <Download className="mr-3 h-5 w-5" />
                Try Free Tools
              </a>
              <a 
                href="#features" 
                className="bg-white text-gray-800 border-2 border-gray-200 px-8 py-4 rounded-xl text-lg font-semibold hover:border-red-300 transition inline-flex items-center justify-center"
              >
                <Zap className="mr-3 h-5 w-5" />
                See Features
              </a>
            </div>
            
            <p className="text-gray-500 text-sm mt-6">
              No credit card required • 5 free tools • Hindi support available
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <div className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-red-600 mb-2">100%</div>
              <div className="text-gray-600 font-medium">Free Start</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-red-600 mb-2">5+</div>
              <div className="text-gray-600 font-medium">Tools</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-red-600 mb-2">24/7</div>
              <div className="text-gray-600 font-medium">Available</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-red-600 mb-2">हिंदी</div>
              <div className="text-gray-600 font-medium">Support</div>
            </div>
          </div>
        </div>
      </div>

      {/* Tools Section */}
      <section id="tools" className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Free YouTube Tools</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Everything you need to optimize your YouTube channel - completely free to start
          </p>
          
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-8 text-center">Try Our Most Popular Tool</h3>
            <ThumbnailDownloader />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg border hover:shadow-xl transition">
              <div className="bg-red-50 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                <TrendingUp className="h-7 w-7 text-red-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">SEO Title Analyzer</h3>
              <p className="text-gray-600 mb-6">Get AI-powered title suggestions and CTR score predictions for your videos.</p>
              <button className="text-red-600 font-semibold hover:text-red-700">Coming Soon →</button>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg border hover:shadow-xl transition">
              <div className="bg-red-50 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                <Users className="h-7 w-7 text-red-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Tag Generator</h3>
              <p className="text-gray-600 mb-6">Generate trending tags based on your video topic and niche.</p>
              <button className="text-red-600 font-semibold hover:text-red-700">Coming Soon →</button>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg border hover:shadow-xl transition">
              <div className="bg-red-50 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                <Globe className="h-7 w-7 text-red-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Competitor Analyzer</h3>
              <p className="text-gray-600 mb-6">Analyze competitor channels and discover content gaps.</p>
              <button className="text-red-600 font-semibold hover:text-red-700">Coming Soon →</button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-linear-to-r from-red-600 to-red-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Grow Your YouTube Channel?</h2>
          <p className="text-xl mb-8 opacity-90">Join thousands of Indian creators using CreatorKit</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-red-600 px-8 py-4 rounded-xl text-lg font-bold hover:bg-gray-100 transition">
              Start Free Today
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-white/10 transition">
              View Pricing
            </button>
          </div>
          <p className="text-sm opacity-75 mt-6">No credit card • Cancel anytime</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold mb-4 flex items-center">
                <div className="h-8 w-8 bg-red-600 rounded-lg mr-3"></div>
                CreatorKit.in
              </div>
              <p className="text-gray-400">Free YouTube tools for Indian creators.</p>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Tools</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Thumbnail Downloader</a></li>
                <li><a href="#" className="hover:text-white">SEO Analyzer</a></li>
                <li><a href="#" className="hover:text-white">Tag Generator</a></li>
                <li><a href="#" className="hover:text-white">All Tools</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Resources</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Blog</a></li>
                <li><a href="#" className="hover:text-white">YouTube SEO Guide</a></li>
                <li><a href="#" className="hover:text-white">Tutorials</a></li>
                <li><a href="#" className="hover:text-white">Community</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">About</a></li>
                <li><a href="#" className="hover:text-white">Contact</a></li>
                <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500 text-sm">
            <p>© 2024 CreatorKit.in. Made for Indian YouTube creators.</p>
            <p className="mt-2">This is an independent tool and not affiliated with YouTube.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}