<template>
	<main>
		<div class="container py-4">
			<MyButton
				class="parent-class"
				style="background-color: blueviolet !important"
				@say-hello="sayHello"
			></MyButton>
			<LabelInput label="이름" data-id="id입니다." />
		</div>
	</main>
</template>

<script>
import MyButton from './MyButton.vue';
import LabelInput from './LabelInput.vue';
export default {
	components: {
		MyButton,
		LabelInput,
	},
	setup() {
		const sayHello = () => {
			alert('Hello');
		};
		return { sayHello };
	},
};
</script>

<style lang="scss" scoped></style>
