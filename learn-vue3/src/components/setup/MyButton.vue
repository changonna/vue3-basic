<template>
	<div class="p-3 bg-danger">
		<!-- v-bind="$attrs" -->
		<button class="btn btn-primary" type="button" v-bind="$attrs">
			My Button {{ msg }}
		</button>
		<!-- {{ $attrs }}-->
	</div>
</template>

<script>
export default {
	inheritAttrs: false,
};
</script>
<script setup>
import { ref } from 'vue';
const msg = ref('msg');
</script>

<style lang="scss" scoped></style>
