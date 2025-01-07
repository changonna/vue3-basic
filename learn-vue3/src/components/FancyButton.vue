<template>
	<button class="fancy-btn">
		<slot fancy-message="Fancy Message">Default button</slot>
	</button>
</template>

<script>
export default {
	setup() {
		return {};
	},
};
</script>

<style lang="scss" scoped>
.fancy-btn {
	background-color: #f00;
	color: #fff;
	padding: 10px 20px;
	border: none;
	border-radius: 5px;
	cursor: pointer;
}
</style>
