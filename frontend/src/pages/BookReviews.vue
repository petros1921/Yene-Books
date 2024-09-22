<template>
  <div class="container mx-auto p-4">
    <h1 class="text-3xl font-bold mb-4">Book Reviews</h1>

    <div class="mb-4">
      <h2 class="text-2xl font-semibold mb-2">Post a Review</h2>
      <form @submit.prevent="postReview">
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2">Book Title</label>
          <input type="text" v-model="newReview.title" class="w-full px-3 py-2 border border-gray-300 rounded" required />
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2">Review</label>
          <textarea v-model="newReview.content" class="w-full px-3 py-2 border border-gray-300 rounded" required></textarea>
        </div>
        <button type="submit" class="w-full py-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700">Post Review</button>
      </form>
    </div>

    <div v-for="review in reviews" :key="review.id" class="mb-4 p-4 bg-white shadow-md rounded">
      <h3 class="text-xl font-semibold">{{ review.title }}</h3>
      <p class="mt-2">{{ review.content }}</p>
      <div class="mt-4 flex items-center space-x-2">
        <button @click="likeReview(review.id)" class="text-blue-600 hover:underline">Like ({{ review.likes }})</button>
        <button @click="dislikeReview(review.id)" class="text-red-600 hover:underline">Dislike ({{ review.dislikes }})</button>
        <button @click="toggleCommentBox(review.id)" class="text-gray-600 hover:underline">Comment</button>
      </div>
      <div v-if="review.showCommentBox" class="mt-4">
        <textarea v-model="review.newComment" class="w-full px-3 py-2 border border-gray-300 rounded" placeholder="Add a comment..."></textarea>
        <button @click="postComment(review.id)" class="mt-2 py-1 px-4 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700">Post Comment</button>
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
      { id: 1, title: 'Great Book', content: 'I loved it!', likes: 0, dislikes: 0, showCommentBox: false, newComment: '' },
      { id: 2, title: 'Not Bad', content: 'It was okay.', likes: 0, dislikes: 0, showCommentBox: false, newComment: '' },
    ]);

    const newReview = reactive({
      title: '',
      content: ''
    });

    const postReview = () => {
      if (newReview.title && newReview.content) {
        reviews.push({
          id: Date.now(), // or any other unique ID generation method
          ...newReview,
          likes: 0,
          dislikes: 0,
          showCommentBox: false,
          newComment: ''
        });
        newReview.title = '';
        newReview.content = '';
      }
    };

    const likeReview = (id) => {
      const review = reviews.find(r => r.id === id);
      if (review) review.likes++;
    };

    const dislikeReview = (id) => {
      const review = reviews.find(r => r.id === id);
      if (review) review.dislikes++;
    };

    const toggleCommentBox = (id) => {
      const review = reviews.find(r => r.id === id);
      if (review) review.showCommentBox = !review.showCommentBox;
    };

    const postComment = (id) => {
      const review = reviews.find(r => r.id === id);
      if (review && review.newComment) {
        // Handle posting the comment (e.g., save it to the server)
        console.log(`Comment posted for review ${id}: ${review.newComment}`);
        review.newComment = ''; // Clear comment box
      }
    };

    return {
      reviews,
      newReview,
      postReview,
      likeReview,
      dislikeReview,
      toggleCommentBox,
      postComment
    };
  }
};
</script>

<style scoped>
/* Add any necessary styles */
</style>

 