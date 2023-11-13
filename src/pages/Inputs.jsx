const Inputs = () => {
	return (
		<div className='container mt-[2rem] py-5'>
			<div className='grid lg:grid-cols-2 p-6 gap-6'>
				<article className='card p-8 shadow-xl border-2'>
					<h1 className='text-2xl'>INPUT</h1>
					<br />
					<form className='flex flex-col justify-between'>
						<label className='label'>Meal Intake:</label>
						<input
							type='text'
							placeholder='apple,orange,burger'
							className='input input-primary'
						/>
						<label className='label'>Meal Time:</label>
						<input type='time' step='2' className='input input-primary' />
						<label className='label'>Insulin Dose Time:</label>
						<input type='time' step='1' className='input input-primary' />
						<label className='label'>Insulin Dose Size:</label>
						<input
							type='text'
							placeholder='ex 0.92'
							className='input input-primary'
						/>
            <br />
						<button className='btn'>SUBMIT</button>
					</form>
				</article>
				<img src='/undraw_text_field_htlv.svg' alt='image' className="p-4 h-0 lg:h-full"/>
			</div>
		</div>
	)
}

export default Inputs
