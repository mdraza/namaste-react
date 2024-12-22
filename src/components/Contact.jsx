const Contact = () => {
  return (
    <div className="container">
      <h1 className="text-3xl font-bold text-orange-400 mb-3">Contact Page</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque et esse
        animi inventore explicabo aut perspiciatis laudantium porro autem.
        Perferendis, ipsa minima eaque repudiandae animi ut excepturi corporis
        quasi corrupti.
      </p>
      <form action="" className="mt-10">
        <input
          type="text"
          placeholder="name"
          className="border-2 px-3 py-2 rounded mr-5"
        />
        <input
          type="text"
          placeholder="message"
          className="border-2 px-3 py-2 rounded mr-5"
        />
        <button className="px-5 py-2 bg-slate-600 text-white rounded">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
