import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const OtherLogin = () => {
    const {googleSignIn}= useContext(AuthContext);
    const handelGoogleSignIn = () =>{
        googleSignIn()
        .then(result =>{
            console.log(result)
        } )
        .catch(error => console.log(error))
    }
    return (
        <div>
            <div className="flex justify-around mt-3">
                <img
                  className="w-[55px] h-[55px] rounded-full"
                  src="https://upload.wikimedia.org/wikipedia/commons/e/ee/Logo_de_Facebook.png"
                  alt=""
                />
                <img
                  className="w-[55px] h-[55px] rounded-full"
                  src="https://pngimg.com/uploads/linkedIn/linkedIn_PNG14.png"
                  alt=""
                />
                <img
                onClick={handelGoogleSignIn}
                  className="w-[55px] h-[55px] rounded-full"
                  src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                  alt=""
                />
              </div>
        </div>
    );
};

export default OtherLogin;