function getObjectType(target) {
    if (target.tagName === 'IMG') return 'image';
    if (target.tagName === 'P') return 'paragraph';
    if (target.tagName === 'H1' || target.tagName === 'H2' || target.tagName === 'H3') return 'heading';
    if (target.tagName === 'A') return 'link';
    if (target.tagName === 'UL' || target.tagName === 'LI') return 'list';
    if (target.tagName === 'SECTION' || target.tagName === 'DIV') return 'container';
    if (target.tagName === 'BUTTON') return 'button';
    return 'other';
}

window.addEventListener('load', () => {
    const timestamp = new Date().toISOString();
    console.log(`${timestamp}, view, entire page`);
});

document.addEventListener('click', (event) => {
    const timestamp = new Date().toISOString();
    const type = 'click';
    const objectType = getObjectType(event.target);
    console.log(`${timestamp}, ${type}, ${objectType}`);
});
