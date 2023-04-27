import { useState } from "react"

export default function Signup(){
    const [count, setCount] = useState(0);
    return(
        <>
            <div className="row">
                    <div className="col-lg-6">
                            <span>First Name</span>
                    </div>
                    <div className="col-lg-6">
                            <input name="first_name" />
                    </div>
            </div>

            <div className="row">
                    <div className="col-lg-6">
                            <span>Last Name</span>
                    </div>
                    <div className="col-lg-6">
                            <input name="last_name" />
                    </div>
            </div>

            <div className="row">
                    <div className="col-lg-6">
                            <span>Email</span>
                    </div>
                    <div className="col-lg-6">
                            <input name="email" />
                    </div>
            </div>

            <div className="row">
                    <div className="col-lg-6">
                            <span>Password</span>
                    </div>
                    <div className="col-lg-6">
                            <input name="password" />
                    </div>
            </div>

        </>
    )
}