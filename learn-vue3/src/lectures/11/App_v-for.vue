<template>
	<div>
		<ul>
			<template v-for="(item, index) in evenItems" :key="item.id">
				<!-- <li v-if="item.id % 2 === 0"> -->
				<li>ID: {{ item.id }}, index: {{ index }}, {{ item.message }}</li>
			</template>
			<!-- <li v-for="item in items" :key="item.id">
				{{ item.message }}
			</li> -->
		</ul>
		<hr />
		<ul>
			<li v-for="(value, key, index) in myObject" :key="key">
				{{ index }} - {{ key }}- {{ value }}
			</li>
		</ul>
	</div>
</template>

<script>
import { computed, reactive } from 'vue';

export default {
	setup() {
		const items = reactive([
			{ id: 1, message: 'Java' },
			{ id: 2, message: 'HTML' },
			{ id: 3, message: 'CSS' },
			{ id: 4, message: 'JavaScript' },
		]);

		const evenItems = computed(() => items.filter(item => item.id % 2 === 0));

		const myObject = reactive({
			title: '제목',
			author: '홍길동',
			publishedAt: '2024-12-26',
		});

		return { items, evenItems, myObject };
	},
};
</script>

<style scoped></style>
