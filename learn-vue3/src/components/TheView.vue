<template>
	<main>
		<div class="container py-4">
			<PostCreate @createPost="createPost" />
			<hr class="my-4" />
			<div class="row g-3">
				<div v-for="post in posts" :key="post.id" class="col col-4">
					<AppCard
						:type="post.type"
						:title="post.title"
						:contents="post.contents"
						:is-like="post.isLike"
						@toggle-like="post.isLike = !post.isLike"
					/>
				</div>
			</div>
			<hr class="my-4" />
			<!--
				modelValue
				update:modelValue
			-->
			<!-- :model-value="username"
				@update:model-value="value => (username = value)" -->
			<LabelInput v-model="username" label="이름" />
			<LabelTitle v-model:title="username" label="제목" />
			<UserName v-model:firstname="firstname" v-model:lastname="lastname" />
		</div>
	</main>
</template>

<script>
import { reactive, ref } from 'vue';
import AppCard from './AppCard.vue';
import PostCreate from './PostCreate.vue';
import LabelInput from './LabelInput.vue';
import LabelTitle from './LabelTitle.vue';
import UserName from './UserName.vue';
export default {
	components: {
		AppCard,
		PostCreate,
		LabelInput,
		LabelTitle,
		UserName,
	},
	setup() {
		const post = reactive({
			title: '제목2',
			contents: '내용2',
		});
		const posts = reactive([
			{
				key: 1,
				title: '제목1',
				contents: '내용1',
				isLike: true,
				type: 'news',
			},
			{
				key: 2,
				title: '제목2',
				contents: '내용2',
				isLike: false,
				type: 'notice',
			},
			{
				key: 3,
				title: '제목3',
				contents: '내용3',
				isLike: false,
				type: 'news',
			},
			{
				key: 4,
				title: '제목4',
				contents: '내용4',
				isLike: true,
				type: 'notice',
			},
			{
				key: 5,
				title: '제목5',
				contents: '내용5',
				isLike: true,
				type: 'news',
			},
			{
				key: 6,
				title: '제목6',
				contents: '내용6',
				isLike: false,
				type: 'notice',
			},
		]);
		const createPost = newPost => {
			console.log('createPost');
			console.log(newPost);
			posts.push(newPost);
		};
		const username = ref('');
		const firstname = ref('');
		const lastname = ref('');
		return { post, posts, createPost, username, firstname, lastname };
	},
};
</script>

<style lang="scss" scoped></style>
