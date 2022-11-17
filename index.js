document.querySelectorAll("input[type='radio']").forEach(() => {
  input.onclick = () => {
    document.documentElement.classList.add(input.id);
  };
});
