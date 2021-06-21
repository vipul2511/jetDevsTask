import {
    RANDOM_USER_DATA_START,
    RANDOM_USER_DATA_SUCCESS,
    RANDOM_USER_DATA_ERROR,
    ADD_FAVOURITE,
    UN_FAVOURITE
} from '../actions/index.actions';

const initialState = {
    isLoading: false,
    success: false,
    error: false,
    data: [],
    errorMessage: '',
};

export default function (state = initialState, action) {
    switch (action.type) {
        case RANDOM_USER_DATA_START:
            return {
                ...state,
                isLoading: true,
            };
        case RANDOM_USER_DATA_SUCCESS:
            return {
                ...state,
                data: action.payload,
                isLoading: false,
                success: true,
                error: false,
            };
        case RANDOM_USER_DATA_ERROR:
            return {
                ...state,
                errorMessage: action.payload.message,
                isLoading: false,
                error: true,
            };
            case ADD_FAVOURITE:
               { const {email}=action.payload;
                const newfavData=state.data.map((item)=>{
                    if(item.email===email){
                        return {...item,fav:'1'}
                    }else{
                        return item;
                    }
                })
                return{
                    ...state,
                    data:newfavData
                }}
                case UN_FAVOURITE:
                    {const {email}=action.payload;
                const newUnfavData=state.data.map((item)=>{
                    if(item.email===email){
                        return {...item,fav:'0'}
                    }else{
                        return item;
                    }
                })
                return{
                    ...state,
                    data:newUnfavData
                }}
        default:
            return state;
    }

}