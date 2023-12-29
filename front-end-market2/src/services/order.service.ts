import { instance } from '@/api/api.interceptor'
import { ICartItem } from '@/types/cart.interface'
import { IOrder } from '@/types/order.interface'


const ORDER = 'order'

enum EnumOrderStatus {
	PENDING = 'PENDING',
	PAYED = 'PAYED',
	SHIPPED = 'SHIPPED',
	DELIVERED = 'DELIVERED'
}

type TypeData = {
	status?: EnumOrderStatus
	items: {
		productId: number
		quantity: number
		price: number
	}[]
}

export const OrderService = {
	async getAll() {
		return instance<IOrder[]>({
			url: ORDER,
			method: 'GET'
		})
	},

	async place(data: TypeData) {
		return await instance<{ confirmation: { confirmation_url: string } }>({
			url: ORDER,
			method: 'POST',
			data
		})
	}
}
