import React, { Component } from 'react'
import client from './Contentful'



const ApartmentContext = React.createContext();

 class ApartmentProvider extends Component {

   state={
    apartments:[],
    sortedApartments:[],
    featuredApartments:[],
    type:'all',
    price:0,
    minPrice:0,
    maxPrice:0



   }

   getData = async () =>{
       try{
        let response = await client.getEntries({
            content_type:"ndibsApartments",
            order:"sys.createdAt"
           });

           let apartments = this.formatData(response.items);
           let featuredApartments =apartments.filter(room => room.featured === true);

           let maxPrice=Math.max(...apartments.map(item =>item.price))

           this.setState({
            apartments,
            featuredApartments,
            sortedApartments:apartments,
            maxPrice,
            price:maxPrice,
            
           })
           
       }catch (error){
           console.log(error);
       }
      
   }
   componentDidMount(){
    this.getData()
}

formatData(items){
let tempItems = items.map(item =>{
    let id = item.sys.id
    let images = item.fields.images.map(image =>image.fields.file.url);
     let apartment ={...item.fields,images,id};
     return apartment;

});
return tempItems
}

getApartment = slug =>{
    let tempApartmets= [...this.state.apartments];
    const apartment = tempApartmets.find(apartment => apartment.slug===slug);
    return apartment;
}


handleChange = event =>{
    const target=event.target
    const name =target.name;
    const value =event.target.value;
    this.setState({
        [name]:value
    },this.filterApartments)
       
}

filterApartments=() =>{
    let{
        apartments,
        type,
        price,
    } = this.state
    let tempApartments=[...apartments]

    price=parseInt(price)

    if(type !== 'all'){
        tempApartments =tempApartments.filter(apartment =>apartment.type ===type)
    }
   tempApartments =tempApartments.filter(apartment => apartment.price <=price)
   
    this.setState({
        sortedApartments:tempApartments
    })
}

    render() {
        return (
            <ApartmentContext.Provider value={{...this.state,
            getApartment:this.getApartment,
            handleChange:this.handleChange
            }}>   
            {this.props.children}
            </ApartmentContext.Provider>
        )
    }
}

const ApartmentConsumer = ApartmentContext.Consumer;

export function withApartmentConsumer(Component){
   return function ConsumerWrapper(props) {
       return <ApartmentConsumer>
           {value => <Component {...props} context={value}/>}
       </ApartmentConsumer>
   }
}

export { ApartmentProvider, ApartmentConsumer, ApartmentContext}
