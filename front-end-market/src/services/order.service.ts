import { instance } from '@/api/api.interceptor'
import { IOrder } from '@/types/order.interface'

const ORDER = 'order'

export const OrderService = {
	async getAll() {
		return instance<IOrder[]>({
			url: ORDER,
			method: 'GET'
		})
	}
}
