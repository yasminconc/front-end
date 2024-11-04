import Header from "../../components/Header/header"
import Chart from "../../components/Chart/Chart"

const Home: React.FC = () => {
  return (
    <div className="flex flex-col items-center min-h-screen bg-gradient-to-b from-gray-900 via-indigo-950 to-black text-white">
      <Header/>

      <div className="flex flex-col items-center text-center mt-8 sm:mt-12 mb-6 sm:mb-10 px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold bg-clip-text text-transparent bg-white mb-3 sm:mb-4">
          Consulte a cotação atual
        </h2>
        <p className="text-sm sm:text-lg text-gray-300 max-w-xs sm:max-w-md lg:max-w-2xl">
          Veja as cotações de moedas nos últimos 7 dias e acompanhe as variações de câmbio para fazer conversões precisas e informadas.
        </p>
      </div>

      <div className="flex justify-center w-full max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-3xl xl:max-w-4xl px-4">
        <Chart />
      </div>
    </div>
  )
}

export default Home
