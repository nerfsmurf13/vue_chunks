const { createApp } = Vue;

createApp({
  data() {
    return {
      message: "Hello Vue!",
    };
  },
  template: `
	<p>this is a test</p>
	<div>Div</div>
	<ul>
	<li>love me or hate me</li></ul>
	`,
}).mount("#app");
