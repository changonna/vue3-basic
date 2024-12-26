<template>
	<div>
		<p>{{ msg }}</p>
		<p v-text="msg"></p>
		<hr />
		<p v-html="htmlStr"></p>
		<p v-text="htmlStr"></p>
		<hr />
		<p v-pre>{{ msg 안녕하세요 }}</p>
		<p>{{ msg }} !!</p>
		<p v-once>once {{ msg }} !!</p>
	</div>
</template>

<script>
import { ref } from 'vue';

export default {
	setup() {
		const msg = ref('안녕하세요.');
		const htmlStr = ref('<strong>안녕!</strong>');
		return { msg, htmlStr };
	},
};
</script>

<style scoped></style>
