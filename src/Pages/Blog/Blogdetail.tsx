import { useState } from "react";
import { motion } from "framer-motion";

const BlogDetails = ({ data }:any) => {
  console.log("blog", data);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPosts = data?.filter(
    (post:any) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div>
      <div className="min-h-screen pt-[84px]">
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-[#1C2431] text-white py-20 px-4 w-[85%] mx-auto rounded-lg"
        >
          <div className="max-w-3/4 mx-auto text-center ">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Resource Hub
            </h1>
            <div className="max-w-2xl mx-auto">
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full px-6 py-3 rounded-lg bg-white/20 border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/50 placeholder-white/70"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </motion.section>

        {/* Articles Grid */}
        <section className="max-w-7xl mx-auto px-4 py-16">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredPosts?.map((post:any, index:any) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-[#1C2431] rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <div className="p-6">
                  <span className="inline-block px-3 py-1 text-sm font-semibold bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 rounded-full mb-4">
                    {post.category}
                  </span>
                  <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                  <p className="text-white mb-4">{post.excerpt}</p>
                  <div className="flex justify-center items-center text-sm text-gray-500">
                    <span className="text-white">{post.date}</span>
                    <button className="ml-auto px-4 py-2 rounded-lg transition-colors
                    btn btn-outline bg-[#00C2FF] hover:bg-[#00F0FF] text-[#0A0F1C]
         mt-5 transitions">
                      Read More
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </section>
      </div>
    </div>
  );
};

export default BlogDetails;