// Used to hold existing open modal
openModal = undefined;

function modalBackgroundClick(event, modalName)
{
  var modal = document.getElementById(modalName);
  if (event.target === modal) {
    turnOffModal(modal);
  }
}

function turnOnModal(modalName, event) {
  if (modal == undefined) {
    var modal = document.getElementById(modalName);
    modal.classList.add('bg-active');
    openModal = modal;
  }
}

function turnOffModal(modalName) {
  var modal = document.getElementById(modalName);
  modal.classList.remove('bg-active');
  openModal = null;
}
