import { Autocomplete, Box, createFilterOptions, FormLabel, OutlinedInputProps, TextField } from '@mui/material';
import { STYLE_VARIABLE } from '../constants/style-variable';
import { ILabelValue } from '../interfaces/feature-type-interface';
import { Fragment } from 'react/jsx-runtime';

export function InputAutocomplete(props: IProps) {
  const dataChecking = props.dataCheckingDisable || [];
  const filter = createFilterOptions<string>();

  function checkValue(value?: string) {
    if (props.options && value) {
      return props.options.find((e) => e.value === value);
    } else {
      return undefined;
    }
  }

  function checkLabel(value?: string) {
    if (props.options && value) {
      return props.options.find((e) => e.label === value);
    } else {
      return undefined;
    }
  }

  return (
    <div className={'w-full'}>
      {props.label && (
        <FormLabel className="" htmlFor={props.name}>
          <div className={`${props.errorMessage && 'text-red-500'} pb-1 capitalize`}>
            {props.label} {props.required && <span className={'text-red-600'}> *</span>}
          </div>
        </FormLabel>
      )}
      <Autocomplete
        disabled={props.disabled}
        value={
          props.disabled
            ? props?.options && props.options.length > 0 && checkValue(props.value)
            : checkValue(props.value)
        }
        defaultValue={checkValue(props.value)}
        onChange={(_: any, newValue: any | null) => {
          if (props.onChange) {
            const result = checkLabel(newValue);
            props.onChange(result?.value);
          }
        }}
        id="controllable-states-demo"
        options={props.options?.map((e) => e.label) || []}
        getOptionDisabled={(option) => dataChecking.includes(option)}
        sx={{ minWidth: 300, width: '100%', borderRadius: 2 }}
        size={'small'}
        filterOptions={(options, params) => {
          const filtered = filter(options, params);

          const { inputValue } = params;
          const isExisting = options.some((option) => inputValue === option);
          if (inputValue !== '' && !isExisting) {
            filtered.push(inputValue);
          }

          return filtered;
        }}
        renderInput={(params) => (
          <TextField
            name={props.name}
            helperText={props.errorMessage}
            onBlur={props.onBlur}
            error={!!props.errorMessage}
            placeholder={props.placeholder}
            sx={{
              width: '100%',
              borderRadius: 2,
              '& .MuiInputBase-root ': {
                background: props.errorMessage
                  ? STYLE_VARIABLE.COLORS.SYSTEM.LIGHT_RED
                  : STYLE_VARIABLE.COLORS.SYSTEM.WHITE,
              },
            }}
            {...params}
            size={'small'}
          />
        )}
        renderOption={(props, v) => {
          return (
            <Fragment key={v}>
              <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
                <div className={'flex gap-2 items-center'}>
                  <div>{v}</div>
                </div>
              </Box>
            </Fragment>
          );
        }}
      />
    </div>
  );
}

interface IProps {
  value?: string;
  onChange?: (e?: string | number) => void;
  options?: ILabelValue<any>[];
  errorMessage?: any;
  label?: string;
  name?: string;
  required?: boolean;
  onBlur?: OutlinedInputProps['onBlur'];
  placeholder?: string;
  dataCheckingDisable?: any[];
  disabled?: boolean;
}
