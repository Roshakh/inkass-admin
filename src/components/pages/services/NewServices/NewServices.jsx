import React, { useRef, useState } from 'react'
import "./NewServices.css";
import { Link } from 'react-router-dom';
import { requests, url } from "../../../../api/requast";
import Img from "../../../../assets/images/img.png"

function NewServices() {


    let _imageInput = useRef();
    let [image, setImage] = useState();
    let [name, setName] = useState("");
    let [adress, setAdrss] = useState("");


    let onUpload = () => {
        _imageInput.current.click();
    };
    let onChangeName = (e) => {
        setName(e.target.value)
    };
    let onChangeAdrss = (e) => {
        setAdrss(e.target.value)
    };

    let onImageUpload = async (e, index) => {
        if (e.target.files.length > 0) {
            let form = new FormData();
            form.append("files", e.target.files[0]);
            try {
                let res = await requests.uploads.uploadImage(form);
                setImage({
                    name: e.target.files[1],
                    image_url: `${url}/file-download/${res.data[0]}`,
                });
            } catch (error) {
                alert(error);
            }
        }
    }

    let onAddServices = async () => {
        try {
            let res = await requests.Services.addServices({
                name: name,
                image: image.image_url
            })
            console.log({ res });
        } catch (error) {
            console.log({ error });
        }
    }


    return (
        <div className='Newservices'>
            <Link className='NewServicesLink' to='/Services'>
               <div className='NewservicesButton'>
                   <button type='button' onClick={onAddServices}>Create</button>
               </div>
            </Link>
            <div className='NewservicesBox'>
                <div className='NewservicesOne'>
                    <div className='NewservicesImage'>
                        <img src={!!image ? image.image_url : Img} />
                    <input
                            style={{
                                display: 'none',
                            }}
                            ref={_imageInput}
                            type={"file"}
                            name='image'
                            id="image-upload"
                            onChange={onImageUpload}
                        />
                          <button className='NewServicesImageB' type='button' onClick={onUpload} Upload>Upload</button>
                    </div>
                </div>
                <div className='NewservicesTwo'>
                    <div className='NewservicesTitle'>
                        <input type="text" placeholder='Перевозка ценностей' />
                        <input type="text" placeholder='Стоимость услуги - 5.000.000' />
                    </div>
                    <div className='NewservicesText'>
                         <textarea type="text" placeholder='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                           ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                          ' />
                    </div>
                    <div className='NewservicesText'>
                         <textarea type="text" placeholder='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                           ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                          ' />
                    </div>
                    <div className='NewServicesSaveBox'> 
                       <button className='NewServicesSaveB' type='button' onClick={onAddServices}>Save</button>
                    </div>
                     
                </div>
            </div>
        </div>
    )
}

export default NewServices
