import { IOrder } from './order.interface'
import { IProduct } from './product.interface'

export interface IUser {
	id: number
	email: string
	name: string
	avatar: string
	password: string
	phone: string
}

export interface IFullUser extends IUser {
	favorites: IProduct[]
	orders: IOrder[]
}
