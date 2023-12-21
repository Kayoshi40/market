import { instance } from '@/api/api.interceptor'
import { IReview } from '@/types/review.interface'

const REVIEW = 'review'

type  TypeData = {
  rating: number
  text: string
}

export const ReviewService = {
	async getAll() {
		return instance<IReview[]>({
			url: REVIEW,
			method: 'GET'
		})
	},

  async leave(productId: string | number, data: TypeData) {
		return instance<IReview>({
			url: `${REVIEW}/leave/${productId}`,
			method: 'POST',
      data
		})
	},
}
