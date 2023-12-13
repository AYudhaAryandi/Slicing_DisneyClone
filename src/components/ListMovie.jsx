import React, { useEffect, useState } from 'react'
import Api from '../services/Api'
import CardMovie from './CardMovie'

function  ListMovie({genreId}) {
    const [movieList, setMovieList] = useState([]) 
    useEffect(()=>{
        getMovieByGenreId();
    },[])

    const getMovieByGenreId=()=>{     
        Api.getMovieByGenreId(genreId).then(resp=>{
            setMovieList(resp.data.results)
        })  
    }

    return (

        
    <div className='flex overflow-x-auto gap-5 scrollbar-hide scroll-smooth pt-5 px-5 pb-5'>
        {movieList.map((item,index)=>(
            <CardMovie movie={item}/>
        ))}
    </div>
  )
}

export default ListMovie