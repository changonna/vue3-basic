<template>
	<div>
		<h2>{{ teacher.name }}</h2>
		<h3>강의가 있습니까?</h3>
		<!-- <p>{{ teacher.lecture.length > 0 ? '있음' : '없음' }}</p> -->
		<p>{{ hasLecture }}</p>
		<p>{{ hasLecture }}</p>
		<p>{{ existLecture() }}</p>
		<p>{{ existLecture() }}</p>
		<button v-on:click="counter++">Counter: {{ counter }}</button>

		<h2>이름</h2>
		<p>{{ fullName }}</p>
	</div>
</template>

<script>
import { computed, reactive, ref } from 'vue';

export default {
	setup() {
		const teacher = reactive({
			name: 'ncg',
			lecture: ['html/css', 'javascript', 'vue3'],
		});

		// computed: 다음에 호출시 캐시된 데이터 사용
		// 반응형 데이터가 변경되는 시점
		// 성능면에서 우수
		const hasLecture = computed(() => {
			console.log('computed');
			return teacher.lecture.length > 0 ? '있음' : '없음';
		});

		const existLecture = () => {
			console.log('method');
			return teacher.lecture.length > 0 ? '있음' : '없음';
		};

		const counter = ref(0);

		const firstName = ref('홍');
		const lastName = ref('길동');

		const fullName = computed({
			get() {
				return firstName.value + lastName.value;
			},
			set(value) {
				console.log('value: ', value);
				console.log(value.split(' '));
				[firstName.value, lastName.value] = value.split(' ');
			},
		});
		console.log('Console 출력: ', fullName.value);
		fullName.value = '짐 코딩'; // set 함수 실행됨

		return {
			teacher,
			hasLecture,
			existLecture,
			counter,
			fullName,
		};
	},
};
</script>

<style lang="scss" scoped></style>
