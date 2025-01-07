<template>
	<main>
		<div class="container py-4">
			<MyButton
				class="parent-class"
				style="background-color: blueviolet !important"
				@say-hello="sayHello"
			></MyButton>
			<LabelInput label="이름" data-id="id입니다." />
			<FancyButton>Button <span style="color: blue">@@@</span></FancyButton>
			<FancyButton>
				<template v-slot="{ fancyMessage }">{{ fancyMessage }}</template>
			</FancyButton>
			<hr />
			<AppCard>
				<!-- v-bind v-on 을 #[]으로 변경 가능 -->
				<!-- <template #[slotArgs]>헤더</template>
				암시적으로 Default 슬롯입니다.
				<template #footer>푸터</template> -->
				<template #header="{ headerMessage }">
					{{ headerMessage }}
				</template>
				<template #default="{ childMessage, helloMessage }">
					디폴트입니다.
					<br />
					{{ childMessage }}
					<br />
					{{ helloMessage }}
				</template>
				<template #footer="{ footerMessage }">
					{{ footerMessage }}
				</template>
			</AppCard>
			<hr />
			<AppCard>
				<template #default>게시글입니다.</template>
			</AppCard>
		</div>
	</main>
</template>

<script>
import MyButton from './MyButton.vue';
import LabelInput from './LabelInput.vue';
import FancyButton from './FancyButton.vue';
import AppCard from '@/components/AppCard.vue	';
import { ref } from 'vue';
export default {
	components: {
		MyButton,
		LabelInput,
		FancyButton,
		AppCard,
	},
	setup() {
		const sayHello = () => {
			alert('Hello');
		};
		const slotArgs = ref('header');
		const message = ref('부모 메시지');
		return { sayHello, slotArgs, message };
	},
};
</script>

<style lang="scss" scoped></style>
