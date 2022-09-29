import axios from 'axios';

export const getFormData = async (formId: string, id?: string, recordId?: string, page?: string, size?: number) => {
    console.log('tokennnnnn', localStorage.getItem("react-token"))
    return axios.get(`${process.env.REACT_APP_MAIN_SERVER_URL}form-runtime/v1/form-data?formId=${formId}${
        id ? '&filter=id:'+ id : ''}${
            page ? '&page='+page : ''}${
                size ? '&size='+size : ''}${
                    recordId ? '&filter=formData.recordId:' + recordId : ''
                }`,
    {headers: {Authorization: `Bearer ${localStorage.getItem('react-token')}`}}).catch((error) => {
        console.log(error);
    });
};

export const postFormData = async (bodyPayload: {formId: string, formData: any}) => {
    console.log('tokennnnnn', localStorage.getItem("react-token"))
    return axios.post(`${process.env.REACT_APP_MAIN_SERVER_URL}form-runtime/v1/form-data`,
    bodyPayload,{headers: {Authorization: `Bearer ${localStorage.getItem('react-token')}`}}).catch((error) => {
        console.log(error);
    });
};

export const getFormModeler = async (formId: string) => {
    console.log('tokennnnnn', localStorage.getItem("react-token"))
    return axios.get(`${process.env.REACT_APP_MAIN_SERVER_URL}form-modeler/v1/forms/${formId}`,
    {headers: {Authorization: `Bearer ${localStorage.getItem('react-token')}`}})
    .catch((error) => {
      console.log(error);
    });
};

export const UploadFiles = async (body: any) => {
    console.log('tokennnnnn', localStorage.getItem("react-token"))
    const formData = new FormData();
    formData.append("file", body.files[0]);
    formData.append("documentPath", body.documentPath);
    formData.append("documentName", body.documentName);
    return axios
      .post(
        `${
          process.env.REACT_APP_MAIN_SERVER_URL ||
          "https://api.dev.hiringhood.com/"
        }dms/v1/documents`,
        formData,
        {
          headers : {
          'Content-Type': 'multipart/form-data',
          'Authorization': `Bearer ${localStorage.getItem('react-token')}`
          },
          params: {
            documentTypeId: body.documentTypeId
          }
        }
    )
};

export const createJobSeekerProfile = async (bodyPayload: {profileLogId: string, profileData: any}) => {
    console.log('tokennnnnn', localStorage.getItem("react-token"))
    return axios.post(`${process.env.REACT_APP_MAIN_SERVER_URL}hiringhood/v1/job-seeker?profileLogId=${
        bodyPayload.profileLogId}`,
        bodyPayload.profileData, 
        {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('react-token')}`
            }
        }
    )
};

export const updateJobSeekerProfile = async (bodyPayload: {profileId: string, profileData: any}) => {
    console.log('tokennnnnn', localStorage.getItem("react-token"))
    return axios.patch(`${process.env.REACT_APP_MAIN_SERVER_URL}hiringhood/v1/profile/${
        bodyPayload.profileId}`,
        bodyPayload.profileData, 
        {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('react-token')}`
            }
        }
    )
};

export const getJobSeekerProfile = async (profileId: string) => {
    console.log('tokennnnnn', localStorage.getItem("react-token"))
    return axios.get(`${process.env.REACT_APP_MAIN_SERVER_URL}hiringhood/v1/profile/${profileId}`,
        {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('react-token')}`
            }
        }
    )
};

export const getCityList = async () => {
    return axios.get(`https://gist.githubusercontent.com/palimadra/133517e2dca16f31e41af82419d6a50f/raw/bf9d1a603b8edabcdcfdefbdeeafd76f1469da1d/city-list-india`);
}