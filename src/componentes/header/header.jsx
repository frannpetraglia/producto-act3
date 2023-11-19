import './header.css'
import logo from '/public/logo.png'


export default function Header() {

    return (

        <div className="header col-sm-12 ">

            <link
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
                integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g=="
                crossorigin="anonymous"
                referrerpolicy="no-referrer"
            />
            <div className='titulonombre'>
                <div className='foto'>
                    <img src={logo} />
                </div>
                <div className='nombre'>
                    <h1 className='titulo'>La Mia Bottiglia</h1>
                    <p className='parraf'>Desde hace 25 años trayendo los mejores productos a la puerta de tu casa</p>
                    <p className='parraf'>La bebida que buscabas, la encontrás aquí</p>
                </div>
                <div className="buscadorcontainer">
                    <input className='inputBuscar' type="text" placeholder="Nombre del producto" required />
                    <div className='boton'>
                        <i class="fas fa-search icon"></i>
                    </div>

                </div>
                

            </div>

            <ul className='navbar container'>
                <li><a href='#'>Home</a></li>
                <li><a href='#'>Categorias</a></li>
                <li><a href='#'>Promos</a></li>
                <li><a href='#'>Nosotros</a></li>
                <li><a href='#'>Ayuda</a></li>
            </ul>



        </div>
    )


}