import { CartItem } from './../components/budget/create/cartItem.model';
import { Client } from './../components/budget/create/client.model';
import { Action, createAction, createReducer, on, props } from "@ngrx/store"
import { Product } from '../components/budget/create/product.model';

export interface IAppState {
    client: Client;
    cart: CartItem[];
    products: Product[];
}

export const appInitialState: IAppState = {
    client: {
        cnpj: '',
        email: '',
        name: '',
    },
    cart: [],
    products: [
        {id: 1, name: "Produto 1"},
        {id: 2, name: "Produto 2"},
        {id: 3, name: "Produto 3"},
    ],
}

enum ActionTypes {
    SetClient = 'SetClient',
    AddProduct = 'AddProduct',
    RemoveProduct = 'RemoveProduct',
    DropProduct = 'DropProduct',
    ResetAll = 'ResetAll'
}

export const setClient = createAction(
    ActionTypes.SetClient,
    props<{ payload: Client}>()
)

export const addProduct = createAction(
    ActionTypes.AddProduct,
    props<{ payload: number}>()
)

export const removeProduct = createAction(
    ActionTypes.RemoveProduct,
    props<{ payload: number}>()
)

export const dropProduct = createAction(
    ActionTypes.DropProduct,
    props<{ payload: number}>()
)

export const resetAll = createAction(
    ActionTypes.ResetAll
)

export const appReducer = (state = appInitialState, action: any)=>{
    switch (action.type) {
        case ActionTypes.SetClient:
            return {...state, client: action.payload}
        case ActionTypes.AddProduct:
            return addProductState(state, action.payload);
        case ActionTypes.RemoveProduct:
            return removeProductState(state, action.payload, 1);
        case ActionTypes.DropProduct:
            return removeProductState(state, action.payload, -1);
        case ActionTypes.ResetAll:
            return appInitialState;
        default:
            return state;
    }
}

function addProductState(state: IAppState, id: number){
    const existingProduct = state.cart.find(x => x.product.id === id) || null
    if(existingProduct != null){
        const items = changeItemQuantity(state, existingProduct, 1);
        state = {...state, cart: items}
    }else{
        const newProduct = state.products.find(x => x.id === id) || null
        if(newProduct){
            state = {...state, cart: 
                [...state.cart, {
                product: newProduct,
                quantity: 1
            }]};
        }
    }
    return state;
}

function removeProductState(state: IAppState, id: number, quantity: number){
    const existingProduct = state.cart.find(x => x.product.id === id) || null
    if(existingProduct){
        if(quantity < 0 || existingProduct.quantity <= 1){
            var newCart = [...state.cart]; // make a separate copy of the array
            var index = state.cart.indexOf(existingProduct);
            if (index !== -1) {
                newCart.splice(index, 1);
                state = {...state, cart: newCart}
            }
        }else{
            const items = changeItemQuantity(state, existingProduct, -1*quantity);
            state = {...state, cart: items}
        }
    }
    return state;
}

function changeItemQuantity(state: IAppState, existingProduct: CartItem, val: number){
    const index = state.cart.indexOf(existingProduct);
    let items = [...state.cart];
    let item = {
        ...items[index],
        quantity: existingProduct.quantity+val
    }
    items[state.cart.indexOf(existingProduct)] = item;
    return items;
}