import React, { useState } from "react";
import propTypes from "prop-types";
import "./index.scss";

export default function Number(props) {
  // descructuring props
  const { value, placeholder, name, min, max, prefix, suffix, isSuffixPlural } =
    props;

  // buat state untuk menampung value
  const [inputValue, setInputValue] = useState(`${prefix}${value}${suffix}`);

  const onChange = (e) => {
    // mengambil value dari input dan diolah jadi string dulu agar bisa dihapus prefix dan suffix
    let value = String(e.target.value);

    // hapus prefix nya
    if (prefix) {
      value = value.replace(prefix, "");
    }

    // hapus suffix nya
    if (suffix) {
      value = value.replace(suffix, "");
    }

    // buat validasi dengan regex
    const patternNumeric = new RegExp("[0-9]*");
    // cek apakah value sesuai dengan regex
    const isNumeric = patternNumeric.test(value);

    // jika value sesuai regex dan nilainya lebih kecil dari max dan lebih besar dari min
    if (isNumeric && +value <= max && +value >= min) {
      // tangkap name dan value
      props.onChange({
        target: {
          name: name,
          value: +value,
        },
      });

      // set value ke state
      setInputValue(
        `${prefix}${value}${suffix}${isSuffixPlural && value > 1 ? "s" : ""}`
      );
    }
  };

  const minus = () => {
    // jika value lebih besar dari min
    value > min &&
      onChange({
        target: {
          name: name,
          value: +value - 1,
        },
      });
  };

  const plus = () => {
    // jika value lebih kecil dari nilai max
    value < max &&
      onChange({
        target: {
          name: name,
          value: +value + 1,
        },
      });
  };

  return (
    <div className={["input-number mb-3", props.outerClassName].join(" ")}>
      <div className="input-group">
        <div className="input-group-prepend">
          <span className="input-group-text minus" onClick={minus}>
            -
          </span>
        </div>
        <input
          min={min}
          max={max}
          name={name}
          pattern="[0-9]*"
          className="form-control"
          placeholder={placeholder ? placeholder : "0"}
          value={String(inputValue)}
          onChange={onChange}
        />
        <div className="input-group-append">
          <span className="input-group-text plus" onClick={plus}>
            +
          </span>
        </div>
      </div>
    </div>
  );
}

Number.defaultProps = {
  min: 1,
  max: 1,
  prefix: "",
  suffix: "",
};

Number.propTypes = {
  value: propTypes.oneOfType([propTypes.string, propTypes.number]),
  isSuffixPlural: propTypes.bool,
  onChange: propTypes.func,
  placeholder: propTypes.string,
  outerClassName: propTypes.string,
};
