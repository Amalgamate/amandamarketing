(() => {
    const logoGrid = document.querySelector('#client-portfolio .clients-grid-container');
    if (!logoGrid) return;

    const logos = Array.from(logoGrid.children);
    const logosPerRow = Math.ceil(logos.length / 3);
    const directions = ['scroll-left', 'scroll-right', 'scroll-left'];

    logoGrid.replaceChildren();

    for (let rowIndex = 0; rowIndex < 3; rowIndex += 1) {
        const row = document.createElement('div');
        row.className = `client-logo-row client-logo-row-${directions[rowIndex]}`;

        const track = document.createElement('div');
        track.className = 'client-logo-track';

        const group = document.createElement('div');
        group.className = 'client-logo-group';
        group.append(...logos.slice(rowIndex * logosPerRow, (rowIndex + 1) * logosPerRow));

        const duplicate = group.cloneNode(true);
        duplicate.setAttribute('aria-hidden', 'true');
        duplicate.querySelectorAll('a').forEach((link) => link.setAttribute('tabindex', '-1'));

        track.append(group, duplicate);
        row.append(track);
        logoGrid.append(row);
    }
})();
