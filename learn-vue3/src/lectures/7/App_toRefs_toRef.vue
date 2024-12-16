<template>
	<div>
		<p>author: {{ author }}</p>
		<p>title: {{ title }}</p>
	</div>
</template>

<script>
import { reactive, toRef, toRefs } from 'vue';

export default {
	setup() {
		const book = reactive({
			author: 'Vue Team',
			year: '2020',
			title: 'Vue 3 Guide',
			description: '당신은 지금 바로 책을 읽습니다.',
			price: '무료',
		});

		// toRefs
		const { author, title } = toRefs(book);
		console.log(author, title); // 'Vue Team' 'Vue 3 Guide'

		// toRef
		const year = toRef(book, 'year');
		console.log(year); // 2020

		return {
			author,
			title,
			book,
			year,
		};
	},
};
</script>

<style lang="scss" scoped></style>
