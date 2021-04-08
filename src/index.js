async function component() {
  const { default: _ } = await import('lodash');
  console.log(_.join([1, 2, 3, 4], '&'));
}

component();
