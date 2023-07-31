import react, {useState, useEffect} from 'react'
import Simple from './Simple'
import InputGroup from '../components/InputGroup/InputGroup'
import axios from '../axios'
import router from 'next/router'
import SweetAlert  from 'react-bootstrap-sweetalert'
const Tour = ()=>{
  const [showWarning, setShowWarning] = useState(false)
  const [show , setShow]= useState(false)
  const [file, setFile] = useState();
  const [title_eng, setTitle_eng]= useState('')
  const [title_ru, setTitle_ru]= useState('')
  const [description_eng, setDescription_eng]= useState('')
  const [description_ru, setDescription_ru]= useState('')
  const [price, setPrice]= useState()
  const [location, setLocation]= useState('')
  const [imgSrc, setImgSrc] = useState(null)
  const [image, setImage]= useState(null)
  console.log(image)
  console.log(file)
  console.log(title_eng)
  const handleImageUpload = (e) => {
    const img = e.target.files[0];
    const url = URL.createObjectURL(img);
    setImgSrc(url);
    setImage(img);
};

  const data = {
    title_eng: title_eng,
    title_ru: title_ru,
    description_eng: description_eng,
    description_ru: description_ru,
    price: price,
    location: location,
    img: image
  }
  const Submit = (e)=>{
    const formData = new FormData()
    formData.append('title_eng', title_eng)
    formData.append('title_ru', title_ru)
    formData.append('img', image)
    console.log(formData)
    e.preventDefault()
    axios.post('/headers', formData, { headers: {
      "Content-Type": "multipart/form-data"
  }})
    .then((res)=>{
      console.log(res)
    setShow(true)
    router.reload()
    })
    .catch((err)=>{
      console.log(err)
    setShowWarning(true)
    })
  }
  const onConfirm = ()=>{
    setShow(false)
  }
  const onCancel  = ()=>{
    setShowWarning(false)
  }
return(
    <>
    <Simple>
    <SweetAlert success title="Good job!" show={show} onConfirm={onConfirm} onCancel={onConfirm}  confirmBtnCssClass="px-6 py-3 bg-DarkBlue text-white rounded text-xl cursor-pointer"
      //  timeout={2000}
       />
       <SweetAlert
  danger
  confirmBtnText="ok"
  confirmBtnBsStyle="danger"
  title="You cannot post it"
  show={showWarning}
  onConfirm={onCancel}
  onCancel={onCancel}
  confirmBtnCssClass="px-6 py-3 bg-red-600 text-white rounded text-xl cursor-pointer"
  focusCancelBtn
>
</SweetAlert>
      <div className="mx-6 rounded-md shadow-lg p-4">
      <h1 className="text-center font-bold text-2xl font-niramit hover:text-DarkBlue">Add new Hotels</h1>
      <div>
      <p className="my-4">Titles</p> 
      <div className="mt-4 flex justify-between">
        <div className="w-full mx-5">
          <span>Eng:</span>
        <input
        value={title_eng}
        className="placeholder-secondaryGray border-gray-300 border-lovelyBlue shadow rounded font-jost text-base py-2 px-3 border w-full"
        placeholder="Travel to Australia"
        onChange={(e)=>setTitle_eng(e.target.value)}
        />
        </div>
        <div className="w-full">
          <span>Ru:</span>
          <input
        value={title_ru}
        className="placeholder-secondaryGray border-gray-300 border-lovelyBlue shadow rounded font-jost text-base py-2 px-3 border w-full"
        placeholder="Travel to Australia"
        onChange={(e)=>setTitle_ru(e.target.value)}
        />
        </div>
      </div>
      </div>
      <div>
      <p className="my-4">Image</p> 
      <div className="mt-4 flex justify-between">
      <div className="w-full md:w-1/5 text-center">
                                <div>
                                    <label htmlFor="imgDoctor" className="cursor-pointer">
                                        <img
                                            src={imgSrc}
                                            style={{width: "240px", height: "240px"}}
                                            className="object-cover object-center mx-auto"
                                        />
                                    </label>
                                    <input
                                        type="file"
                                        id="imgDoctor"
                                        className="invisible"
                                        // enctype="multipart/form-data"
                                        accept="image/*"
                                        onChange={(e) => handleImageUpload(e)}
                                    />
                                </div>
                                </div>
      </div>
      </div>
      <div className="flex justify-end">
      <button className="bg-DarkBlue hover:bg-normalBlue text-white text-bold px-4 py-2 rounded-sm" onClick={(e)=>Submit(e)}>Submit</button>
      </div>
      </div>
    </Simple>
    </>
)
}
export default Tour