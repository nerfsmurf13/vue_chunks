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

createApp({
  data() {
    return {
      menu: ["Home", "About", "Services", "Products"],
      message: "Hello Vue!",
    };
  },
  template: `
		<nav>
			<a v-for="item in menu" href="#" >{{item}}</a>
		</nav>
	`,
}).mount("#nav");
