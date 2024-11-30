<template>
	<div>
		<p>{{ reactiveObj }}</p>
		<button v-on:click="addReactiveObj">add reactive obj</button>

		<p>{{ message }}</p>
		<button v-on:click="addMessage">add message</button>

		<p>{{ refMsg }}</p>
		<button v-on:click="addRefMsg">add Ref Msg</button>
	</div>
</template>

<script>
import { reactive, ref } from 'vue';
/**
 * reactive() : 객체 타입에만 동작
 * ref() : 기본타입(number, string,boolean)을 반응형으로 만들고자 할 때
 */
export default {
	setup() {
		const reactiveObj = reactive({
			value: 1,
			message: 'hi',
		});
		const addReactiveObj = () => {
			reactiveObj.value += 1;
			reactiveObj.message += '!';
		};

		console.log(typeof reactiveObj); // object

		const message = reactive('hi');
		const addMessage = () => {
			message.value += '!';
		};

		console.log(typeof message); // string

		const refMsg = ref('bye');
		const addRefMsg = () => {
			refMsg.value += '!';
		};
		return {
			reactiveObj,
			addReactiveObj,
			message,
			addMessage,
			refMsg,
			addRefMsg,
		};
	},
};
</script>

<style lang="scss" scoped></style>
