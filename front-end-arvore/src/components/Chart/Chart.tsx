import { useState, useEffect } from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import axios from 'axios'

const Chart: React.FC = () => {
	const [chartOptions, setChartOptions] = useState({
		chart: {
			type: 'line',
			backgroundColor: '#1e1e1e'
		},
		title: {
			text: 'Taxa de câmbio',
			style: {
				color: '#ffffff'
			}
		},
		credits: {
			enabled: false
		},
		xAxis: {
			categories: [],
			labels: {
				style: {
					color: '#ffffff'
				}
			},
			title: {
				style: {
					color: '#ffffff'
				}
			}
		},
		yAxis: {
			labels: {
				style: {
					color: '#ffffff'
				}
			},
			title: {
				style: {
					color: '#ffffff'
				}
			},
			lineColor: '#ffffff',
			gridLineColor: '#444444'
		},
		legend: {
			itemStyle: {
				color: '#ffffff'
			}
		},
		series: [
			{
				name: 'USD',
				color: '#151832',
				data: []
			}
		]
	})

	type Currency = 'USD' | 'EUR' | 'ARS'

	const fetchExchangeRate = async (currency: Currency) => {
		try {
			const response = await axios.get(
				`https://economia.awesomeapi.com.br/json/daily/${currency}/7`
			)
			const dates = response.data.map((entry: any) =>
				new Date(entry.timestamp * 1000).toLocaleDateString('pt-BR')
			)
			const rates = response.data.map((entry: any) => parseFloat(entry.bid))

			setChartOptions({
				...chartOptions,
				xAxis: {
					categories: dates,
					labels: {
						style: {
							color: '#ffffff'
						}
					},
					title: {
						style: {
							color: '#ffffff'
						}
					}
				},
				series: [
					{
						name: currency.toUpperCase(),
						color:
							currency === 'USD'
								? '#ff0000'
								: currency === 'EUR'
								? '#66B5D7'
								: '#ffa500',
						data: rates
					}
				]
			})
		} catch (error) {
			console.error('Erro ao buscar taxa de câmbio:', error)
		}
	}

	useEffect(() => {
		fetchExchangeRate('USD')
	}, [])

	return (
		<>
			<div className='hidden lg:flex flex-col items-center p-8 bg-gradient-to-b from-gray-900 via-indigo-950 to-black rounded-xl shadow-lg w-full max-w-4xl'>
				<h1 className='text-3xl font-bold text-white mb-8'>
					Conversão de Câmbio
				</h1>

				<div className='flex space-x-4 mb-6'>
					<button
						onClick={() => fetchExchangeRate('USD')}
						className='bg-gray-950 hover:bg-sky-950 text-white font-semibold py-2 px-4 rounded-lg transition duration-200'
					>
						Dólar (USD)
					</button>

					<button
						onClick={() => fetchExchangeRate('EUR')}
						className='bg-gray-950 hover:bg-sky-950 text-white font-semibold py-2 px-4 rounded-lg transition duration-200'
					>
						Euro (EUR)
					</button>

					<button
						onClick={() => fetchExchangeRate('ARS')}
						className='bg-gray-950 hover:bg-sky-950 text-white font-semibold py-2 px-4 rounded-lg transition duration-200'
					>
						Peso Argentino (ARS)
					</button>
				</div>

				<div className='w-full h-[500px]'>
					<HighchartsReact highcharts={Highcharts} options={chartOptions} />
				</div>
			</div>

			<div className='flex lg:hidden flex-col items-center w-full'>
				<div className='flex space-x-2 mb-2'>
					<button
						onClick={() => fetchExchangeRate('USD')}
						className='bg-gray-950 hover:bg-sky-950 text-white font-semibold py-1 px-2 text-xs rounded transition duration-200'
					>
						Dólar (USD)
					</button>

					<button
						onClick={() => fetchExchangeRate('EUR')}
						className='bg-gray-950 hover:bg-sky-950 text-white font-semibold py-1 px-2 text-xs rounded transition duration-200'
					>
						Euro (EUR)
					</button>

					<button
						onClick={() => fetchExchangeRate('ARS')}
						className='bg-gray-950 hover:bg-sky-950 text-white font-semibold py-1 px-2 text-xs rounded transition duration-200'
					>
						Peso Argentino (ARS)
					</button>
				</div>

				<div className='w-full h-[250px] flex justify-center mt-6'>
					<HighchartsReact highcharts={Highcharts} options={chartOptions} />
				</div>
			</div>
		</>
	)
}

export default Chart
