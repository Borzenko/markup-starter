import toArray from './toArray';

export default function getNodes(selector, nodeEl = null) {
  return toArray(
    (
      nodeEl instanceof Element
        ? nodeEl
        : document
    )
      .querySelectorAll(selector)
  );
}
