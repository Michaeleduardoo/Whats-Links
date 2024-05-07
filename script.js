new Vue({
  el: "#app",
  data: {
    prefix: "55",
    phone: "",
    text: "",
    link: "",
  },
  methods: {
    gerarLink() {
      if (this.phone !== "") {
        this.link = `https://wa.me/${this.prefix}${
          this.phone
        }?text=${encodeURIComponent(this.text)}`;
        this.phone = "";
        this.text = "";
      }
    },
  },
});
