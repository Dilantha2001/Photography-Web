import React, { useState } from "react";
import blog1 from "../assets/bride11.jpg";
import blog2 from "../assets/bride12.jpg";
import blog3 from "../assets/bride13.jpg";
import blog4 from "../assets/bride14.jpg";
import blog5 from "../assets/bride15.jpg";
import blog6 from "../assets/bride16.jpg";

function Journal() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const blogPosts = [
    {
      id: 1,
      title: "The Art of Documentary Wedding Photography",
      category: "photography-tips",
      date: "January 15, 2025",
      image: blog1,
      excerpt:
        "Understanding the documentary approach and how it preserves authentic moments with intention.",
      slug: "documentary-wedding-photography",
    },
    {
      id: 2,
      title: "Colorado Mountain Weddings: Choosing Your Location",
      category: "planning",
      date: "January 10, 2025",
      image: blog2,
      excerpt:
        "A guide to the most stunning Colorado wedding venues from Vail to Aspen to Telluride.",
      slug: "colorado-wedding-venues",
    },
    {
      id: 3,
      title: "How to Feel Calm in Front of the Camera",
      category: "couples-tips",
      date: "January 5, 2025",
      image: blog3,
      excerpt:
        "Simple practices to ground yourself and be fully present on your wedding day.",
      slug: "camera-comfort",
    },
    {
      id: 4,
      title: "Golden Hour: Why Timing Matters for Your Wedding Photography",
      category: "photography-tips",
      date: "December 28, 2024",
      image: blog4,
      excerpt:
        "Exploring how soft, warm light transforms your wedding day into timeless imagery.",
      slug: "golden-hour-guide",
    },
    {
      id: 5,
      title: "Building Connection: The Pre-Wedding Consultation",
      category: "planning",
      date: "December 20, 2024",
      image: blog5,
      excerpt:
        "Why getting to know your photographer before the big day creates better images.",
      slug: "pre-wedding-consultation",
    },
    {
      id: 6,
      title: "Elopement Trends: Intimate Celebrations in Beautiful Locations",
      category: "inspiration",
      date: "December 15, 2024",
      image: blog6,
      excerpt:
        "The rise of intimate weddings and how to plan your perfect Colorado elopement.",
      slug: "elopement-trends",
    },
  ];

  const categories = [
    { label: "All", value: "all" },
    { label: "Photography Tips", value: "photography-tips" },
    { label: "Planning & Inspiration", value: "planning" },
    { label: "Couples' Tips", value: "couples-tips" },
    { label: "Inspiration", value: "inspiration" },
  ];

  const filteredPosts =
    selectedCategory === "all"
      ? blogPosts
      : blogPosts.filter((post) => post.category === selectedCategory);

  return (
    <>
      {/* Hero Section */}
      <div className="bg-white pt-32 pb-20 px-[5%]">
        <div className="max-w-7xl mx-auto">
          <h1 className="font-noto-serif font-light text-6xl italic text-center text-gray-800 mb-6">
            The Journal
          </h1>
          <p className="text-center text-lg text-gray-500 font-noto-serif font-light max-w-3xl mx-auto">
            Stories, insights, and reflections on wedding photography, presence,
            and celebrating love in beautiful places.
          </p>
        </div>
      </div>

      {/* Category Filter */}
      <div className="bg-white border-t border-b border-gray-200 py-8 px-[5%]">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-center gap-6 flex-wrap">
            {categories.map((category) => (
              <button
                key={category.value}
                onClick={() => setSelectedCategory(category.value)}
                className={`uppercase text-sm font-noto-serif font-light tracking-wider transition-all ${
                  selectedCategory === category.value
                    ? "text-gray-800 border-b-2 border-gray-800 pb-2"
                    : "text-gray-400 hover:text-gray-600"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Blog Posts Grid */}
      <div className="bg-white py-20 px-[5%]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <a
                key={post.id}
                href={`/blog/${post.slug}`}
                className="group cursor-pointer"
              >
                <div className="overflow-hidden bg-gray-100 h-[400px] mb-4">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <p className="text-xs uppercase tracking-widest text-gray-400 font-noto-serif font-light mb-2">
                  {post.date}
                </p>
                <h3 className="text-2xl font-noto-serif font-light text-gray-800 mb-3 group-hover:text-gray-600 transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-500 font-noto-serif font-light leading-relaxed">
                  {post.excerpt}
                </p>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-amber-50 py-20 px-[5%]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-noto-serif font-light text-5xl italic text-gray-800 mb-6">
            Ready to Begin Your Story?
          </h2>
          <p className="text-lg text-gray-500 font-noto-serif font-light mb-8">
            Let's talk about your vision for your Colorado mountain wedding or
            destination celebration.
          </p>
          <button className="bg-gray-700 text-white py-4 px-12 uppercase text-sm font-noto-serif font-light tracking-wider hover:bg-gray-800 transition-colors">
            Inquire Now
          </button>
        </div>
      </div>
    </>
  );
}

export default Journal;
