import React from 'react'
import './SearchBox.css'
export default function SearchBox({searchInput, setSearchInput}) {
  return (
    <div className='searchbox-container'>
        SearchBox
        <div>
            <input 
                type='text' 
                value={searchInput}
                onChange={(e)=>setSearchInput(e.target.value)}
            />
        </div>
    </div>
  )
}
