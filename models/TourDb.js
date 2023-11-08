// import Tour from "./Tour.js"

// const fetchData = async () => {
//   const search = 'delhi'
//   const res = await fetch(`https://serpapi.com/search.json?engine=google&q=Near by Place and Events in ${search}&api_key=ff76c9bf3b34f33343901b318826405abfa2ae070fc4217dbe83bba1f6581081`)
//   const response = await res.json()
//   const data = await response.events_results
//   console.log(data);

//   data.map(date => {
//     console.log(date);
//   const newTour = new Tour({
//     title: date.title,
//     city: search,
//     address: date.address,
//     distance: 100,
//     photo: date.thumbnail,
//     desc: data.title,
//     price: 999,
//     maxGroupSize: 8
//   })
//   newTour.save()
//   })
// }


// fetchData()