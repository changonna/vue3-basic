<template>
	<div class="container py-4">
		<input ref="inputRef" type="text" value="abc" />
		<hr />
		<button @click="visible = !visible">Toggle Child</button>
		<LifeCycleChild v-if="visible"></LifeCycleChild>
		<p ref="pRef" id="message">{{ message }}</p>
	</div>
</template>

<script>
import { onBeforeMount, onBeforeUpdate, onMounted, onUpdated, ref } from 'vue';
import LifeCycleChild from './LifeCycleChild.vue';

export default {
	components: {
		LifeCycleChild,
	},
	setup() {
		const inputRef = ref(null);
		const message = ref('');
		const pRef = ref(null);
		const visible = ref(false);

		// console.log('setup');
		// onBeforeMount(() => {
		// 	console.log('onBeforeMount', inputRef.value);
		// });
		// onMounted(() => {
		// 	console.log('onMounted', inputRef.value.value);
		// });

		// onBeforeUpdate(() => {
		// 	console.log('onBeforeUpdate', message.value);
		// 	console.log('DOM Content: ', pRef.value.textContent);
		// });
		// onUpdated(() => {
		// 	console.log('onUpdated', message.value);
		// 	console.log('DOM Content: ', pRef.value.textContent);
		// });

		return { inputRef, message, pRef, visible };
	},
};
</script>

<style lang="scss" scoped></style>
