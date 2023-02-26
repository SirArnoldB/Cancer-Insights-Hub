const Section = (props) => {
  return (
    <section id={props.id}>
      <h1>{props.title}</h1>
      <div className={props.class_name}>{props.section_content}</div>
    </section>
  );
};

export default Section;
