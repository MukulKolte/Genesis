import React from 'react'
import User_Registration from './User_Registration';
import EventReport from './EventReport';
import FileUpload from './FileUpload';

function Admin() {


  return (
    <div>
      <h1>This is Admin page.</h1>
      {/* <EventReport />
      <User_Registration /> */}
      <FileUpload />
    </div>
  )
}

export default Admin
