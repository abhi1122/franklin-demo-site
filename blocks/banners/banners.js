import { createOptimizedPicture } from '../../scripts/lib-franklin.js';

export default function decorate(block) {
  /* change to ul, li */
  // const div = document.createElement('div');
  // const h1 = document.createElement('h1');
  // const p = document.createElement('p');
  // div.append(h1);
  // div.append(p);
  // [...div.children].forEach((div) => {
  //   if (div.children.length === 1 && div.querySelector('picture')) div.className = 'banners-card-image';
  //   else div.className = 'banners-card-body';
  // });
  // div.querySelectorAll('img').forEach((img) => img.closest('picture').replaceWith(createOptimizedPicture(img.src, img.alt, false, [{ width: '750' }])));

  const div = document.createElement('div');
  div.className="banners-main"
  const div3 = document.createElement('div');

  [...block.children].forEach((row) => {
    div3.innerHTML=row.innerHTML;
    [...div3.children].forEach((div) => {
      if (div.children.length === 1 && div.querySelector('picture')) div.className = 'banners-banner-image';
      else div.className = 'banners-banner-body';
    });
  });

  div.append(div3);
  block.textContent = '';
  block.append(div);
}
