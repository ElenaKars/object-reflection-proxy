export default function orderByProps (obj, order) {
   const orderedProps = [];
   const unorderedProps = [];
   
   for (let prop in obj) {
       if (order.includes(prop)){
           orderedProps.push({key: prop, value: obj[prop]})
       } else {
        unorderedProps.push({key: prop, value: obj[prop]})
       }
   }
   orderedProps.sort((a, b) => order.indexOf(a.key) - order.indexOf(b.key));

   unorderedProps.sort((a, b) => {
       if (a.key > b.key){
           return 1;
       } else if (a.key < b.key){
           return -1
       } else {
           return 0;
       }
   });
   return [...orderedProps, ...unorderedProps]
}
