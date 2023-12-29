import * as types from '../types';

const initialState = {
  botaoClicado: false,
};

// eslint-disable-next-line
export default function (state = initialState, action) {
  switch (action.type) {
    case types.BOTAO_SUCCESS: {
      const newState = { ...state };
      newState.botaoClicado = !newState.botaoClicado;
      console.log('SUCESSO.');
      return newState;
    }
    case types.BOTAO_FAILURE: {
      console.log('ERRO.');
      return state;
    }
    case types.BOTAO_REQUEST: {
      console.log('Fazendo a requisição;');
      return state;
    }
    default:
      return state;
  }
}
