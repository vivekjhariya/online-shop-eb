import { createContext, useContext, useState } from "react";
import { useShoppingItems } from "./ShoppingItemsContext";

const ShoppingCartContext = createContext({});

export function useShoppingCart() {
    return useContext(ShoppingCartContext);
}

export function ShoppingCartProvider({ children }) {
    const [isOpen, setIsOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const shoppingItemsContext = useShoppingItems();
    const { products = [] } = shoppingItemsContext || {};

    const cartQuantity = cartItems.reduce(
        (quantity, item) => item.quantity + quantity,
        0
    );

    const openCart = () => setIsOpen(true);
    const closeCart = () => setIsOpen(false);

    function getItem(id) {
        return products?.find(item => item.id === id);
    }
    
    function getItemQuantity(id) {
        return cartItems.find(item => item.id === id)?.quantity || 0;
    }

    function increaseCartQuantity(id) {
        setCartItems(currItems => {
            if (currItems.find(item => item.id === id) == null) {
                return [...currItems, { id, quantity: 1 }];
            } else {
                return currItems.map(item => {
                    if (item.id === id) {
                        return { ...item, quantity: item.quantity + 1 };
                    } else {
                        return item;
                    }
                });
            }
        });
    }

    function decreaseCartQuantity(id) {
        setCartItems(currItems => {
            if (currItems.find(item => item.id === id)?.quantity === 1) {
                return currItems.filter(item => item.id !== id);
            } else {
                return currItems.map(item => {
                    if (item.id === id) {
                        return { ...item, quantity: item.quantity - 1 };
                    } else {
                        return item;
                    }
                });
            }
        });
    }

    function removeFromCart(id) {
        setCartItems(currItems => {
            return currItems.filter(item => item.id !== id);
        });
    }

    function clearCart() {
        setCartItems([]);
    }

    // Additional functions for tests and compatibility
    function addToCart(id) {
        increaseCartQuantity(id);
    }

    function getTotalItems() {
        return cartQuantity;
    }

    function getTotalPrice() {
        return cartItems.reduce((total, cartItem) => {
            const item = getItem(cartItem.id);
            return total + (item?.price || 0) * cartItem.quantity;
        }, 0);
    }

    function updateCartItemQuantity(id, quantity) {
        setCartItems(currItems =>
            currItems.map(item =>
                item.id === id ? { ...item, quantity } : item
            )
        );
    }

    function getCartTotal() {
        return cartItems.reduce((total, cartItem) => {
            const item = getItem(cartItem.id);
            return total + (item?.price || 0) * cartItem.quantity;
        }, 0);
    }

    return (
        <ShoppingCartContext.Provider
            value={{
                getItem,
                getItemQuantity,
                increaseCartQuantity,
                decreaseCartQuantity,
                removeFromCart,
                clearCart,
                addToCart,
                getTotalItems,
                getTotalPrice,
                openCart,
                closeCart,
                cartItems,
                cartQuantity,
                isOpen,
                updateCartItemQuantity,
                getCartTotal,
            }}
        >
            {children}
        </ShoppingCartContext.Provider>
    );
}
