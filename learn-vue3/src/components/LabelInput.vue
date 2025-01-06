<template>
	<label>
		{{ label }}
		<!-- v-model="username" -->
		<input type="text" v-model="value" />
	</label>
	<!-- :value="modelValue"
    @input="e => $emit('update:modelValue', e.target.value)" -->
</template>

<script>
import { computed } from 'vue';

export default {
	props: ['modelValue', 'label'],
	emits: ['update:modelValue'],
	setup(props, { emit }) {
		const value = computed({
			get: () => props.modelValue,
			set: value => emit('update:modelValue', value),
		});
		return { value };
	},
};
</script>

<style lang="scss" scoped></style>
