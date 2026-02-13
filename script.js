// algemene helper
function setupModal(previewId, modalId, closeId) {
  const btn = document.getElementById(previewId);
  const modal = document.getElementById(modalId);
  const close = document.getElementById(closeId);

  if (!btn || !modal || !close) return;

  btn.addEventListener('click', () => {
    modal.style.display = 'flex';
  });

  close.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });
}

// bestaande CV-preview (als je die hebt)
setupModal('cvPreviewBtn', 'cvModal', 'cvClose');

// nieuwe certificaten
setupModal('teamleadPreviewBtn', 'teamleadModal', 'teamleadClose');
setupModal('memberPreviewBtn', 'memberModal', 'memberClose');
