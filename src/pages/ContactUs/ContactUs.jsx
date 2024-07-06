import { Fragment, useState } from "react";
import './ContactUs.css'
import { toast } from "react-toastify";
import axios from "axios";
import background from '../../images/contactUsBg.jpg';
import { useSelector } from "react-redux";
import { backendUrl } from "../../url";


function ContactUs(){

    const [firstName,setFirstName] = useState('');
    const [lastName,setLastName] = useState('');
    const [email,setEmail] = useState('');
    const [message,setMessage] = useState('');

    const [loader,setLoader] = useState(false);

    
    const user = useSelector(state => state.auth)

    async function submitQuery(e){

        e.preventDefault();
            if(firstName === "" || email === "" || message === ""){
                toast.error('Please Fill All The Required Fields')
                return ;
            }
            try {
                setLoader(true);
                const req = await axios.post(`${backendUrl}/api/v1/user/contactus`, {
                    firstName,
                    lastName,
                    email,
                    message
                },{
                    headers : {
                        "Content-Type" : "application/json", 
                        'Authorization': `${user?.token}`,
                    }
                })
                setLoader(false);
                if(req.status === 200){
                    toast.success('Query Submitted Successfully')
                    setFirstName("");
                    setLastName("");
                    setEmail("");
                    setMessage(""); 
                }

            } catch (e){
                console.log(e)
                setLoader(false);
                toast.error('Something Went Wrong, Please Try Again')
            }
            
    }


    return(
        <Fragment>
            {/* <Header /> */}
        <div className="wholepage bg-white" style={{ backgroundImage: `url(${background})` , backgroundRepeat: "no-repeat"}}>
        <div className="container-wrapper contact-bg">            
            <div className="container-fluid">
                <div className="mainformcont">
                <div className="">
                    <div className="mainform d-flex flex-row flex-wrap">

                    <div className="formblock col font-extralight">
                        <div className="fhv">
                        <span className="formheader">
                            <h1 style={{ fontSize: '32px',color: 'black', paddingLeft: 0 }}>Get in Touch With Us</h1>
                        </span>
                        </div>

                        <div className="mt-4 ml-4 container-fluid-wrapper">
                        <div className="">
                            <div className="form-col-container row row-cols-2">

                            <div className="col-2 forminnerblock ">
                                <img className="img-fluid w-75 itemimage"
                                src="https://www.peoplemetrics.com/hubfs/Website/email_1-blue-bottom.svg" alt="email"
                                loading=""></img>
                            </div>

                            <div className="col-10 formtxt "><a>contact@guitar365.com</a>
                            </div>

                            <div className="col-2 forminnerblock ">
                                <img className="img-fluid w-75 itemimage"
                                src="https://www.peoplemetrics.com/hubfs/Website/phone_1-blue-bottom.svg" alt="phone"
                                loading=""/>
                            </div>

                            <div className="col-10 formtxt "> <a>+91 8076779705</a>
                            </div>

                            <div className="col-2 forminnerblock ">
                                <img className="img-fluid w-75 itemimage"
                                src="https://www.peoplemetrics.com/hubfs/Website/pin-blue-bottom.svg" alt="email" loading=""/>
                            </div>

                            <div className="col-10 formtxt"> <a href="https://goo.gl/maps/btQAbi3aqZfHdSz39">BH1 IIIT SriCity,
                                Chitoor</a>
                            </div>
                            </div>
                        </div>
                        </div>





                    </div>
                    <div className="formb2 mt-4">
                        <div className="contact-wrapper">
                        <form id="contact-form"  className ="form-horizontal" role="form">

                            <div className="form-group row  justify-content-between ml-0 mr-0" style={{width:'100%'}}>
                            <div className="col-sm-6  pl-0 pr-0 md:pr-2">
                                <input type="text" className="form-control text-black" 
                                id="name" 
                                placeholder="FIRST NAME*" 
                                name="fname"
                                value={firstName} 
                                onChange={(e)=>{setFirstName(e.target.value);}}
                                required 
                                style={{ width: '100%' , backgroundColor: 'white' }}/>
                            </div>

                            <div className="col-sm-6 pr-0  pl-0 md:pl-2">
                                <input type="text" className="form-control" id="name2" placeholder="LAST NAME" 
                                value={lastName} 
                                onChange={(e)=>{setLastName(e.target.value);}}
                                name="lname"  
                                style={{ width: '100%' , backgroundColor: 'white' }}/>
                            </div>

                            </div>

                            <div className="form-group">
                            <div className="col-sm-12">
                                <input type="email" className="form-control" 
                                id="email" 
                                placeholder="EMAIL*" 
                                name="email" 
                                value={email}
                                onChange={(e)=>{setEmail(e.target.value)}} 
                                style = {{backgroundColor: 'white'}}
                                required/>
                            </div>
                            </div>
                                <div className="col-sm-12">
                                    <textarea className="form-control" 
                                    rows="10" 
                                    placeholder="MESSAGE*" 
                                    name="message"  
                                    style = {{backgroundColor: 'white'}} required
                                    value={message}
                                    onChange={(e)=>{setMessage(e.target.value)}} />
                            </div>

                            <button className="btn btn-primary send-button bg-[#4D84E2] hover:bg-[#3E6AB5]" id="submit" onClick={(e)=>{submitQuery(e)}}>
                            <span className="send-text">{!loader ? "SEND" : "SENDING..."}</span>

                            </button>

                        </form>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            
            <div>
            <br/>
            <br/>
            <br/>
            </div>
            </div>
            </div>
         {/* <Footer /> */}
        </Fragment>
    )
}

export default ContactUs;   