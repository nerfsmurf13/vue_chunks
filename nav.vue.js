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
