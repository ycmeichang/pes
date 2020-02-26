// const fetchData = async () => {
//   const response = await fetch('https://dog.ceo/api/breeds/list/all')
//   const json = await response.json()
//   const breeds = Object.keys(json.message)
//   //console.log(breeds)

//   const result = {}
//   const requests = breeds.map(async (breed) => {
//     const response = await fetch(`https://dog.ceo/api/breed/${breed}/images`)
//     const json = await response.json()
//     const image = json.message[0]
//     result[breed] = image
//   })
//   //await requests[0]()
//   await Promise.all(requests)
//   setBreeds(result)
//   // console.log(result)
// }
// fetchData()

export const breedList = {
	affenpinscher: 'https://images.dog.ceo/breeds/affenpinscher/n02110627_10147.jpg',
	redbone: 'https://images.dog.ceo/breeds/redbone/n02090379_1006.jpg',
	retriever: 'https://images.dog.ceo/breeds/retriever-chesapeake/n02099849_1024.jpg',
	ridgeback: 'https://images.dog.ceo/breeds/ridgeback-rhodesian/20190720_161000-01.jpg',
	rottweiler: 'https://images.dog.ceo/breeds/rottweiler/n02106550_10048.jpg',
	saluki: 'https://images.dog.ceo/breeds/saluki/n02091831_10215.jpg',
	samoyed: 'https://images.dog.ceo/breeds/samoyed/Ollie_Samoyed.jpg',
	schipperke: 'https://images.dog.ceo/breeds/schipperke/n02104365_10071.jpg',
	schnauzer: 'https://images.dog.ceo/breeds/schnauzer-giant/n02097130_1032.jpg',
	setter: 'https://images.dog.ceo/breeds/setter-english/n02100735_10030.jpg',
	sheepdog: 'https://images.dog.ceo/breeds/sheepdog-english/Finnigan Chair sml.jpg',
	shiba: 'https://images.dog.ceo/breeds/shiba/shiba-1.jpg',
	shihtzu: 'https://images.dog.ceo/breeds/shihtzu/n02086240_1011.jpg',
	spaniel: 'https://images.dog.ceo/breeds/spaniel-blenheim/n02086646_1002.jpg',
	springer: 'https://images.dog.ceo/breeds/springer-english/n02100735_216.jpg',
	stbernard: 'https://images.dog.ceo/breeds/stbernard/n02109525_10032.jpg',
	terrier: 'https://images.dog.ceo/breeds/terrier-american/n02093428_10164.jpg',
	vizsla: 'https://images.dog.ceo/breeds/vizsla/n02100583_10249.jpg',
	waterdog: 'https://images.dog.ceo/breeds/waterdog-spanish/20180706_194432.jpg',
	weimaraner: 'https://images.dog.ceo/breeds/weimaraner/n02092339_1013.jpg',
	african: 'https://images.dog.ceo/breeds/african/n02116738_10024.jpg',
	whippet: 'https://images.dog.ceo/breeds/whippet/n02091134_10107.jpg',
	wolfhound: 'https://images.dog.ceo/breeds/wolfhound-irish/n02090721_1002.jpg',
	airedale: 'https://images.dog.ceo/breeds/airedale/n02096051_1017.jpg',
	akita: 'https://images.dog.ceo/breeds/akita/512px-Ainu-Dog.jpg',
	appenzeller: 'https://images.dog.ceo/breeds/appenzeller/n02107908_1030.jpg',
	australian: 'https://images.dog.ceo/breeds/australian-shepherd/sadie.jpg',
	basenji: 'https://images.dog.ceo/breeds/basenji/n02110806_1013.jpg',
	beagle: 'https://images.dog.ceo/breeds/beagle/Joey.jpg',
	bluetick: 'https://images.dog.ceo/breeds/bluetick/n02088632_101.jpg',
	borzoi: 'https://images.dog.ceo/breeds/borzoi/n02090622_10281.jpg',
	bouvier: 'https://images.dog.ceo/breeds/bouvier/n02106382_1000.jpg',
	boxer: 'https://images.dog.ceo/breeds/boxer/IMG_0002.jpg',
	brabancon: 'https://images.dog.ceo/breeds/brabancon/n02112706_1041.jpg',
	briard: 'https://images.dog.ceo/breeds/briard/n02105251_12.jpg',
	buhund: 'https://images.dog.ceo/breeds/buhund-norwegian/hakon1.jpg',
	bulldog: 'https://images.dog.ceo/breeds/bulldog-boston/n02096585_10380.jpg',
	bullterrier: 'https://images.dog.ceo/breeds/bullterrier-staffordshire/caesar.jpg',
	cairn: 'https://images.dog.ceo/breeds/cairn/n02096177_1000.jpg',
	cattledog: 'https://images.dog.ceo/breeds/cattledog-australian/IMG_0206.jpg',
	chihuahua: 'https://images.dog.ceo/breeds/chihuahua/n02085620_10074.jpg',
	chow: 'https://images.dog.ceo/breeds/chow/modi2.jpg',
	clumber: 'https://images.dog.ceo/breeds/clumber/n02101556_1018.jpg',
	cockapoo: 'https://images.dog.ceo/breeds/cockapoo/bubbles1.jpg',
	collie: 'https://images.dog.ceo/breeds/collie-border/Jake.jpg',
	coonhound: 'https://images.dog.ceo/breeds/coonhound/n02089078_1021.jpg',
	corgi: 'https://images.dog.ceo/breeds/corgi-cardigan/n02113186_10077.jpg',
	cotondetulear: 'https://images.dog.ceo/breeds/cotondetulear/100_2013.jpg',
	dachshund: 'https://images.dog.ceo/breeds/dachshund/Dachshund_rabbit.jpg',
	dalmatian: 'https://images.dog.ceo/breeds/dalmatian/cooper1.jpg',
	dane: 'https://images.dog.ceo/breeds/dane-great/dane-0.jpg',
	deerhound: 'https://images.dog.ceo/breeds/deerhound-scottish/n02092002_10060.jpg',
	dhole: 'https://images.dog.ceo/breeds/dhole/n02115913_1010.jpg',
	dingo: 'https://images.dog.ceo/breeds/dingo/n02115641_10021.jpg',
	doberman: 'https://images.dog.ceo/breeds/doberman/doberman.jpg',
	elkhound: 'https://images.dog.ceo/breeds/elkhound-norwegian/n02091467_1110.jpg',
	entlebucher: 'https://images.dog.ceo/breeds/entlebucher/n02108000_1011.jpg',
	eskimo: 'https://images.dog.ceo/breeds/eskimo/n02109961_10021.jpg',
	frise: 'https://images.dog.ceo/breeds/frise-bichon/1.jpg',
	germanshepherd: 'https://images.dog.ceo/breeds/germanshepherd/Bagira_site.jpg',
	greyhound: 'https://images.dog.ceo/breeds/greyhound-italian/n02091032_10079.jpg',
	groenendael: 'https://images.dog.ceo/breeds/groenendael/n02105056_1018.jpg',
	havanese: 'https://images.dog.ceo/breeds/havanese/00100trPORTRAIT_00100_BURST20191030212452971_COVER.jpg',
	hound: 'https://images.dog.ceo/breeds/hound-afghan/n02088094_1003.jpg',
	husky: 'https://images.dog.ceo/breeds/husky/20180901_150234.jpg',
	keeshond: 'https://images.dog.ceo/breeds/keeshond/n02112350_10023.jpg',
	kelpie: 'https://images.dog.ceo/breeds/kelpie/n02105412_1031.jpg',
	komondor: 'https://images.dog.ceo/breeds/komondor/n02105505_1018.jpg',
	kuvasz: 'https://images.dog.ceo/breeds/kuvasz/n02104029_1075.jpg',
	labrador: 'https://images.dog.ceo/breeds/labrador/IMG_4708.jpg',
	leonberg: 'https://images.dog.ceo/breeds/leonberg/n02111129_1.jpg',
	lhasa: 'https://images.dog.ceo/breeds/lhasa/n02098413_10144.jpg',
	malamute: 'https://images.dog.ceo/breeds/malamute/n02110063_10025.jpg',
	malinois: 'https://images.dog.ceo/breeds/malinois/n02105162_10076.jpg',
	maltese: 'https://images.dog.ceo/breeds/maltese/n02085936_10073.jpg',
	mastiff: 'https://images.dog.ceo/breeds/mastiff-bull/n02108422_1013.jpg',
	mexicanhairless: 'https://images.dog.ceo/breeds/mexicanhairless/n02113978_1006.jpg',
	mix: 'https://images.dog.ceo/breeds/mix/Cali.jpg',
	mountain: 'https://images.dog.ceo/breeds/mountain-bernese/n02107683_1003.jpg',
	newfoundland: 'https://images.dog.ceo/breeds/newfoundland/n02111277_1008.jpg',
	otterhound: 'https://images.dog.ceo/breeds/otterhound/n02091635_1043.jpg',
	papillon: 'https://images.dog.ceo/breeds/papillon/n02086910_10147.jpg',
	pekinese: 'https://images.dog.ceo/breeds/pekinese/n02086079_10059.jpg',
	pembroke: 'https://images.dog.ceo/breeds/pembroke/n02113023_10636.jpg',
	pinscher: 'https://images.dog.ceo/breeds/pinscher-miniature/n02107312_105.jpg',
	pitbull: 'https://images.dog.ceo/breeds/pitbull/20190710_143021.jpg',
	pointer: 'https://images.dog.ceo/breeds/pointer-german/n02100236_1054.jpg',
	pomeranian: 'https://images.dog.ceo/breeds/pomeranian/n02112018_10129.jpg',
	poodle: 'https://images.dog.ceo/breeds/poodle-miniature/n02113712_1036.jpg',
	pug: 'https://images.dog.ceo/breeds/pug/IMG_0226.jpg',
	puggle: 'https://images.dog.ceo/breeds/puggle/IMG_041234.jpg',
	pyrenees: 'https://images.dog.ceo/breeds/pyrenees/n02111500_1031.jpg'
}
