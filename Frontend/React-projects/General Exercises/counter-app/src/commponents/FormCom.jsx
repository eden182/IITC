const FormCom = (props) => {
  const updateChoice = (e) => {
    props.updateFunction(e.target.innerText);
    props.setDidUserSubmit(true);
  };
  return (
    <div className="formCom">
      <span className="ball" onClick={updateChoice}>
        1
      </span>
      <span className="ball" onClick={updateChoice}>
        2
      </span>
      <span className="ball" onClick={updateChoice}>
        3
      </span>
      <span className="ball" onClick={updateChoice}>
        4
      </span>
      <span className="ball" onClick={updateChoice}>
        5
      </span>
    </div>
  );
};

export default FormCom;
