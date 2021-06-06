import toHaveEmitted from './toHaveEmitted';
import toExist from './toExist';
import toBeVisible from './toBeVisible';

const imports: { [key: string]: any } = {
  toHaveEmitted,
  toExist,
  toBeVisible,
};

export default Object.keys(imports)
  .map((key) => imports[key])
  .reduce((acc, matcher) => ({ ...acc, ...matcher }), {});
