import React from 'react'
import { useParams } from 'react-router-dom'

const EditJobApplication = () => {
    const {id} = useParams();
  return (
    <div>
    Job Id:
      {id}
    </div>
  )
}

export default EditJobApplication
