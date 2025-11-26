// Footer Copyright Module with Template Literals
export function renderCopyright() {
  const currentYear = new Date().getFullYear();
  const copyrightDiv = document.createElement('div');
  copyrightDiv.className = 'text-center text-grey-400 text-sm';
  copyrightDiv.innerHTML = `
    <p>&copy; ${currentYear} ClearSkin. All rights reserved.</p>
  `;
  return copyrightDiv;
}
