import './index.css'
import sendIcon from '../../assets/send.svg'

function Footer() {
  return (
    <footer>
      <section className="footer__container">
        <div className='logo'>
          <h2>
            PUREM <br /> ODA
          </h2>
          <p>
            for everyone but notanyone
          </p>
        </div>
        <div className='links'>
          <div className='product'>
            <h3>product</h3>
            <ul>
              <li><a href="">jackets</a></li>
              <li><a href="">shirts</a></li>
              <li><a href="">dresseds</a></li>
              <li><a href="">outwears</a></li>
              <li><a href="">hats</a></li>
            </ul>
          </div>
          <div className='buying'>
            <h3>buying</h3>
            <ul>
              <li><a href="">shop</a></li>
              <li><a href="">term of use</a></li>
              <li><a href="">privacy</a></li>
              <li><a href="">how it works</a></li>
              <li><a href="">custome service</a></li>
            </ul>
          </div>
          <div className='social'>
            <h3>social</h3>
            <ul>
              <li><a href="">facebook</a></li>
              <li><a href="">instagram</a></li>
              <li><a href="">twitter</a></li>
              <li><a href="">linkedin</a></li>
            </ul>
          </div>
        </div>
        <div className='community'>
          <h3>join out community</h3>
          <div className="send-email">
            <input type="text" placeholder='EMAIL ADDRESS' />
            <button>
              <img src={sendIcon} alt="Send email" />
            </button>
          </div>
        </div>
      </section>
    </footer>
  )
}

export { Footer }