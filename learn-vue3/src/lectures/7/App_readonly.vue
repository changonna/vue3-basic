<template>
	<div>
		<p>original: {{ original }}</p>
		<p>copy: {{ copy }}</p>
	</div>
</template>

<script>
import { reactive, readonly } from 'vue';

export default {
	setup() {
		const original = reactive({
			count: 0,
		});
		original.count++;
		console.log(original.count); // 1

		// readonly() 함수를 사용하여 original state를 readonly한 copy state를 만들어서 return
		const copy = readonly(original);
		copy.count++; // 경고 발생
		console.log(original.count); // 1
		return {
			original,
			copy,
		};
	},
};
</script>

<style lang="scss" scoped></style>
