import keys from '../keys/index';
const initialStete = {

}
export default function categories(state = initialStete, {type,payload}) {
  switch (type) {
    case keys.categories.ADD_CATEGORY_KEY:
      return state
    default:
      return state
  }
}