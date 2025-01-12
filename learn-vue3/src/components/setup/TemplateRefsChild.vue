<template>
	<div>
		{{ $parent }}
		<ul>
			<li v-for="fruit in $parent.fruits" :key="fruit">
				{{ fruit }}
			</li>
		</ul>
	</div>
</template>

<script setup>
import { ref } from 'vue';
const message = ref('child-message');
const sayHello = () => {
	alert('say Hello');
};
defineExpose({
	message,
	sayHello,
});
</script>

<style lang="scss" scoped></style>
