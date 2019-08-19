import log from '@/dmain/logger/logger'
const namespaced = true

const state = {
    name:''
}

const getters = {
    getName: state => state.name
}

const mutation = {
    login(state, payload){
        state.name = payload.name
    }
}

