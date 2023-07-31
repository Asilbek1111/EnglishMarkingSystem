import react, {useState, useEffect} from 'react'
import Simple from './Simple'
import SweetAlert  from 'react-bootstrap-sweetalert'
import axios from '../axios'
import router from 'next/router'
const AddGalery =()=>{
    const [imgSrc, setImgSrc] = useState(null)
    const [image, setImage]= useState(null)
    const [show, setShow] = useState(false)
    const [showWarning, setShowWarning]= useState(false)
    const handleImageUpload = (e) => {
        const img = e.target.files[0];
        const url = URL.createObjectURL(img);
        setImgSrc(url);
        setImage(img);
    };
    const Submit = (e)=>{
        const formData = new FormData()
        formData.append('img', image)
        console.log(formData)
        e.preventDefault()
        axios.post('/galery', formData, { headers: {
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
/>
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
      <div className="flex justify-center">
      <button className="bg-DarkBlue hover:bg-normalBlue text-white text-bold px-4 py-2 rounded-sm" onClick={(e)=>Submit(e)}>Submit</button>
      </div>
    </Simple>
    </>
)
}
export default AddGalery