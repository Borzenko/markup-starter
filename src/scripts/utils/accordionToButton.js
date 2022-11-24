import hasClass from "../utils/hasClass";
import toggleClass from "../utils/toggleClass";

export default function accordionToButton(iconBtn, parentEl, contentBox) {

  iconBtn.addEventListener('click', () => {

    if (!hasClass(parentEl, 'active')) {
      contentBox.style.maxHeight = null;
    }

    toggleClass(parentEl, 'active');

    (hasClass(parentEl, 'active'))
      ? contentBox.style.maxHeight = `${contentBox.scrollHeight}px`
      : contentBox.style.maxHeight = null;
  });
}
