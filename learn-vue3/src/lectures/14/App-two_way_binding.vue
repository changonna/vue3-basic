<template>
	<div>
		<h2>input value</h2>
		<!-- <input type="text" v-model.lazy="inputValue" /> -->
		<!-- <input type="text" v-model.number="inputValue" /> -->
		<input type="text" v-model.trim="inputValue" />
		<div>{{ typeof inputValue }}</div>

		<h2>textarea value</h2>
		<textarea v-model="textAreaValue"></textarea>
		<div>{{ textAreaValue }}</div>

		<h2>checkbox value</h2>
		<label for="checkbox">{{ checkboxValue }}</label>
		<input type="checkbox" id="checkbox" v-model="checkboxValue" />

		<h3>checkbox values</h3>
		<label>
			<input type="checkbox" value="html" v-model="checkboxValues" />
			HTML
		</label>
		<label>
			<input type="checkbox" value="css" v-model="checkboxValues" />
			CSS
		</label>
		<label>
			<input type="checkbox" value="js" v-model="checkboxValues" />
			JS
		</label>
		<div>
			{{ checkboxValues }}
		</div>

		<h2>radio value</h2>
		<label>
			<input type="radio" name="type" value="O" v-model="radioValue" />
			O형
		</label>
		<label>
			<input type="radio" name="type" value="A" v-model="radioValue" />
			A형
		</label>
		<div>
			{{ radioValue }}
		</div>
		<h2>select value</h2>
		<select v-model="selectValue">
			<option value="html">html</option>
			<option value="css">css</option>
			<option value="js">js</option>
		</select>
		<div>{{ selectValue }}</div>
	</div>
</template>

<script>
import { ref } from 'vue';
export default {
	setup() {
		const inputValue = ref('');
		const textAreaValue = ref('');
		const checkboxValue = ref(true);
		const checkboxValues = ref([]);
		const radioValue = ref('O');
		const selectValue = ref('html');
		return {
			inputValue,
			textAreaValue,
			checkboxValue,
			checkboxValues,
			radioValue,
			selectValue,
		};
	},
};
</script>

<style scoped></style>
