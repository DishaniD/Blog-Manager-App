import { create } from "zustand";

interface Post {
  id: number;
  title: string;
  body: string;
  imageUrl: string;
}

interface PostStore {
  posts: Post[];
  addPost: (post: Post) => void;
  editPost: (post: Post) => void;
  deletePost: (id: number) => void;
  fetchPosts: () => Promise<void>;
}

const imagePaths = [
  "/images/1.jpg", "/images/2.jpg", "/images/3.jpg", "/images/4.jpg",
  "/images/5.jpg", "/images/6.jpg", "/images/7.jpg", "/images/8.jpg",
  "/images/9.jpg", "/images/10.jpg",
];

export const usePostStore = create<PostStore>((set) => ({
  posts: [],

  fetchPosts: async () => {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await response.json();
      set({
        posts: data.map((post: any, index: number) => ({
          ...post,
          imageUrl: imagePaths[index % imagePaths.length],
        })),
      });
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  },

  addPost: (post) =>
    set((state) => ({
      posts: [{ ...post, id: Date.now(), imageUrl: imagePaths[Math.floor(Math.random() * imagePaths.length)] }, ...state.posts],
    })),

  editPost: (updatedPost) =>
    set((state) => ({
      posts: state.posts.map((post) => (post.id === updatedPost.id ? updatedPost : post)),
    })),

  deletePost: (id) =>
    set((state) => ({
      posts: state.posts.filter((post) => post.id !== id),
    })),
}));
