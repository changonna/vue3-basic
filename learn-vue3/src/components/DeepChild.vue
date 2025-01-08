<template>
	<div class="card">
		<div class="card-header">Deep Child Component</div>
		<div class="cardv-body">
			<p>{{ message }}</p>
			<p>{{ count }}</p>
			<button @click="upCount">Button</button>
			<p>{{ staticMessage }}</p>
		</div>
	</div>
</template>

<script>
import { inject } from 'vue';
export default {
	setup() {
		const message = inject('message');
		const { count, upCount } = inject('count');
		const staticMessage = inject('static-message', 'default static message');
		count.value = count.value + 1;
		return { message, count, upCount, staticMessage };
	},
};
</script>

<style lang="scss" scoped></style>
