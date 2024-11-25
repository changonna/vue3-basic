<template>
	<div>
		<h2>반응형 메시지</h2>
		<p>{{ reactiveMessage }}</p>
		<button v-on:click="clickReactiveMessage">반응형 메시지 버튼</button>

		<h2>일반 메시지</h2>
		<p>{{ normalMessage }}</p>
		<button v-on:click="clickNormalMessage">일반 메시지 버튼</button>
	</div>
</template>

<script>
import { onBeforeMount, onMounted, ref } from 'vue';

export default {
	setup() {
		console.log('setup()');

		const reactiveMessage = ref('reactive message');
		const clickReactiveMessage = () => {
			reactiveMessage.value += '!';
		};
		// console.log(isRef(reactiveMessage));
		let normalMessage = 'message';
		const clickNormalMessage = () => {
			normalMessage += '!';
		};
		// console.log(isRef(normalMessage));

		onMounted(() => {
			console.log('onMounted');
		});

		onBeforeMount(() => {
			console.log('onBeforeMount');
		});

		return {
			reactiveMessage,
			clickReactiveMessage,
			normalMessage,
			clickNormalMessage,
			onMounted,
			onBeforeMount,
		};
	},
};
</script>

<style lang="scss" scoped></style>
