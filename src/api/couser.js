import http from "../utils/http"

const CoursesApi = {
    getCourses() {
      return http.get('courses')
    },
  }
  
  export default CoursesApi