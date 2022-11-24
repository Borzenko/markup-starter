export default function forEach(target, fn) {
  Object.keys(target).forEach((key) => {
    fn(key, target[key], target);
  });
}
