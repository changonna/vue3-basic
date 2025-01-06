<template>
	<LabelInput label="성" v-model="firstnameComputed" />
	<LabelInput label="이름" v-model="lastnameComputed" />
</template>

<script>
import { computed } from 'vue';
import LabelInput from './LabelInput.vue';

export default {
	components: {
		LabelInput,
	},
	props: ['firstname', 'lastname'],
	// emits: ['update:firstname', 'update:lastname'],

	setup(props, { emit }) {
		const firstnameComputed = computed({
			get() {
				return props.firstname;
			},
			set(value) {
				emit('update:firstname', value);
			},
		});

		const lastnameComputed = computed({
			get() {
				return props.lastname;
			},
			set(value) {
				emit('update:lastname', value);
			},
		});

		return { firstnameComputed, lastnameComputed };
	},
};
</script>

<style lang="scss" scoped></style>
