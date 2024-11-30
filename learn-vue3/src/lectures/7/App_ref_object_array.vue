<template>
	<div>
		<p>count : {{ count }}</p>
		<p>state.count : {{ state.count }}</p>
	</div>
</template>

<script>
import { reactive, ref } from 'vue';

/**
 * ref 함수를 reactive 객체의 속성으로 사용시
 */
export default {
	setup() {
		const count = ref(0);
		const state = reactive({
			count,
		});
		console.log(count.value);
		// ref를 reactive 객체의 속성으로 사용시 자동으로 `ref.value`를 value unwrapping
		console.log(`state.count: ${state.count}`);
		return {
			count,
			state,
		};
	},
};
</script>

<style lang="scss" scoped></style>
