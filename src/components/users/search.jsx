import React, { useState, useContext } from 'react';
import GithubContext from '../../context/github/githubContext';
import AlertContext from '../../context/alert/AlertContext';

const Search = () => {
  const githubContext = useContext(GithubContext);
  const alertContext = useContext(AlertContext);
  const [text, setText] = useState('');

  const onChange = e => {
    // this.setState({ [e.target.name]: e.target.value });
    setText(e.target.value);
  };

  const onSubmitForm = e => {
    e.preventDefault();
    if (text === '') {
      alertContext.setAlert('لطفا نام کاربری گیت هاب را وارد نمایید.', 'light');
    } else {
      githubContext.searchUsers(text);
      setText('');
    }
  };

  return (
    <div>
      <form onSubmit={onSubmitForm} className='form'>
        <input
          type='text'
          name='text'
          placeholder='جستجوی نام کاربری ...'
          value={text}
          onChange={onChange}
        />
        <input type='submit' value='جستجو' className='btn btn-dark btn-block' />
      </form>

      {githubContext.users.length > 0 && (
        <button
          className='btn btn-light btn-block'
          onClick={githubContext.clearUsers}
        >
          پاک سازی
        </button>
      )}
    </div>
  );
};

export default Search;
