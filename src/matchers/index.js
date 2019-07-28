import toHaveEmitted from './toHaveEmitted';

const imports = {
  toHaveEmitted
};

export default Object.keys(imports)
  .map(key => imports[key])
  .reduce((acc, matcher) => ({ ...acc, ...matcher }), {});
