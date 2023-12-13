import React from 'react'
import List from '../constant/List'
import ListMovie from './ListMovie'

function ListGenre() {
  return (
    <div>
        {List.genre.map((item,index)=>index<=4&&(
            <div className='p-7 px-5 md:px-16'>
                <h2 className='text-[18px] text-white font-bold'>{item.name}</h2>
                <ListMovie genreId={item.id} index_={index}/>
            </div>

        ))}
    </div>
  )
}

export default ListGenre