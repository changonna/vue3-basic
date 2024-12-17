<template>
	<div :style="styleObject2">
		<div>
			Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi qui unde
			libero voluptatem at deleniti ipsum perspiciatis tenetur. Ipsum
			necessitatibus quia deleniti, minus sint porro possimus vero harum
			molestiae molestias?
		</div>
		<button v-on:click="fontSize--">-</button>
		<button v-on:click="fontSize++">+</button>
	</div>
</template>

<script>
import { computed, reactive, ref } from 'vue';

export default {
	setup() {
		// v-디렉티브로 바인딩

		// 객체 바인딩
		const styleObject = reactive({
			color: 'red',
			fontSize: '13px',
		});

		const fontSize = ref(13);

		// computed
		const styleObject2 = computed(() => {
			return {
				color: 'red',
				fontSize: fontSize.value + 'px',
			};
		});
		return {
			styleObject,
			fontSize,
			styleObject2,
		};
	},
};
</script>

<style scoped></style>
