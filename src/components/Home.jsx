import React, { useEffect, useState } from 'react'

const Home = () => {
    const [surah, setSurah] = useState(0)
    const [arabSurah, setArabSurah] = useState(1)
    const [number, setNumber] = useState(1)
    
    async function apiData (){
      if (inputBox.value ==='' || inputBox.value >114) {
        setNumber(1)
      }else{
        setNumber(inputBox.value)
      }
  
   

        try{
        let data = await fetch(`http://api.alquran.cloud/v1/surah/${number}/en.asad`)
        setSurah (await data.json())
        let arabData = await fetch(`http://api.alquran.cloud/v1/surah/${number}`)
        setArabSurah (await arabData.json())
        
        // increNum()
        
      }catch{
        console.log('Big Error');
      }
    }
    console.log(arabSurah)
    useEffect(() => {
        apiData()
        
      }, [])
      
  return (
    <div className='text-justify p-3 '>
      <h1 className='text-center'>Al-quran </h1>
      <h4>Select Ayah</h4>
       <input type='number' min='1' max='114' id='inputBox' className='form-control w-50' />
      <button className='btn btn-success' onClick={apiData}>Search</button>
      <div className='row mx-3'>

      <h5 className='col-md-4 '>
        English Name:
        {
          surah ? surah.data.englishNameTranslation : null
        }
      </h5>

      <h5 className='col-md-4'>Arabic Name:  {
          surah ? surah.data.name : null
        }</h5>
  <h5 className='col-md-4'>Ayah Number:  {
    surah ? surah.data.number : null
        }</h5>
<h5 className='col-md-4'>Number of Ayahs:  {
  surah ? surah.data.numberOfAyahs : null
}</h5>

<h5 className='col-md-4'>Revelation Type:  {
  surah ? surah.data.revelationType : null
}</h5>
</div>
<div className='row mx-0'>

       <div className='w-50 pr-3'>
      {/* {
        
        surah ?  surah.data.ayahs.map(key=>{
          return (
            <div className='mb-2'>({key.numberInSurah}) {key.text} (Page : {key.page})</div>
            )
          }): null
        }
        </div> 
        <div className='w-50 p-3 border-left'>
        {
        arabSurah ?  arabSurah.data.ayahs.map((elem,i)=>{
          return (
            <div className='mb-2'>({elem.numberInSurah}) {elem.text} (Page : {elem.page})</div>
          )
        }): null
      } */}
        </div>
      </div>
     </div>
  )
}

export default Home