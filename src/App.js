
import './App.css';
import { usestate } from 'react'

function App() {
  const [inputData, setInputData] = usestate({ fname: "", lname: "", add: "", mail: "", phone: "", age: "" });
  const [mainData, setMainData] = usestate(JSON.parse(localStorage.getItem("localdata")) || []);
  const [isEdit, setIsEdit] = usestate("-1")
  const [checked, setChecked] = usestate("")
  const [selectoption, setSelectoption] = usestate("")
  const [serch, setSerch] = usestate("")
  const [select, setSelect] = usestate("")


  const handleonchange = (e) => {
    console.log(e.target.name);
    setInputData({ ...inputData, [e.target.name]: e.target.value })
  }
  const hnadleonsubmite = () => {
    // edit  button
    if (isEdit !== -1) {
      const updatee = mainData.map((item, index) => {
        if (isEdit === index) {
          return inputData;
        } return item;
      }
      )
      setMainData(updatee)
    }
    else {
      setMainData([...mainData, inputData]);
      localStorage.setItem("localdata", JSON.stringify([...mainData, inputData]));
    }

  }
  console.log(inputData);
  // deletebutton
  const handledelte = (index) => {
    const deletedata = mainData.filter((item, i) => i !== index);
    setMainData(deletedata);
    localStorage.setItem("localdata", JSON.stringify(deletedata));
  }
  // edit button
  const handleEdit = (id, record) => {
    setIsEdit(id);
    setInputData(record);
  }
  const handleCheckbox = (e) => {
    if (!checked.includes(e.target.value)) {
      setChecked([
        ...checked,
        e.target.value
      ])
        ;
    }
    else { setChecked(checked.filter((item) => item !== e.target.value)) }
  }
  const handleOncheck = () => {
    if (checked.length === mainData.length) {
      setChecked([])
    }
    else setChecked(mainData.map((item) => item.fname))
  }
  console.log(checked);

  const handlesort = () => {
    if (selectoption === "a") {
      const sort1 = mainData.sort((a, b) => { return (a.fname > b.fname ? 1 : -1) })
      setMainData([...sort1])
      localStorage.setItem("localdata", JSON.stringify(sort1));

    }
    else if (selectoption === "b") {
      const sort2 = mainData.sort((a, b) => { return (a.lname > b.lname ? 1 : -1) })
      setMainData([...sort2])
      localStorage.setItem("localdata", JSON.stringify(sort2));
    }

    else if (selectoption === "c") {
      const sort3 = mainData.sort((a, b) => { return (a.add > b.add ? 1 : -1) })
      setMainData([...sort3])
      localStorage.setItem("localdata", JSON.stringify(sort3))
    }

    else if (selectoption === "d") {
      const sort4 = mainData.sort((a, b) => { return (a.mail > b.mail ? 1 : -1) })
      setMainData([...sort4])
      localStorage.setItem("localdata", JSON.stringify(sort4))

    }
    else if (selectoption === "e") {
      const sort5 = mainData.sort((a, b) => { return (a.phone > b.phone ? 1 : -1) })
      setMainData([...sort5])
      localStorage.setItem("localdata", JSON.stringify(sort5))
    }
    else if (selectoption === "f") {
      const sort6 = mainData.sort((a, b) => { return (a.age > b.age ? 1 : -1) })
      setMainData([...sort6])
      localStorage.setItem("localdata", JSON.stringify(sort6))
    }
  }


  const handleSearch = () => {

    if (select === 'g') {
      const search1 = mainData.filter((item) => { return (item.fname.toLowerCase() === serch.toLowerCase()) });
      setMainData([...search1]);
    }


    else if (select === 'h') {
      const serch2 = mainData.filter((item) => { return (item.lname.toLowerCase() === serch.toLocaleLowerCase()) });
      setMainData([...serch2]);
    }

    else if (select === 'i') {
      const serch3 = mainData.filter((item) => { return (item.add.toLowerCase() === serch.toLowerCase()) })
      setMainData([...serch3])
    }
  }



  return (
    <div >
      <h1 style={{ display: 'flex', justifyContent: 'center' }}> FORM</h1>
      <div>
        <input type='text' id='fname' name='fname' placeholder='first name' value={inputData.fname} onChange={(e) => handleonchange(e)} />
      </div>
      <div>
        <input type='text' id='lname' name='lname' placeholder='last name' value={inputData.lname} onChange={(e) => handleonchange(e)} />
      </div>
      <div>
        <input type='text' id='add' name='add' placeholder='address' value={inputData.add} onChange={(e) => handleonchange(e)} />
      </div>
      <div>
        <input type='email' id='mail' name='mail' placeholder='email' value={inputData.mail} onChange={(e) => handleonchange(e)} />
      </div>
      <div>
        <input type='tel' id='phone' name='phone' placeholder='phone number' value={inputData.phone} onChange={(e) => handleonchange(e)} />
      </div>
      <div>
        <input type='number' id='age' name='age' placeholder='age' value={inputData.age} onChange={(e) => handleonchange(e)} />
      </div>
      <div>
        <button type='button' onClick={() => hnadleonsubmite()}>submite</button>
      </div>

      <button type='btn' onClick={handlesort}>
        <div>
          <select onChange={(e) => setSelectoption(e.target.value)}>
            <option value="">selectvalue</option>
            <option value='a'>firstname</option>
            <option value='b'>lanme</option>
            <option value='c'>adress</option>
            <option value='d'>email</option>
            <option value='e'>phone</option>
            <option value='f'>age</option>
          </select>
        </div>
      </button>




      SEARCH: <input type='search' id=' search' value={serch} onChange={(e) => setSerch(e.target.value)} />
      <button type='btn' onClick={handleSearch}>
        <div>
          <select onChange={(e) => setSelect(e.target.value)}>
            <option value=' '>selectvalue</option>
            <option value='g'>firstname</option>
            <option value='h'>lastname</option>
            <option value='i'>adress</option>
            <option value='j'>email</option>
            <option valule='k'>phone</option>
            <option value='l'>age</option>
          </select>
        </div>
      </button>
      <div>
        <table>
          <thead>
            {/* <th><button style={{ backgroundColor: 'transparent', borderColor: 'transparent' }} type='button' onClick={() => handleSort()}><b>sort</b></button></th> */}
            <th>first name</th>
            <th>last name</th>
            <th>address</th>
            <th>email</th>
            <th>phone</th>
            <th>age</th>
            <th>delete</th>
            <th>Edit</th>
            <th><input type="checkbox" onChange={() => handleOncheck()} checked={checked.length === mainData.length} /> </th>
          </thead>
          <tbody>
            {mainData.map((item, index) => {
              return (
                <tr>
                  <td>{item.fname}</td>
                  <td>{item.lname}</td>
                  <td>{item.add}</td>
                  <td>{item.mail}</td>
                  <td>{item.phone}</td>
                  <td>{item.age}</td>
                  <td><button type='button' onClick={() => handledelte(index)}>delete</button></td>
                  <td><button type='button' onClick={() => handleEdit(index, item)}>Edit</button></td>
                  <td><input type='checkbox' onChange={(e) => handleCheckbox(e)} value={item.fname} checked={checked.includes(item.fname)} /></td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
      <div>
      </div>
    </div>
  );
}

export default App;
