<template>
  <div class="container mx-auto p-4">
    <h1 class="text-3xl font-bold mb-4">Book Reviews</h1>

    <!-- Post a Review Section -->
    <div class="mb-4">
      <h2 class="text-2xl font-semibold mb-2">Post a Review</h2>
      <form @submit.prevent="postReview">
        <!-- Book Title Input -->
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2">Book Title</label>
          <input
            type="text"
            v-model="newReview.title"
            class="w-full px-3 py-2 border border-gray-300 rounded"
            required
          />
        </div>

        <!-- Author Input -->
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2">Author</label>
          <input
            type="text"
            v-model="newReview.author"
            class="w-full px-3 py-2 border border-gray-300 rounded"
            required
          />
        </div>

        <!-- Review Content Input -->
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2">Review</label>
          <textarea
            v-model="newReview.content"
            class="w-full px-3 py-2 border border-gray-300 rounded"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          class="w-full py-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700"
        >
          Post Review
        </button>
      </form>
    </div>

    <!-- Display Reviews Section -->
    <div v-for="(review, index) in reviews" :key="review.id" class="mb-4 p-4 bg-white shadow-md rounded">
      <h3 class="text-xl font-semibold">{{ review.title }}</h3>
      <p class="text-sm text-gray-600">by {{ review.author }}</p> <!-- Display Author -->
      <p class="mt-2">{{ review.content }}</p>

      <div class="mt-4 flex items-center space-x-2">
        <button @click="likeReview(review.id)" class="text-blue-600 hover:underline">
          Like ({{ review.likes }})
        </button>
        <button @click="dislikeReview(review.id)" class="text-red-600 hover:underline">
          Dislike ({{ review.dislikes }})
        </button>
        <button @click="toggleCommentBox(review.id)" class="text-gray-600 hover:underline">
          Comment
        </button>
        <button @click="deleteReview(index)" class="text-red-600 hover:underline">
          Delete
        </button>
      </div>

      <!-- Comment Box -->
      <div v-if="review.showCommentBox" class="mt-4">
        <textarea
          v-model="review.newComment"
          class="w-full px-3 py-2 border border-gray-300 rounded"
          placeholder="Add a comment..."
        ></textarea>
        <button
          @click="postComment(review.id)"
          class="mt-2 py-1 px-4 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700"
        >
          Post Comment
        </button>
      </div>

      <!-- Display Comments -->
      <div v-if="review.comments.length" class="mt-4">
        <h4 class="text-lg font-semibold">Comments</h4>
        <ul class="list-disc pl-5">
          <li v-for="(comment, index) in review.comments" :key="index" class="text-gray-700">
            {{ comment }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from 'vue';

export default {
  name: 'BookReviews',
  setup() {
    const reviews = reactive([
      {
        id: 1,
        title: 'Becoming',
        author: 'Michelle Obama',
        content: 'I loved it! I recommend this book for all of you guys.',
        likes: 0,
        dislikes: 0,
        showCommentBox: false,
        newComment: '',
        comments: [],
      },
      {
        id: 2,
        title: 'To Kill a Mockingbird',
        author: 'Harper Lee',
        content: 'It was one of the GREATEST books I have ever read!',
        likes: 0,
        dislikes: 0,
        showCommentBox: false,
        newComment: '',
        comments: [],
      },
    ]);

    const newReview = reactive({
      title: '',
      author: '',
      content: '',
    });

    const postReview = () => {
      if (newReview.title && newReview.author && newReview.content) {
        // Add the new review to the beginning of the reviews array
        reviews.unshift({
          id: Date.now(),
          ...newReview,
          likes: 0,
          dislikes: 0,
          showCommentBox: false,
          newComment: '',
          comments: [],
        });
        newReview.title = '';
        newReview.author = '';
        newReview.content = '';
      }
    };

    const likeReview = (id) => {
      const review = reviews.find((r) => r.id === id);
      if (review) review.likes++;
    };

    const dislikeReview = (id) => {
      const review = reviews.find((r) => r.id === id);
      if (review) review.dislikes++;
    };

    const toggleCommentBox = (id) => {
      const review = reviews.find((r) => r.id === id);
      if (review) review.showCommentBox = !review.showCommentBox;
    };

    const postComment = (id) => {
      const review = reviews.find((r) => r.id === id);
      if (review && review.newComment) {
        review.comments.push(review.newComment);
        review.newComment = ''; // Clear the comment input
      }
    };

    const deleteReview = (index) => {
      reviews.splice(index, 1); // Delete review at the given index
    };

    return {
      reviews,
      newReview,
      postReview,
      likeReview,
      dislikeReview,
      toggleCommentBox,
      postComment,
      deleteReview,
    };
  },
};
</script>

<style scoped>
/* Add any necessary styles */
</style>



 