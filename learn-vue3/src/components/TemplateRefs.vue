<template>
	<div class="conatiner py-4">
		<input ref="input" type="text" />
		<p>{{ input }}</p>
		<p v-if="input">
			{{ input.value }}, {{ $refs.input.value }}
			{{ $refs.input.value === input.value }}
		</p>

		<hr />
		<ul>
			<!-- <li v-for="fruit in fruits" :key="fruit" ref="itemRefs">
				{{ fruit }}
			</li> -->
			<li
				v-for="fruit in fruits"
				:key="fruit"
				:ref="el => itemRefs.push(el.textContent)"
			>
				<!-- :ref로 함수도 가능 -->
				{{ fruit }}
			</li>
		</ul>

		<hr />
		<TemplateRefChild ref="childRef"></TemplateRefChild>
	</div>
</template>

<script>
import { onMounted, ref } from 'vue';
import TemplateRefChild from './TemplateRefsChild.vue';
export default {
	components: {
		TemplateRefChild,
	},
	setup() {
		const input = ref(null);
		console.log('setup', input.value);

		onMounted(() => {
			input.value.value = 'Hello World';
			console.log('onMounted', input.value);

			itemRefs.value.forEach((item, index) => {
				console.log(index, item);
			});
			console.log('childRef', childRef.value.message);
			// childRef.value.sayHello();
		});

		const fruits = ref(['사과', '딸기', '포도']);
		const itemRefs = ref([]);
		const childRef = ref(null);
		return { input, fruits, itemRefs, childRef };
	},
};
</script>

<style lang="scss" scoped></style>
