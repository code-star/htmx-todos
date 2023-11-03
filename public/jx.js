const init = () => {
  const formNodes = document.querySelectorAll("form[jx-post]");

  Array.from(formNodes).map((form) => {
    form.addEventListener("submit", async (ev) => {
      ev.preventDefault();

      const postUrl = form.getAttribute("jx-post");

      const formData = new FormData(form);

      const response = await fetch(postUrl, {
        method: "POST",
        body: new URLSearchParams(formData),
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }).then((data) => data.text());

      const swapTarget = form.getAttribute("jx-swap");
      form[swapTarget] = response;

      init();
    });
  });
};

window.addEventListener("load", (ev) => {
  init();
});
