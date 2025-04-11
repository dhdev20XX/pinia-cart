import { defineStore } from 'pinia';

export const useUiStore = defineStore('ui', {
    state: () => ({
        cartIsVisible: false,
        notification: null
    }),
    getters: {
        getCartIsVisible: (state) => { return state.cartIsVisible },
        getNotification: (state) => { return state.notification },
    },
    actions: {
        toggle() {
            this.cartIsVisible = !this.cartIsVisible;
        },
        showNotification(payload) {
            this.notification = {
                status: payload.status,
                title:  payload.title,
                message: payload.message,
            }
        }
    },
})