<template>
	<div class="container py-4">
		<div class="card-header">ProvideInject Component</div>
		<div class="card-body">
			<Child></Child>
		</div>
	</div>
</template>

<script>
import { provide, readonly, ref } from 'vue';
import Child from './Child.vue';
export default {
	components: {
		Child,
	},
	setup() {
		const staticMessage = 'static message';
		const message = ref('message');
		const count = ref(10);
		const upCount = () => {
			count.value++;
		};

		// provide('static-message', staticMessage);
		provide('message', message);
		provide('count', { count: readonly(count), upCount });
		return {};
	},
};
</script>

<style lang="scss" scoped></style>
