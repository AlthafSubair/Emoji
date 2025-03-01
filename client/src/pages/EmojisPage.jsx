import { useEffect, useState } from 'react';
import Cards from '../components/Cards';
import NoResults from '../components/NoResults';
import axios from 'axios';

const EmojisPage = () => {
  const [query, setQuery] = useState('');
  const [emojis, setEmojis] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isSearch, setIsSearch] = useState(false);

  // Fetch search results
  const fetchResults = async (searchTerm) => {
    if (!searchTerm.trim()) return; // Prevent empty search

    try {
      setLoading(true);
      setIsSearch(true);
      const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/api/search`, {
        params: { keyword: searchTerm }
      });
      setEmojis(data);
    } catch (error) {
      console.error("Error fetching search results:", error);
    } finally {
      setLoading(false);
    }
  };

  // Debounce search on input change
  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (query.trim()) {
        fetchResults(query);
      }
    }, 1000); // Adjust debounce time (500ms)

    return () => clearTimeout(delayDebounceFn);
  }, [query]);

  // Handle search button click
  const handleSubmit = (event) => {
    event.preventDefault();
    fetchResults(query);
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-start">
      {/* Background Layer */}
      <div className="absolute inset-0">
        <div className="relative h-full w-full bg-slate-950 
          [&>div]:absolute [&>div]:inset-0 
          [&>div]:bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] 
          [&>div]:bg-[size:14px_24px] 
          [&>div]:[mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]">
          <div></div>
        </div>
      </div>  

      {/* Content Section */}
      <div className="relative z-10 flex flex-col items-center justify-start px-4 w-full pt-32">
        <div className="max-w-3xl text-center">
          <h1 className="mb-8 text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl text-white">
            Unlock a World of <span className="text-sky-400">Emoji</span>
          </h1>
          <p className="mx-auto mb-8 max-w-2xl sm:text-lg text-sm text-slate-300">
            Find the perfect emoji for every moment! Instantly search and discover emojis for chats, posts, and reactions.
          </p>

          {/* Search Bar */}
          <div className="flex flex-wrap justify-center gap-4">
            <form onSubmit={handleSubmit} className="flex flex-row items-center sm:gap-4 gap-2">
              <input 
                type="search" 
                name="search" 
                value={query} 
                placeholder="Search Emoji"
                className="rounded-lg border px-6 py-3 font-medium border-slate-700 bg-slate-800 text-white hover:bg-slate-700"
                onChange={(e) => setQuery(e.target.value)}
              />
              <button 
                type="submit"
                className="rounded-lg px-6 py-3 font-medium bg-sky-400 text-slate-900 hover:bg-sky-300 sm:flex hidden"
              >
                Search
              </button>
              <button 
                type="submit"
                className="rounded-lg px-3 py-3 font-medium bg-sky-400 text-slate-900 hover:bg-sky-300 flex sm:hidden"
              >
                🔍
              </button>
            </form>
          </div>
        </div>

        {/* Emojis List */}
        {loading ? (
          <div className="w-full gap-x-2 flex justify-center items-center my-16">
            <div className="w-5 h-5 bg-[#d991c2] animate-bounce animate-delay-0 rounded-full"></div>
            <div className="w-5 h-5 bg-[#9869b8] animate-bounce animate-delay-200 rounded-full"></div>
            <div className="w-5 h-5 bg-[#6756cc] animate-bounce animate-delay-400 rounded-full"></div>
          </div>
        ) : (
          <div className="w-full max-w-5xl mt-12 px-4">
            {emojis.length > 0 ? <Cards emojis={emojis} /> : isSearch && <NoResults />}
          </div>
        )}
      </div>
    </div>
  );
};

export default EmojisPage;
