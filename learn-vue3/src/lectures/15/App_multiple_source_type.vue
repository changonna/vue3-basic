<template>
	<div></div>
</template>

<script>
import { reactive, ref, watch } from 'vue';

export default {
	setup() {
		const x = ref(0);
		const y = ref(0);

		const obj = reactive({
			count: 0,
		});

		// watch(
		// 	() => x.value + y.value,
		// 	sum => {
		// 		console.log('sum:' + sum);
		// 	},
		// );

		// watch([x, y], ([newX, newY]) => {
		// 	console.log(newX, newY);
		// });

		console.log(typeof obj.count);

		// watch(
		// 	// obj.count,
		// 	() => obj.count, // object의 속성으로 하려면 getter를 사용해야 한다.
		// 	(newValue, oldValue) => {
		// 		console.log('newValue:', newValue);
		// 		console.log('oldValue:', oldValue);
		// 	},
		// );

		// // object 타입을 감지할 때는 둘 다 같은 값
		// watch(obj, (newValue, oldValue) => {
		// 	console.log('newValue:', newValue);
		// 	console.log('oldValue:', oldValue);
		// });

		/* deep option */
		const person = reactive({
			name: 'John',
			age: 20,
			hobby: 'soccer',
			obj: {
				count: 0,
			},
		});

		// watch(
		// 	person,
		// 	newValue => {
		// 		console.log('newValue:', newValue);
		// 	},
		// );
		watch(
			() => person.obj, // getter는 object 자체가 바뀌어야된다.
			newValue => {
				console.log('newValue:', newValue);
			},
		);

		return { x, y, obj, person };
	},
};
</script>

<style lang="scss" scoped></style>
