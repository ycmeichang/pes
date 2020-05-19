export const Routes = {
	root: '/',
	breedDetail: '/breed/:id',
	showBreedDetail(id) {
		return `/breed/${id}`
	}
}
