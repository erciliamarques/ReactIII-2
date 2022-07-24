import './sobre.css'
import Header from '../../componentes/Header/Header'
import image from '../../../assets/blooming.svg'

function Sobre() {
  return (
    <>
      <Header 
        image={image} 
        description="Ilustração sobre mim"
      >
        Sobre
      </Header>
      <main className="introducting">
        {/* <img src={meme} alt="/> */}
        <section className="container-text">
          <h2 className="title-2">Prazer, Ercilia</h2>
          <p className="paragraph">Eu sou Ercilia, estudante e tenho uma gata e uma cachorra maltesa, o Tetilha e a Emily. Nascida e moro em Pernambuco.</p>
          <p className="paragraph">
            Aluna da Reprograma da turma front-end e tentando a transição de carreira.
          </p>
          <p className="paragraph">
            Cursei administração e tenho mestrado em sociologia, nos últimos anos trabalhei com marketing digital em agência de publicidade de empresas mas me interessei por programação. Estudo desenvolvimento web, lógica de programação, Git, GitHub, HTML5, CSS3, JavaScript e React JS. Sou curiosa, questionadora e gosto de aprender.
          </p>
        </section>
      </main>
    </>
  )
}

export default Sobre