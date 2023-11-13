

const History = () => {
  return (
    <div className="container mt-[2rem] py-5">
      <div className="grid lg:grid-cols-2 p-6 gap-10">
        <article className="card shadow-xl border-2 p-10 flex flex-col justify-between">
          <div>
            <h1 className="text-2xl mb-6">Current Status:</h1>
            <p className="text-lg">
              Glucose Level: 141.977 <br />
              CHO Level: 0.0000 <br />
              Insulin Dose: 0.021 <br />
              Last Meal Time: NA <br />
              Insulin Dose Time: 06: 00: 00 <br />
              Physical Activity: 3
            </p>
          </div>
          <br />
          <button className="btn">Refresh</button>
        </article>
        <img src="/undraw_charts_re_5qe9.svg" alt="" className="p-5 h-0 lg:h-fit"/>
        <div>
          <h2 className="font-bold text-xl p-9">Glucose Level</h2>
        <img src="/Group 2.png" alt="" />
        </div>
        <div>
          <h2 className="font-bold text-xl p-9">Glucose Level</h2>
        <img src="/Group 2.png" alt="" />
        </div>
      </div>
    </div>
  )
}

export default History