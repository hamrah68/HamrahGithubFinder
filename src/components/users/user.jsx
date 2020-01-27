import React, { useEffect, Fragment, useContext } from 'react';
import Spinner from '../layout/spinner';
import Repos from '../repos/repos';
import { Link } from 'react-router-dom';
import GithubContext from '../../context/github/githubContext';

const User = ({ match }) => {
  //
  useEffect(() => {
    getUser(match.params.login);
    getUserRepos(match.params.login);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const githubContext = useContext(GithubContext);

  const { user, loading, getUser, repos, getUserRepos } = githubContext;

  const {
    name,
    avatar_url,
    location,
    bio,
    blog,
    company,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable
  } = user;

  if (loading) {
    return <Spinner />;
  }

  return (
    <Fragment>
      <Link to='/' className='btn btn-light'>
        بازگشت به جستجو در گیت هاب
      </Link>
      <div style={{ padding: 10 }}></div>
      آماده استخدام:{'  '}
      {hireable ? (
        <i className='fas fa-check text-success' />
      ) : (
        <i className='fas fa-times-circle text-danger' />
      )}
      <div className='card grid-2'>
        <div className='all-center'>
          <img
            src={avatar_url}
            className='round-img'
            alt='آواتار'
            style={{ width: '150px' }}
          />
          <h1>{name}</h1>
          {location && <p>موقعیت: {location}</p>}
        </div>
        <div>
          {bio && (
            <Fragment>
              <h3>بیوگرافی</h3>
              <p>{bio}</p>
            </Fragment>
          )}
          <a
            href={html_url}
            className='btn btn-dark my-1'
            rel='noopener noreferrer'
            target='_blank'
          >
            مشاهده پروفایل گیت هاب
          </a>
          <ul>
            <li>
              {login && (
                <Fragment>
                  <strong>نام کاربری: </strong>
                  {login}
                </Fragment>
              )}
            </li>
            <li>
              {company && (
                <Fragment>
                  <strong>شرکت: </strong>
                  {company}
                </Fragment>
              )}
            </li>
            <li>
              {blog && (
                <Fragment>
                  <strong>وبسایت: </strong>
                  {blog}
                </Fragment>
              )}
            </li>
          </ul>
        </div>
      </div>
      <div className='card text-center'>
        <div className='badge badge-primary'>دنبال کنندگان: {followers}</div>
        <div className='badge badge-success'>دنبال میکند: {following}</div>
        <div className='badge badge-light'>ریپو عمومی : {public_repos}</div>
        <div className='badge badge-dark'> گیست های عمومی: {public_gists}</div>
      </div>
      <Repos repos={repos} />
    </Fragment>
  );
};

export default User;
