<template>
	<div class="p-3 bg-danger">
		<!-- v-bind="$attrs" -->
		<button
			class="btn btn-primary"
			type="button"
			@click="sayHello"
			v-bind="$attrs"
		>
			My Button
		</button>
		<!-- {{ $attrs }}-->
	</div>
</template>

<script>
export default {
	emits: ['click'],
	inheritAttrs: false,
	setup(props, context) {
		console.log('context.attrs', context.attrs);

		const sayHello = () => {
			context.emit('sayHello');
		};

		return { sayHello };
	},
};
</script>

<style lang="scss" scoped></style>
