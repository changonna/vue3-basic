<template>
	<div>
		<p>{{ message }}</p>
		<p>{{ reverseMessage }}</p>
	</div>
</template>

<script>
import { ref, watch } from 'vue';

export default {
	setup() {
		const message = ref('Hello Vue3');
		const reverseMessage = ref('');

		/* 1. watch에 immediate 설정 */
		const reverseFunction = newValue => {
			console.log('즉시 실행!');
			reverseMessage.value = newValue.split('').reverse().join('');
		};

		watch(message, reverseFunction, { immediate: true });

		/* 2. message.value를 넣어 직접 실행 */
		// const reverseFunction = newValue => {
		// 	console.log('즉시 실행!');
		// 	reverseMessage.value = newValue.split('').reverse().join('');
		// };

		// watch(message, reverseFunction);
		// reverseFunction(message.value);

		/* 3. newValue 대신 message.value */
		// const reverseFunction = () => {
		// 	console.log('즉시 실행!');
		// 	reverseMessage.value = message.value.split('').reverse().join('');
		// };

		// watch(message, reverseFunction);
		// reverseFunction();

		return { message, reverseMessage };
	},
};
</script>

<style lang="scss" scoped></style>
