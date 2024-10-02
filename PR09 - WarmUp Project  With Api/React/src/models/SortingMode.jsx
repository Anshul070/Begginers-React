
function Sort(a , b){
    return a.price - b.price;
}


const SortByPrice = (data)=>{
    return data.sort(Sort);
}

export default SortByPrice;