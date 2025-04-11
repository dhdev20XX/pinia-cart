import { useUiStore } from './ui';
const apiUrl = import.meta.env.VITE_API_URL;
export default {
    setChanged() {
        this.changed = false;
    },
    replaceCart(payload) {
        this.totalQuantity = payload.totalQuantity;
        this.items = payload.items
    },
    addItemToCart(payload) {
        console.log(payload);
        const newItem = payload
        const existingItem = this.items.find((item) => item.id === newItem.id);
        this.totalQuantity++;
        this.changed = true;
        if (!existingItem) {
            this.items.push({
                id: newItem.id,
                price: newItem.price,
                quantity: 1,
                totalPrice: newItem.price,
                name: newItem.title,
            })
        } else {
            existingItem.quantity++;
            existingItem.totalPrice = existingItem.totalPrice + newItem.price;
        }
        console.log('item added');
    },
    removeItemFromCart(payload) {
        const id = payload;
        const existingItem = this.items.find((item) => item.id === id);
        this.totalQuantity--;
        this.changed = true;
        if (existingItem.quantity === 1) {
            this.items = this.items.filter((item) => item.id !== id);
        } else {
            existingItem.quantity--;
            existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
        }
        console.log('item removed');
    },
    async sendCartData(payload) {
        const uiStore = useUiStore();

        uiStore.showNotification({
            status: 'pending',
            title: 'Sending...',
            message: 'Sending cart data!',
        });

        try {
            const response = await fetch(`${apiUrl}/cart.json`, {
                method: 'PUT',
                body: JSON.stringify({
                    items: payload.items,
                    totalQuantity: payload.totalQuantity,
                }),
            }
            );

            if (!response.ok) {
                throw new Error('Sending cart data failed.');
            }

            uiStore.showNotification({
                status: 'success',
                title: 'Success!',
                message: 'Sent cart data successfully!',
            });


        } catch (error) {
            uiStore.showNotification({
                status: 'error',
                title: 'Error!',
                message: 'Sending cart data failed!',
            });
        }
    },
    async fetchCartData() {
        const uiStore = useUiStore();
        try {
            const response = await fetch(`${apiUrl}/cart.json`);

            if (!response.ok) {
                throw new Error('Could not fetch cart data!');
            }

            const data = await response.json();

            //if (data) {
            this.replaceCart({
                items: data?.items || [],
                totalQuantity: data?.totalQuantity || 0,
            });
            //}
        } catch (error) {
            uiStore.showNotification({
                status: 'error',
                title: 'Error!',
                message: error,
            });
        }
    }

}