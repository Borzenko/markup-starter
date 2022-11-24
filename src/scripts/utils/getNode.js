export default function getNode(selector, nodeEl = null) {
  return (nodeEl instanceof Element ? nodeEl : document).querySelector(
    selector,
  );
}
