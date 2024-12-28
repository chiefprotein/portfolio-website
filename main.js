// Function to open the modal and display the clicked image
function openModal(img) {
  const modal = document.getElementById("certificateModal");
  const modalImg = document.getElementById("modalImg");

  modal.style.display = "block";
  modalImg.src = img.src;
}

// Function to close the modal
function closeModal() {
  const modal = document.getElementById("certificateModal");
  modal.style.display = "none";
}