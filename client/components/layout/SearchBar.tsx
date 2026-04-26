import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Search, X } from "lucide-react";
import { furnitureItems } from "@/data/furniture";

interface SearchResult {
  id: string;
  name: string;
  type: "product" | "category";
  category?: string;
}

interface SearchBarProps {
  className?: string;
}

const SearchBar = ({ className = "" }: SearchBarProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState<SearchResult[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  // Get unique categories
  const categories = Array.from(new Set(furnitureItems.map(item => item.category)));

  // Handle search input
  const handleSearch = (value: string) => {
    setSearchTerm(value);

    if (value.trim() === "") {
      setSuggestions([]);
      setIsOpen(false);
      return;
    }

    const lowerValue = value.toLowerCase();

    // Filter products
    const productResults: SearchResult[] = furnitureItems
      .filter(item =>
        item.name.toLowerCase().includes(lowerValue) ||
        item.category.toLowerCase().includes(lowerValue)
      )
      .map(item => ({
        id: item.id,
        name: item.name,
        type: "product" as const,
        category: item.category
      }))
      .slice(0, 5);

    // Filter categories
    const categoryResults: SearchResult[] = categories
      .filter(cat => cat.toLowerCase().includes(lowerValue))
      .map(cat => ({
        id: cat,
        name: cat,
        type: "category" as const
      }))
      .slice(0, 3);

    setSuggestions([...categoryResults, ...productResults]);
    setIsOpen(true);
  };

  // Handle suggestion click
  const handleSuggestionClick = (suggestion: SearchResult) => {
    if (suggestion.type === "product") {
      navigate(`/product/${suggestion.id}`);
    } else {
      // For category, navigate to shop and filter
      navigate("/shop", { state: { selectedCategory: suggestion.name } });
    }
    setSearchTerm("");
    setSuggestions([]);
    setIsOpen(false);
  };

  // Close on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={searchRef} className={`relative w-full ${className}`}>
      <div className="relative">
        <input
          type="text"
          placeholder="Search furniture..."
          value={searchTerm}
          onChange={(e) => handleSearch(e.target.value)}
          onFocus={() => searchTerm && setIsOpen(true)}
          className="w-full px-4 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-muted"
        />
        {searchTerm ? (
          <button
            onClick={() => {
              setSearchTerm("");
              setSuggestions([]);
              setIsOpen(false);
            }}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground hover:text-foreground transition"
          >
            <X size={20} />
          </button>
        ) : (
          <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
        )}
      </div>

      {/* Suggestions Dropdown */}
      {isOpen && suggestions.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-input rounded-lg shadow-lg z-50">
          {suggestions.map((suggestion, index) => (
            <button
              key={index}
              onClick={() => handleSuggestionClick(suggestion)}
              className="w-full text-left px-4 py-3 hover:bg-muted transition border-b border-muted last:border-b-0 flex items-center justify-between group"
            >
              <div className="flex flex-col">
                <span className="text-foreground font-medium">{suggestion.name}</span>
                {suggestion.type === "product" && (
                  <span className="text-xs text-muted-foreground">
                    {suggestion.category}
                  </span>
                )}
              </div>
              <span className="text-xs bg-primary text-white px-2 py-1 rounded group-hover:bg-cyan-600 transition">
                {suggestion.type === "product" ? "Product" : "Category"}
              </span>
            </button>
          ))}
        </div>
      )}

      {/* No results message */}
      {isOpen && searchTerm && suggestions.length === 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-input rounded-lg shadow-lg z-50 px-4 py-3">
          <p className="text-muted-foreground text-sm">No results found for "{searchTerm}"</p>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
