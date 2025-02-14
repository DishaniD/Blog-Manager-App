import React, { useEffect, useState } from "react";
import SearchFilter from "./SearchFilter";
import { usePostStore } from "./store/usePostStore";

const Home: React.FC = () => {
  const { posts, fetchPosts, addPost, editPost, deletePost } = usePostStore();
  const [filterText, setFilterText] = useState("");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const [showNewPostModal, setShowNewPostModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [editPostData, setEditPostData] = useState<{ id: number; title: string; body: string; imageUrl: string } | null>(null);
  const [newPost, setNewPost] = useState({ title: "", body: "" });

  useEffect(() => {
    fetchPosts();
  }, []);

  // ✅ Show only 6 posts and apply filtering & sorting
  const filteredPosts = posts
    .filter((post) => post.title.toLowerCase().includes(filterText.toLowerCase()))
    .sort((a, b) => (sortOrder === "asc" ? a.title.localeCompare(b.title) : b.title.localeCompare(a.title)))
    .slice(0, 6); // ✅ Limit to 6 posts only

  const handleNewPost = () => {
    setShowNewPostModal(true);
  };

  const saveNewPost = () => {
    if (!newPost.title.trim() || !newPost.body.trim()) return;

    const newId = posts.length > 0 ? Math.max(...posts.map((p) => p.id)) + 1 : 1;
    addPost({ id: newId, title: newPost.title, body: newPost.body, imageUrl: "/images/default.jpg" });

    setShowNewPostModal(false);
    setNewPost({ title: "", body: "" });
  };

  const handleEdit = (post: { id: number; title: string; body: string; imageUrl: string }) => {
    setEditPostData(post);
    setShowEditModal(true);
  };

  const handleSaveEdit = () => {
    if (editPostData) {
      editPost(editPostData);
      setShowEditModal(false);
    }
  };

  const handleDeletePost = () => {
    if (editPostData) {
      deletePost(editPostData.id);
      setShowEditModal(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-6">Latest Blog Posts</h1>

      <div className="mb-16">
        <SearchFilter
          filterText={filterText}
          setFilterText={setFilterText}
          handleSort={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}
          onAddNew={handleNewPost}
        />
      </div>

      {/*  displaying only 6 posts */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPosts.map((post) => (
          <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-full transition-shadow duration-300 hover:shadow-lg">
            <div className="overflow-hidden">
              <img
                src={post.imageUrl || "/images/default.jpg"}
                alt="Post Thumbnail"
                className="w-full h-60 object-cover transition-transform duration-300 transform hover:scale-110"
                onError={(e) => { e.currentTarget.src = "/images/default.jpg"; }}
              />
            </div>
            <div className="p-4 flex flex-col flex-grow">
              <h3 className="text-sm text-light-blue-500 font-semibold uppercase mb-2">Category</h3>
              <h2 className="text-lg font-bold text-light-blue-500 mb-2 hover:text-sky-500 transition-colors duration-300">
                {post.title}
              </h2>
              <p className="text-gray-700 text-sm mb-4">by Penci Design ● October 22, 2021</p>
              <div className="flex justify-end space-x-2 mt-auto">
                <button className="bg-blue-500 text-white px-2 py-1 text-xs rounded" onClick={() => handleEdit(post)}>
                  Edit
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ✅ New Project Modal with Cancel Button */}
      {showNewPostModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg w-96">
            <h2 className="text-xl font-bold mb-4">Create New Post</h2>
            <input
              type="text"
              placeholder="Title"
              value={newPost.title}
              onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
              className="w-full border p-2 mb-2"
            />
            <textarea
              placeholder="Content"
              value={newPost.body}
              onChange={(e) => setNewPost({ ...newPost, body: e.target.value })}
              className="w-full border p-2 h-40"
            ></textarea>
            <div className="flex justify-end space-x-4 mt-4">
              <button className="bg-gray-500 text-white px-4 py-2 rounded" onClick={() => setShowNewPostModal(false)}>
                Cancel
              </button>
              <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={saveNewPost}>
                Save Post
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ✅ Edit Modal */}
      {showEditModal && editPostData && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg w-96">
            <h2 className="text-xl font-bold mb-4">Edit Post</h2>
            <input
              type="text"
              value={editPostData.title}
              onChange={(e) => setEditPostData({ ...editPostData, title: e.target.value })}
              className="w-full border p-2 mb-2"
            />
            <textarea
              value={editPostData.body}
              onChange={(e) => setEditPostData({ ...editPostData, body: e.target.value })}
              className="w-full border p-2 h-40"
            ></textarea>
            <div className="flex justify-end space-x-4 mt-4">
              <button className="bg-gray-500 text-white px-4 py-2 rounded" onClick={() => setShowEditModal(false)}>
                Cancel
              </button>
              <button className="bg-red-500 text-white px-4 py-2 rounded" onClick={handleDeletePost}>
                Delete
              </button>
              <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={handleSaveEdit}>
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
