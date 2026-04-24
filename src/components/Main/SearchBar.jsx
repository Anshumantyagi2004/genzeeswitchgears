"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { products } from "@/data/data";
import { FiSearch } from "react-icons/fi";

export default function SearchBar() {
    const [query, setQuery] = useState("");
    const [filtered, setFiltered] = useState([]);
    const [show, setShow] = useState(false);
    const [activeIndex, setActiveIndex] = useState(-1);

    const router = useRouter();
    const wrapperRef = useRef(null);

    // ✅ Close when clicking outside
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (!wrapperRef.current?.contains(e.target)) {
                setShow(false);
                setActiveIndex(-1);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    // ✅ Search logic
    const handleSearch = (value) => {
        setQuery(value);
        setActiveIndex(-1);

        if (!value.trim()) {
            setFiltered([]);
            setShow(false);
            return;
        }

        const results = products.filter((item) =>
            item.name.toLowerCase().includes(value.toLowerCase())
        );

        setFiltered(results);
        setShow(true);
    };

    // ✅ Select item
    const handleSelect = (id) => {
        setQuery("");
        setShow(false);
        router.push(`/products/${id}`);
    };

    // ✅ Keyboard navigation
    const handleKeyDown = (e) => {
        if (!show) return;

        if (e.key === "ArrowDown") {
            e.preventDefault();
            setActiveIndex((prev) =>
                prev < filtered.length - 1 ? prev + 1 : 0
            );
        }

        if (e.key === "ArrowUp") {
            e.preventDefault();
            setActiveIndex((prev) =>
                prev > 0 ? prev - 1 : filtered.length - 1
            );
        }

        if (e.key === "Enter" && activeIndex >= 0) {
            handleSelect(filtered[activeIndex].id);
        }

        if (e.key === "Escape") {
            setShow(false);
        }
    };

    return (
        <div ref={wrapperRef} className="relative w-full md:w-62">

            <div className="flex items-center border border-gray-800 rounded-md px-3 py-2">
                <input
                    value={query}
                    onChange={(e) => handleSearch(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Search products..."
                    className="outline-none text-base text-black"
                />
                <FiSearch className="ml-auto text-gray-800" />
            </div>

            {/* 📦 Dropdown */}
            {show && (
                <div className="absolute top-full left-0 w-full bg-white text-black shadow-lg rounded-lg mt-2 z-50 max-h-64 overflow-y-auto">
                    {filtered.length > 0 ? (
                        filtered.map((item, index) => (
                            <div
                                key={item.id}
                                onClick={() => handleSelect(item.id)}
                                className={`px-4 py-2 text-sm cursor-pointer transition ${index === activeIndex
                                    ? "bg-gray-200"
                                    : "hover:bg-gray-100"
                                    }`}
                            >
                                {item.name}
                            </div>
                        ))
                    ) : (
                        <div className="px-4 py-2 text-sm text-gray-500">
                            No products found
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}