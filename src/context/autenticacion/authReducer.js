import { REGISTRO_EXITO, REGISTRO_ERROR, OBTENER_USUARIO, LOGIN_EXITO, LOGIN_ERROR, CERRAR_SESION } from './../../types';

export default (state, action) => {
    switch (action.type) {

        case LOGIN_EXITO:
        case REGISTRO_EXITO:
            localStorage.setItem('token', action.payload.token);
            return {
                ...state,
                autenticado: true,
                mensaje: null,
                cargando: false
            };
        
        case OBTENER_USUARIO:
            return {
                ...state,
                autenticado: true,
                cargando: false,
                usuario: action.payload
            };
        
        case CERRAR_SESION:
        case LOGIN_ERROR:
        case REGISTRO_ERROR:
            localStorage.removeItem('token')
            return {
                ...state,
                token: null,
                usuario: null,
                autenticado: null,
                cargando: false,
                mensaje: action.payload
            };
        
        default:
            return state;
    }
}