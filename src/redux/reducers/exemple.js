import keys from '../keys/index';
const initialStete = {

}
export default function exemple(state = initialStete, {type,payload}) {
  switch (type) {
    case keys.exemple.ADD_EXEMPLE_KEY:
      return state
    default:
      return state
  }
}