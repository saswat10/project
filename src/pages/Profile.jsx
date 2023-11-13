const Profile = () => {
	return (
		<div className="container mt-[2rem] py-5">
      <div className='grid lg:grid-cols-2 p-6 gap-6'>
        <section className='grid gap-6'>
          <h2 className='text-xl font-bold'>USER PROFILE</h2>
          <div className='card w-164 p-6 shadow-xl border-2'>
            <ul className='mt-4 space-y-2'>
              <li>
                <span className='font-bold'>Username:</span> Dr. Rahul
              </li>
              <li>
                <span className='font-bold'>Associated Doctor:</span> Dr.
                Subhrajyoti
              </li>
              <li>
                <span className='font-bold'>Height:</span> 98.52
              </li>
              <li>
                <span className='font-bold'>Weight:</span> 84.00
              </li>
              <li>
                <span className='font-bold'>Condition:</span> great
              </li>
            </ul>
            <br />
            <button className='btn'>EDIT</button>
          </div>
          <h2 className='text-xl font-bold'>SOS</h2>
          <div className='card shadow-xl p-6 border-2'>
            <button type='button' className='btn btn-primary'>
              Add or Edit Max 3 Emails to your SOS List
            </button>
            <ul className='mt-4 space-y-2'>
              <li>
                <span className='font-bold'>Email 1:</span> bjkj454@gmail.com
              </li>
              <li>
                <span className='font-bold'>Email 2:</span> 7884asddd@yahoo.com
              </li>
              <li>
                <span className='font-bold'>Email 3:</span> sdaasdsd@outlook.com
              </li>
            </ul>
            <br />
            <button className='btn btn-error'>SEND SOS</button>
          </div>
        </section>
        <img
          className='p-6 h-0 lg:h-full'
          src='/undraw_profile_data_re_v81r.svg'
        />
      </div>
    </div>
	)
}

export default Profile
