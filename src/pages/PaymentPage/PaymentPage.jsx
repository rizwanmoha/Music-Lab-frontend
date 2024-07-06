
import { Fragment, useEffect, useState } from "react";

import styles from './PaymentPage.module.css'
import axios from "axios";
import { useNavigate, useParams } from "react-router";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { purchaseCourse } from "../../store/auth";
import { CircularProgress, Skeleton } from "@mui/material";
import { backendUrl } from "../../url";


    function capitalizeFirstLetter(string) {``
      if(string){
        return string.charAt(0).toUpperCase() + string.slice(1);
      }
    }

function PaymentPage(){

    const [course,setCourse] = useState(null);
    const [loading, setLoading] = useState(true);
    const [paymentLoading, setPaymentLoading] = useState(false);

    const user = useSelector((state) => state.auth);
    const navigate = useNavigate();
    const params = useParams();
    const dispatch = useDispatch();
    
    const piiche = () => {
      navigate(-1)
      };
    
      const confrm = () => {
       
      };
    
      const copyToClip = (phoneNumber) => {
        
      };

      useEffect(()=>{
        async function getCourseInfo(){
          try{
            
            const response = await axios.get(`${backendUrl}/api/course/description/${params.id}`);
            
            setCourse(response.data.course);
            setLoading(false)
          }catch(error){
            console.error("Error fetching course info:", error);
          }
        }

        getCourseInfo();
        // setLoading(false)
      },[])

  
  const [orderId, setOrderId] = useState("");

  const createOrder = async () => {
    setPaymentLoading(true);
    try {
      const response = await axios.post(
        `${backendUrl}/api/create-order`,
        {
          amount: course?.price*100
        }
      );
      setOrderId(response.data.id);
    } catch (error) {
      console.error("Error in placing order:", error);
    }
  };

  async function purchaseHandler(response){
    
    const formData = {
      userId : user.id,
      courseId : params.id
    }

    setPaymentLoading(false);
    try {
          const res = await axios.post(`${backendUrl}/api/v1/user/purchase`, formData, {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `${user.token}`
      }
    }) 

      if(res.status == 200){
        console.log(course)
        dispatch(purchaseCourse(course))
        navigate('/')
        toast.success("Payment Successful")
      }

    } catch (error) {
      console.error("Error in placing order:", error);  
      toast.error("Error In Purchase")
    }
  }

  const displayRazorpay = async () => {
    const options = {
      key: "rzp_test_CFaCcyskyo1gnl",
      amount: course?.price * 100, 
      currency: "INR",
      name: "Masters Of Music",
      description: course?.title,
      order_id: orderId,
      handler: purchaseHandler,
      prefill: {
        name: user.firstName + " " + user.lastName,
        email: user.email,
        contact: "8076784892",
      },
      theme: {
        color: "#333333",
      },
    };
    const razorpayInstance = new window.Razorpay(options);
    razorpayInstance.open();
  };

  const handlePayment = async () => {
    await createOrder();
    await displayRazorpay();
 };

    return(
        <Fragment>
    <div className={styles.checkoutbody}>
      <div className={styles.centerWrapper}> 
        <div className={styles.content}>
          <div className={styles.topBar}>
            <div onClick={piiche} className="cursor-pointer">
              <i className="fas fa-arrow-left mr-2"></i>
              <span className={styles.bb} >Go Back</span>
            </div>
          </div>
          <div className={styles.bagProduct}> 
            <div className={styles.courseImg}>
            {!loading ? (
              <img src={course?.imageUrl} className={styles.img1} alt="Course" /> ) : (<Skeleton animation="wave" variant="rectangular" width={'14rem'} height={"76%"} sx={{marginLeft: '1rem', marginTop: '1.4rem'}}/>)
            }
            </div>
            <div className={styles.description}>
              <p className={styles.productCode + ' ' + styles.small} style={{ color: 'black' }}>
                {!loading ? (`Product code: ${course?._id}`) : <Skeleton animation="wave" variant="text" sx={{width:'80%', fontSize: '0.8rem', borderRadius: 0}}/>}
              </p>
              <p className={styles.course_title} style={{ color: 'black' }}>{!loading ? course?.title : 
                                                              <Skeleton animation="wave" variant="text" sx={{width:'100%', fontSize: '1.5rem', borderRadius: 0}}/>}</p>
              <p className={styles.teacher}>{!loading ? ("By" + " " +capitalizeFirstLetter(course?.teacher[0].firstName) + " "+capitalizeFirstLetter(course?.teacher[0].lastName)) :  <Skeleton animation="wave" variant="text" width={200}
                                                                      sx={{width:'100%', fontSize: '1rem', borderRadius: 0}}/> }</p>

              <p className={styles.courseInfo}>{!loading ? (course?.description.slice(0,110)+".....") : 
                                                            <Fragment><Skeleton animation="wave" variant="text" width="392px"
                                                              sx={{fontSize: 20, borderRadius: 0, marginLeft: "0rem", marginRight: '20px'}}/>
                                                              <Skeleton animation="wave" variant="text" width="392px"
                                                              sx={{fontSize: 20, borderRadius: 0, marginLeft: "0rem", marginRight: '20px'}}/>
                                                              <Skeleton animation="wave" variant="text" width="302px"
                                                              sx={{fontSize: 20, borderRadius: 0, marginLeft: "0rem", marginRight: '20px'}}/>                                                              </Fragment>}</p>
            </div>
          </div>
          <div className={styles.bagTotal}>
            <div className={styles.total}>
              <h3>Price:</h3>
              <h3>{!loading ? course?.price : 
              <Skeleton animation="wave" width={'6rem'} variant="text" sx={{fontSize:'1.6rem', borderRadius: 0}}/>}</h3>
            </div>
            <div style={{ margin: '1rem 0' }} id="abracadbra">
              <input type="checkbox" name="promo-check" id="mycheck"  />
              <label htmlFor="promo-check" className="ml-3">I have a promo code</label>
            </div>
           
            <div className={styles.promoCode} id="promo_input">
              <input
                type="text"
                name="promo-checkbox"
                id="promo"
                className="w-[75%]"
                placeholder="Enter your promo code here"
                style ={{border :  '1px solid purple' }}
              />
              <button className={styles.apply} onClick={confrm}>Apply</button>
            </div>
            
              <button className={styles.checkbtn} type="submit" id="chkout" style={{backgroundColor: '#9966cc'}} onClick={handlePayment}>
                <div className="uppercase">{!paymentLoading ? "Proceed to Checkout" : <CircularProgress color="inherit"/>}</div>
              </button>
            
          </div>
          <div style={{ textAlign: 'center', marginBottom: '2rem', marginTop: '0.7rem'}}>
            <abbr title="Click To Copy Phone Number" style={{ textDecoration: 'none' }} id="ccpy">
              <p className={styles.hlp} onClick={() => copyToClip('9569808170')} style={{color : 'black' }}>
                Need help? Call +91 9569808170
              </p>
            </abbr>
          </div>
        </div>
      </div>
      <div className={styles.bg}></div>
      
    </div>

        </Fragment>
    )
}


export default PaymentPage;