import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

const InputText = (props) => {

  return (
    <TextField
      variant="standard"
      type={props.type}
      fullWidth
      id={props.id}
      label={props.label}
      value={props.value}
      onChange={props.Change}
      onFocus={props.Focus}
      placeholder={props.placeholder}

      InputProps={{
        autoComplete: 'new-password',
        form: {
          autoComplete: 'off',
        },
        min: 0, style: { textAlign: props.textAlign ? props.textAlign : 'left' },
        readOnly: (props.disabled || props.readOnly),
        shrink: "true",
        startAdornment: props.symbol ? <InputAdornment position="start">{props.symbolIcon}</InputAdornment> : null,
        endAdornment: props.lookup ? <InputAdornment position="end">
          <div className="lookup-btn">
            <Button
              disabled={props.disabled}
              onClick={() => props.onClick()}
            >
              <MoreHorizIcon disabled={true} fontSize="large" />
            </Button>
          </div>
        </InputAdornment>
          : null
      }}
    />
  )
}

export default InputText;