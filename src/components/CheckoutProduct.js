import Image from 'next/image'
import {StarIcon} from "@heroicons/react/solid"
import Currency from "react-currency-formatter"
import {useDispatch} from "react-redux"
import {addToBasket, removeFromBasket} from "../slices/basketSlice"

function CheckoutProduct({id, title, price, rating, description, category, image, hasPrime}) {

    const dispatch = useDispatch()

    const addItemToBasket = () => {

        const product = {id, title, price, rating, description, category, image, hasPrime}
        //Push Item To Redux
        dispatch(addToBasket(product))
    }

    const  removeItemFromBasket = () => {

        //Remove Item from redux
        dispatch(removeFromBasket({id}))
    }

    return (


        <div className=" grid grid-cols-5 ">
            <Image
                src={image} height={200} width={200} objectFit="contain"
            />
            {/*    Middle*/}
            <div className="col-span-3 mx-5">
                <p>{title}</p>
                <div className="flex">
                    {Array(rating)
                        .fill()
                        .map((_, i) => (
                            <StarIcon key={i} className="h-5 text-yellow-500"/>
                        ))}
                </div>

                <p className="text-xs my-2 line-clamp-2 ">
                    {description}
                </p>
                <Currency quantity={price}/>
                {hasPrime && (
                    <div className="flex items-center space-x-2">
                        <img
                            className="w-12"
                            src="https://links.papareact.com/fdw"
                            alt=""/>
                        <p className="text-xs text-gray-500">Free Next Day Delivery</p>
                    </div>
                )
                }
            </div>
            <div className="flex flex-column space-x-2 my-auto justify-self-start">
                <div>
                    <button onClick={addItemToBasket} className="button ">Add To Basket</button>
                </div>
                <div>
                <button onClick={removeItemFromBasket} className="button">Remove form basket</button>

                </div>
            </div>
        </div>
    )
}

export default CheckoutProduct