import React from "react";
import { useQuery } from "react-query";
import axios from "axios";

const fetchUser = emailid => {
  return axios.get( `http://localhost:4000/users/${emailid}` )
}

const fetchCourses = channelid => {
  return axios.get( `http://localhost:4000/channels/${channelid}` )
}
export const DependentQueryComponent = ( { emailId } ) => {

  const { data: user } = useQuery( ['user', emailId], () => fetchUser( emailId ) )

  const channelId = user && user.data.channelId
  const { data: course } = useQuery( ['course', channelId], () => fetchCourses( channelId ), {
    enabled: !!channelId
  } )

  console.log( 'user:', user, 'channelId:', channelId )
  console.log( 'course:', course )
  return (
    <div>
      <h1>Dependent Query Example</h1>
      {
        course && course.data.courses.map( ( course ) => {
          return <div key={course.name}>{course}</div>
        } )
      }
    </div>
  )
}