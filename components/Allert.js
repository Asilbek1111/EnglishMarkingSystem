import { data } from 'autoprefixer'
import axios from '../axios'
import react , {useState, useEffect} from 'react'
import SweetAlert from 'react-bootstrap-sweetalert'
import router from 'next/router'
const Allert = (props)=>{
    console.log(props)
    const [showWarning, setShowWarning]= useState(false)
    const [show, setShow] = useState(false)
    const [title_eng, setTitle_eng]= useState('')
    const [title_ru, setTitle_ru]= useState('')
    const [description_eng, setDescription_eng]= useState('')
    const [description_ru, setDescription_ru]= useState('')
    const [price, setPrice]= useState()
    const [location, setLocation]= useState('')
    const getProps = ()=>{
        setTitle_eng(props.el.title_eng)
        setTitle_ru(props.el.title_ru)
        setDescription_eng(props.el.description_eng)
        setDescription_ru(props.el.description_ru)
        setPrice(props.el.price)
        setLocation(props.el.location)
    }
    const data = {
        title_eng: title_eng,
        title_ru: title_ru,
        description_eng: description_eng,
        description_ru: description_ru,
        price: price,
        location: location
    }
    const Save = ()=>{
        axios.patch(`${props.url}/${props.el._id}`, data)
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
<SweetAlert
    showCancel={true}
    show={props.show}
    onConfirm={props.onConfirmEdit}
    onCancel={props.onCancel}
    title="Edit Tours"
    cancelBtnCssClass="bg-red-500 rounded text-white px-2 py-1"
    confirmBtnCssClass="px-6 py-3 bg-red-600 text-white rounded text-xl hidden cursor-pointer"
    style={{ width: '60%' }}
    >
        <SweetAlert success title="SuccessFully deleted" show={show} onConfirm={onConfirm} onCancel={onConfirm}  confirmBtnCssClass="px-6 py-3 bg-DarkBlue text-white rounded text-xl cursor-pointer"
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
      <p className="my-4">Description</p> 
      <div className="mt-4 flex justify-between">
        <div className="w-full mx-5">
          <span>Eng:</span>
          <textarea
          value={description_eng}
          onChange={(e)=>setDescription_eng(e.target.value)}
          placeholder="Our tour agency is the best of the best all over the world ....."
          autoComplete="off"
          className="placeholder-secondaryGray border-gray-300 border-lovelyBlue shadow rounded font-jost text-base py-2 px-3 border w-full"
      />
        </div>
        <div className="w-full">
          <span>Ru:</span>
          <textarea
          value={description_ru}
          onChange={(e)=>setDescription_ru(e.target.value)}
          placeholder="Наше туристическое агентство - лучшее из лучших во всем мире ....."
        autoComplete="off"
        className="placeholder-secondaryGray border-gray-300 border-lovelyBlue shadow rounded font-jost text-base py-2 px-3 border w-full"
      />
        </div>
      </div>
      <div>
      <p className="my-4 text-left ml-6">Price</p> 
      <div className="mt-4 flex justify-between">
        <div className="w-96 mx-5">
          <input
                placeholder= "150"
                className="placeholder-secondaryGray border-gray-300 border-lovelyBlue shadow rounded font-jost text-base py-2 px-3 border w-full"
                required
                value={price}
                onChange={(e)=>setPrice(e.target.value)}
              />
        </div>
      </div>
      </div>
      <div>
      <p className="my-4 text-left ml-6">Location</p> 
      <div className="mt-4 flex justify-between">
        <div className="w-96 mx-5">
        <input
        placeholder="Dubai"
        value={location}
        className="placeholder-secondaryGray border-gray-300 border-lovelyBlue shadow rounded font-jost text-base py-2 px-3 border w-full"
        onChange={(e)=>setLocation(e.target.value)}
        />
        </div>
      </div>
      <div className="flex justify-around mt-20">
      <button onClick={getProps} className="bg-green-600 text-white px-2 py-1 rounded-lg">onClick</button>
      <button onClick={Save} className="bg-DarkBlue text-white px-2 py-1 rounded-lg">Save</button>
      </div>
      </div>
    </SweetAlert>
    )
}
export default Allert