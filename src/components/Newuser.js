import {useRef} from "react";
function Newuser(){

    let txtname = useRef();
    let txtmail = useRef();
    let dob = useRef();
    let city = useRef();

    var arr = [];
    function funsubmit(event){
        event.preventDefault();

        let obj = {name:txtname.current.value,
            email:txtmail.current.value,
            dates:dob.current.value,
            cities:city.current.value};

        arr.push(obj);
        localStorage.setItem("data",JSON.stringify(arr));
    }
    return(
        <div style={{border:"1px double black",width:"220px",padding:"10px",borderRadius:"5px",marginTop:"150px",marginLeft:"250px"}}>
            <form>
                Name:<input type="text" placeholder="username" ref={txtname}></input><br></br>
                Email:<input type="email" placeholder="email" ref={txtmail}></input><br></br>
                DOB:<input type="date" placeholder="dob" ref={dob}></input><br></br>
                City:<input type="text" placeholder="city" ref={city}></input><br></br>
                <input type="submit" value="submit" onClick={funsubmit}></input>
            </form>
        </div>
    );
}
export default Newuser;