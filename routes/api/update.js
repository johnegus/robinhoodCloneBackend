const db = require('../../db/models');
const { Sequelize } = require('sequelize');
const fetch = require("node-fetch");
const { Position, User, Watchlist} = db;
const Op = Sequelize.Op


const API_Key = 'f04ddc95561236e9dccd1ffa355ad55b';


async function findAllPositions(stockSymbolInput) {
 
      let API_CALL = `https://financialmodelingprep.com/api/v3/quote/${stockSymbolInput}?apikey=${API_Key}`;
      
      fetch(API_CALL)
      .then(
          function(response){
              return response.json()
          }
      )
      .then(
          function(data){
            
            console.log('fetch  data from FMP')
            console.log( data[0]['price'])
            const fetchedPrice = Number(data[0]['price'])
            console.log( fetchedPrice)
        //     (async () => {
        //     await sequelize.sync({ force: true });  
        //     const position = await Positions.findOne({where: { stockSymbol: stockSymbolInput}});
        //     console.log(position.stockSymbol)
        // })();
        // (async () => {
        //     await sequelize.sync({ force: true });
        //     const position = await Position.findOne({where: {stockSymbol: stockSymbolInput}});
        //     position.currentPrice = await fetchedPrice;
        //     await position.save();
        // })();
            try{ 
        const newPrice = Position.update(
            { currentPrice: fetchedPrice },
            { where: { stockSymbol: stockSymbolInput } }
          )
        
                return newPrice
              
            } catch(err){
                console.log(err);
            }

            //  async function updatedPrice(stockSymbolInput){
                
            //  const newPrice = Position.update({
            //     currentPrice: 500
            // },
            // { where: {stockSymbol:  stockSymbolInput }}
            // )

            // return newPrice;
            // }
            // updatedPrice(stockSymbolInput); 
                       
              
          }
      ).catch('error')
    }

findAllPositions('TSLA');


// router.get(
//     "/",
//     authenticated,
//     asyncHandler(async function (req, res) {
//       const positions = await Position.findAll({
//         where: {userId: req.user.id},
//       });
//       res.json(positions);
//     })
//   );
// // Find the pet with id = 1
// const pet = await Pet.findByPk(1);
// // Way 1
// pet.name = "Fido, Sr."
// await pet.save;
// // Way 2
// await pet.update({
// name: "Fido, Sr."
// });

// useEffect(() => {   
//     if (!positions) {
//       return;
//     }                                 
//   const fetchCurrentPrices = () =>{
//     const API_Key = 'f04ddc95561236e9dccd1ffa355ad55b';
    
//     positions.map(position => { 
//       let stockSymbol = position.stockSymbol
//       let API_CALL = `https://financialmodelingprep.com/api/v3/quote/${stockSymbol}?apikey=${API_Key}`;


      
//         fetch(API_CALL)
//         .then(
//             function(response){
//                 return response.json()
//             }
//         )
//         .then(
//             function(data){
              
//               console.log('fetch  data from FMP')
//               console.log(data)
  
          
              
                         
                
//             }
//         )   
// })
// }
// fetchCurrentPrices();

// // setInterval(fetchCurrentPrices(), 60000);
// }, [positions]);