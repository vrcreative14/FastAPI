import { useState } from "react"

export default function Signup(){
    const [count, setCount] = useState(0);
    return(
        // <div className="container text-center">
        // <form>
        //         <div className="mb-3">
        //     <div className="row">
        //             <div className="col">
        //                     <span>First Name</span>
        //             </div>
        //             <div className="col">
        //                     <input name="first_name" />
        //             </div>
        //     </div>

        //     <div className="row">
        //             <div className="col-lg-3">
        //                     <span>Last Name</span>
        //             </div>
        //             <div className="col-lg-6">
        //                     <input name="last_name" />
        //             </div>
        //     </div>

        //     <div className="row">
        //             <div className="col-lg-3">
        //                     <span>Email</span>
        //             </div>
        //             <div className="col-lg-6">
        //                     <input name="email" />
        //             </div>
        //     </div>

        //     <div className="row">
        //             <div className="col-lg-3">
        //                     <span>Password</span>
        //             </div>
        //             <div className="col-lg-6">
        //                     <input name="password" />
        //             </div>
        //     </div>
        //     </div>
        //     </form>
        // </div>
        <div className="center">
                
        <form>
                <div className="mb-3 row">
                        <label for="exampleInputEmail1" className="form-label col-sm-2">Email address</label>
                        <div className="col-sm-5">
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                </div>
                <div className="mb-3 row">
                        <label for="exampleInputPassword1" className="form-label col-sm-2">Password</label>
                        <div className="col-sm-5">
                        <input type="password" className="form-control " id="exampleInputPassword1" />
                        </div>
                </div>
                {/* <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                <label className="form-check-label" for="exampleCheck1">Check me out</label>
                </div> */}
                <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        </div>
    )
}