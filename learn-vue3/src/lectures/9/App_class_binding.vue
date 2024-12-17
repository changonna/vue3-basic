<template>
	<div>
		<div
			class="text"
			:class="[isActive ? 'active-class' : 'class', errorClass, classObject]"
		>
			텍스트 입니다.
		</div>
		<button v-on:click="toggle">toggle</button>
		<button v-on:click="hasError = !hasError">toggleError</button>
	</div>
</template>

<script>
import { computed, reactive, ref } from 'vue';

export default {
	setup() {
		const isActive = ref(true);
		const hasError = ref(false);

		// reacitve
		// const classObject = reactive({ active: isActive, 'text-danger': hasError });

		// computed
		// 조건이 여러개일 때 (&& ture)
		const classObject = computed(() => {
			return {
				active: isActive.value && true,
				'text-danger': hasError.value && true,
				'text-blue': true,
			};
		});

		// 배열로 넣어보자
		//배열에는 일반 텍스트, 삼항 연산자뿐만 아니라 객체도 가능
		const activeClass = ref('active');
		const errorClass = ref('text-danger');

		const toggle = () => {
			isActive.value = !isActive.value;
		};
		return { isActive, hasError, classObject, toggle, activeClass, errorClass };
	},
};
</script>

<style scoped>
.active {
	font-weight: 900;
}
.text-danger {
	color: red;
}
</style>
