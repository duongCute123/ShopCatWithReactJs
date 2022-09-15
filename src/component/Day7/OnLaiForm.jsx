import { useState } from "react";
const Hic = () => {
    const list = {
        firstName: '',
        lastName: '',
        title: '',
        country: ''
    }
    const [data, setData] = useState(list)
    const change = (e) => {
        const { name, value } = e.target
        setData({ ...data, [name]: value })
    }
    const submit = (e) => {
        e.preventDefault();
        console.log(data)
    }
    const { firstName, lastName, country, title } = data
    return (
        <div className="hello">
            <label htmlFor="">Nhập tên của bạn</label> <br />
            <input type="text" value={firstName} name="firstName" id="" onChange={change} /> <br />
            <label htmlFor="">Nhập tên của bạn vào</label> <br />
            <input type="text" value={lastName} name="lastName" onChange={change} /> <br />
            <label htmlFor="">Nhập title vào</label> <br />
            <input type="text" value={title} name="title" id="" onChange={change} /> <br />
            <label htmlFor="">Nhập quốc gia của bạn</label> <br />
            <input type="text" value={country} name="country" id="" onChange={change} /> <br />
            <input type="button" value="Submit" onClick={submit} />
        </div>
    )
}
const options = [
    {
        value: '',
        label: '-- Select Country--',
    },
    {
        value: 'Finland',
        label: 'Finland',
    },
    {
        value: 'Sweden',
        label: 'Sweden',
    },
    {
        value: 'Norway',
        label: 'Norway',
    },
    {
        value: 'Denmark',
        label: 'Denmark',
    },
]
const selectoption = options.map(({ value, label }) => (
    <options key={label} value={value} >
        {' '}
        {label}
    </options>
))
const LayForm = () => {
    const list = {
        firstName: '',
        lastName: '',
        email: '',
        title: '',
        country: '',
        tel: '',
        dateofbirth: '',
        favoritcolor: '',
        weight: '',
        gender: '',
        file: '',
        bio: '',
        skills: {
            html: false,
            css: false,
            javascrip: false
        }
    }
    const [data, setData] = useState(list)
    const change = (e) => {
        const { name, value, type, checked } = e.target
        if (type === 'checkbox') {
            setData({ ...data.skills, [name]: checked });
        }
        else if (type === 'file') {
            setData({ ...data, [name]: e.target.file[0] })
        }
        else {
            setData({ ...data, [name]: value })
        }
    }
    const submit=(e)=>{
        e.preventDefault();
        console.log(data)
    }
    const {firstName,lastName,title,email,tel,}=data
}
export default Hic