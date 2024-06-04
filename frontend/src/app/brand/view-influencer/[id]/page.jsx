'use client';
import { useParams } from 'next/navigation';
import React, { useState } from 'react'

const viewInfluencer = () => {

  const { id } = useParams();

  const [influencer, setInfluencer] = useState([]);

  const getInfluencerData = async () => {
    const res = await fetch('http://localhost:5000/influencer/getbyid/' + id);
    console.log(res.status);

    const data = await res.json();
    console.log(data);

    setInfluencer(data);
  }

  useEffect(() => {
    getInfluencerData();
  }, []);

  return (
    <div>
      
    </div>
  )
}

export default viewInfluencer;