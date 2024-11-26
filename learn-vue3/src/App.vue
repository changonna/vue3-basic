<template>
	<div>
		<h2>보간법</h2>
		<p>
			{{ message }}
		</p>
		<p v-once>
			{{ message }}
		</p>
		<button v-on:click="clickButton">Click!</button>
		<hr />
		<h2>HTML</h2>
		<p>{{ rawHtml }}</p>
		<p v-html="rawHtml"></p>
		<h2>속성 바인딩</h2>
		<div v-bind:title="dynamicTitle">마우스를 올려보세요</div>
		<div :title="dynamicTitle">마우스를 올려보세요</div>
		<input type="text" value="홍길동" v-bind:disabled="isInputDisabled" />
		<input v-bind="attrs" />
		<h2>JavaScript</h2>
		{{ message.split('').reverse().join('') }}<br />
		{{ isInputDisabled ? '예' : '아니오' }}
	</div>
</template>

<script>
import { ref } from 'vue';

export default {
	setup() {
		const message = ref('hello vue3');
		const rawHtml = ref('<strong>Hello vue3</strong>');
		const dynamicTitle = ref('안녕하세요!@!@');
		const isInputDisabled = ref(true);
		const attrs = ref({
			type: 'text',
			value: '1234',
			disabled: true,
		});

		const clickButton = () => {
			message.value += '!';
		};

		return {
			message,
			clickButton,
			rawHtml,
			dynamicTitle,
			isInputDisabled,
			attrs,
		};
	},
};
</script>

<style lang="scss" scoped></style>
