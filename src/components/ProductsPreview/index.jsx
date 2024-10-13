import { useContext } from "react"
import { ShoppingContext } from "../../context"
import { IoIosCloseCircleOutline } from "react-icons/io";
import './index.css'

function ProductsPreview() {

  const context = useContext(ShoppingContext)

  return (
    <aside className={`preview-products ${context.isProductPreviewOpen ? 'flex' : 'hidden'}`}>
      <section className="content-container">
        <div className="close">
          <IoIosCloseCircleOutline className='close-icon' onClick={() => context.closeProductPreview()} />
        </div>
      </section>
    </aside>
  )
}

export { ProductsPreview }