<template>
	<div class="card">
		<div class="card-body">
			<span class="badge text-bg-secondary">{{ typeName }}</span>
			<h5 class="card-title red mt-2">{{ title }}</h5>
			<p class="card-text">
				{{ contents }}
			</p>
			<a href="#" class="btn" :class="isLikeClass" @click="toggleLike"
				>좋아요</a
			>
		</div>
	</div>
</template>

<script>
import { computed } from 'vue';

export default {
	props: {
		type: {
			type: String,
			default: 'news',
			validator: value => {
				return ['news', 'notice'].includes(value);
			},
		},
		title: {
			type: String,
			required: true,
		},
		contents: {
			type: String,
			required: true,
		},
		isLike: {
			type: Boolean,
			default: false,
		},
		obj: {
			type: Object,
			default: () => ({}),
		},
	},
	emits: ['toggleLike'],
	setup(props, context) {
		const typeName = computed(() =>
			props.type === 'news' ? '뉴스' : '공지사항',
		);
		const isLikeClass = computed(() =>
			props.isLike ? 'btn-danger' : 'btn-outline-danger',
		);
		const toggleLike = () => {
			context.emit('toggleLike');
		};

		return { typeName, isLikeClass, toggleLike };
	},
};
</script>

<style></style>
