"use client";

const BlogSearch = () => {
  return (
    <div className="relative flex justify-end">
      <div className="group">
        <input
          type="text"
          placeholder="Search"
          className="text-white w-[240px] outline-none focus:ring-2 bg-black border border-white/20 rounded-full py-2 px-3"
        />
        <i className="bx text-white bg-black absolute top-1/2 -translate-y-1/2 right-3 bx-search"></i>
      </div>
    </div>
  );
};

export default BlogSearch;
