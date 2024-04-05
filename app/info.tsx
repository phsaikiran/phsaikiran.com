import me from 'public/profile.jpg';

export const name = 'Sai Prudhivi';
export const avatar = me;
export const about = () => {
  return (
    <>
      <b>Hey, {"I'm"} Sai!</b><br/>
      I am an experienced software developer with over three years of expertise in full-stack development, specializing
      in technologies such as Java, React.js, AWS, SQL, Kafka, and Kubernetes. My proficiency lies in implementing
      scalable solutions through Kubernetes and microservices, and I have a knack for optimizing performance through
      caching, which has led to achieving sub-100ms response times for critical REST APIs.<br/>
    </>
  );
};
