import React from "react";
const Searchresult=(props)=>{
    const img=`https://source.unsplash.com/400×300/?${props.name}`;
    return(<>
        <img src={img} alt="search" width={400} height={300}/>
    </>);
}
export default Searchresult;