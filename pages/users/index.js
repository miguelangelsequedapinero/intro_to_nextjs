import data from '../../database.json';
import styles from '../../styles/Users.module.css';

export async function getServerSideProps() {
  return { props: { data } }
}
export default function Users({ data }) {
  return (
    <div className='goodMorning'>
      <h2>Hi there, this is the users page :¬)</h2>
      {data.map((user, index) => (
        <ul>
          <li key={index}><b>name:</b> {user.name}</li>
          <li key={index}><b>gender:</b> {user.gender}</li>
          <li key={index}><b>posts:</b> {JSON.stringify(user.posts)}</li>
        </ul>
      )
      )}
      {data.map((user, index) => (
        <ul>
          {Object.keys(user)
            .filter((water) => water !== 'user_id')
            .map((item, index) => (
              <li key={index}><b>{item}:</b> {item !== 'posts' ? user[item] : JSON.stringify(user[item])}</li>
            ))
          }
        </ul>
      ))
      }
    </div>
  )
};
