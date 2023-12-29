import { useProfile } from '@/hooks/useProfile'
import { UserService } from '@/services/user.service'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { document } from 'postcss'
import { FC } from 'react'
import { MdFavorite, MdFavoriteBorder } from 'react-icons/md'

const FavoriteButton: FC<{ productId: number }> = ({ productId }) => {
	const { profile } = useProfile()

	const queryClient = useQueryClient()

	const { mutate } = useMutation({
		mutationKey: ['toggle favorite'],
		mutationFn: () => UserService.toggleFavorite(productId),
		onSuccess() {
			queryClient.invalidateQueries({ queryKey: ['get profile'] })
		}
	})

	if (!profile) return <div></div>

	const isExists = () =>
		profile.favorites.some(favorite => favorite.id == productId)

	return (
		<div>
			<button
				id={productId.toString()}
        className='text-primary'
				onClick={() => {
					mutate()
				}}
			>
				{isExists() ? <MdFavorite  size={30}/> : <MdFavoriteBorder size={30}/>}
			</button>
		</div>
	)
}

export default FavoriteButton
