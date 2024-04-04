import me from 'public/profile.jpg';

export const name = 'Sai Prudhivi';
export const avatar = me;
export const about = () => {
  return (
    <>
      <b>Hey, {"I'm"} Sai!</b><br/>
      I am an experienced software developer with 3+ years of expertise in full-stack development, specializing in Java,
      React.js, AWS, SQL, Kafka, and Kubernetes. I am proficient in implementing scalable solutions through Kubernetes
      and microservices as well as optimizing performance through caching, leading to a {"<"}100ms response times for
      critical REST APIs<br/>
    </>
  );
};
