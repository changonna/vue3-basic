<template>
	<label class="form-label" id="child-id">
		{{ label }}
	</label>
	<input v-bind="$attrs" type="text" v-model="value" class="form-control" />
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
