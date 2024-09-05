import React, { useEffect, useState } from 'react'
import './homePage.css'
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
function HomePage() {
  const [isLoading, setIsLoading] = useState(true)
  const [data, setData] = useState([])
  const [isMenu,setIsMenu]=useState(false)
  useEffect(() => {
    // Fetch users from the API
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setData(data));
    setTimeout(()=>{
      setIsLoading(false)

    },1000)
    }, []);

    const deletUser=(id)=>{
      fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(response => response.json())
      .then(data => toast('User Deleted Successfully....'),setIsMenu(false));
    }

    console.log(data)
    return (
    <div className='users'onClick={()=>{
        setIsMenu(false)
    }}>
      <ToastContainer/>
      {isLoading && <div className='loading'>
       <span className="text-white text-3xl mr-8 lh-n">LOADING</span> <span className="btn1 btn"></span><span className="btn2 btn"></span><span className="btn3 btn"></span><span className="btn4 btn"></span><span className="btn5 btn"></span>
        </div>}
      {!isLoading && data.length>0 && data?.map((user)=>(

      <Link to={`user/${user.id}`} className="card" key={user.id} >
        <div className="profile">
          <img src="/user.png" alt="user" className='user'  />
          <button onClick={(e)=>{e.preventDefault(); e.stopPropagation();setIsMenu(true)}}>
          <img src="/menu.png" alt="" className='menu' />
          </button>
          {isMenu && <div className="option">
            <Link to={`/user/updateUser/${user.id}`} className='update'>update <span><img src="/edit.png" alt="edit" /> </span></Link>
            <div className='delete' 
            onClick={(e)=>{
              e.preventDefault();
              e.stopPropagation();
              deletUser(user.id);
            }}
            >Delete</div>
          </div>}
          
        </div>
        <div className="details">
          <div className="name info"><span> name:</span> <span className='bio'> {user.name}</span></div>
          <div className="username info"><span>phone <span style={{color:'red'}}>&#9742;</span> :</span> <span className='bio'>{user.phone} </span></div>
          <div className="contact info"><span>username:</span> <span className='bio'>{user.username} </span></div>
          <div className="website info"><span>website <span style={{color:'red'}}>&#xe30a;</span> :</span> <span className='bio'>{user.website} </span></div>
        </div>
      </Link>
      ))}
      
    </div>
  )
}

export default HomePage
