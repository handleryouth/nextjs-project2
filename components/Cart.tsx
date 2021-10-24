import Image from "next/image";

interface CartProps {
  count: number;
  toggleCart: boolean;
  setCount: React.Dispatch<React.SetStateAction<number>>;
}

export const Cart: React.FC<CartProps> = ({ count, toggleCart, setCount }) => {
  const cartContainerStyle = {
    display: `${toggleCart ? "flex" : "none"}`,
  };

  return (
    <div className="absolute w-screen lg:w-auto z-30 right-0 lg:-right-40 top-12 slide-in-blurred-top  flex justify-center items-center">
      <div
        className=" bg-white shadow-lg w-90vw  lg:w-auto flex-col rounded-md "
        style={cartContainerStyle}
      >
        {count !== 0 ? (
          <>
            <div className="p-6 border-b-2 font-black ">
              <h3>Cart</h3>
            </div>

            <div className="flex lg:items-center lg:w-96 p-6 justify-between flex-col lg:flex-row items-start">
              <div>
                <Image
                  src="/images/image-product-1-thumbnail.jpg"
                  width={40}
                  height={40}
                  alt="Shoes Picture"
                  layout="fixed"
                ></Image>
              </div>

              <div className="flex lg:block flex-col my-4 lg:mt-0">
                <p>Fall Limited Edition Sneakers</p>
                <p>
                  $125.00 x {count} ${125 * count}.00
                </p>
              </div>

              <div>
                <Image
                  className="cursor-pointer"
                  src="/images/icon-delete.svg"
                  width={17}
                  height={20}
                  alt="Shoes Picture"
                  layout="fixed"
                  onClick={() => setCount(0)}
                ></Image>
              </div>
            </div>

            <button className="w-100 bg-orange m-6 py-4 rounded-md text-white">
              Checkout
            </button>
          </>
        ) : (
          <div className="lg:w-96 p-6 text-center">
            <p>Your cart is empty</p>
          </div>
        )}
      </div>
    </div>
  );
};
