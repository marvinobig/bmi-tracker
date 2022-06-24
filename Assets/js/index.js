// bmi form modal
const modal = document.getElementById("modal");

const openModal = document.getElementById("show-modal");
openModal.addEventListener("click", showModalForm);

const closeModal = document.getElementById("close-modal");
closeModal.addEventListener("click", closeModalForm);

function showModalForm() {
  modal.showModal();
}

function closeModalForm() {
  modal.close();
}

//bmi calculations
