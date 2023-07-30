// import React, { useState, useEffect, useCallback, useMemo, useRef } from "react";
// import { MultiSelect } from 'primereact/multiselect';
// import { Dropdown } from 'primereact/dropdown';

// import { Calendar } from 'primereact/calendar';

// const FilterSelector = (props: any) => {
//     const filterValues = useRef<any>({})

//     const [selected, setSelected] = useState<any>({});
//     const [filterSelected, setFilterSelected] = useState<any>({});
//     const [data, setData] = useState<any>(null)
//     const [focusKey, setFocusKey] = useState<string | null>(null)

//     useEffect(() => {
//         setData(props.data)
//         props.value && setSelected({ ...selected, ...props.value })
//     }, [props]);

//     const isFilter = (d: any) => {
//         const filter = props.filter;
//         let filterFlag = true;
//         filter.forEach((filterSetting: any) => {
//             const key = filterSetting.key;
//             if (key === focusKey) {
//                 return false
//             }
//             if (filterSetting.isFilter && selected[key]) {
//                 filterFlag = filterFlag && selected[key].includes(d[key])
//             }
//         });
//         return filterFlag;
//     }

//     const filter = () => {
//         if (data.length == 0) return [];
//         let filterData = [...data];

//         if (Object.keys(filterSelected).some((key) => {
//             return filterSelected[key] && filterSelected[key].length && filterSelected[key].length > 0;
//         })) {
//             filterData = filterData.filter((d) => isFilter(d));
//         }

//         return filterData;
//     }

//     const getOptions = (c: any, data: any[]) => {
//         let options: any[];
//         const { isGetAll, key, optionLabel } = c;
//         if (isGetAll) {
//             options = data.map((d) => {
//                 return { ...d, label: optionLabel ? optionLabel(d) : d[key] }
//             })
//         } else {
//             options = data.map((d) => {
//                 const label = optionLabel ? optionLabel(d) : d[key];
//                 const value = c.value ? c.value(d) : c.valueLabel ? d[c.valueLabel] : d[key];
//             })
//         }

//         return options;
//     }

//     const handleChange = (newSelected: any) => {
//         setSelected(newSelected);
//         const params = props.name ? {
//             [props.name]: newSelected
//         } : newSelected;

//         props.onChange && props.onChange(params);
//     }

//     const renderMultiaSelect = () => {
//         const elements: any = [];
//         const filterBy = props.filter
//         if (filterBy) {
//             if (Array.isArray(data) && data.length > 0) {
//                 filterBy.forEach((e: any) => {
//                     const key = e.key;
//                     if (data.some(d => d[key])) {
//                         const filterData = filter();
//                         let options: any[] | undefined;
//                         if (e.isFilter) {
//                             const elementSet = new Set(filterData.map(d => d[key]));
//                             options = Array.from(elementSet, (e => ({ label: e, value: e })));
//                         }
//                         else {
//                             options = getOptions(e, filterData);
//                         }

//                         if (e.selectedType === 'month') {
//                             elements.push(<Calendar
//                                 id="monthpicker"
//                                 value={selected[key]}
//                                 onFocus={() => {
//                                     setFocusKey(key)
//                                 }}
//                                 onHide={() => {
//                                     if (e.isFilter) {
//                                         const values = filterValues.current;
//                                         setFilterSelected({ ...selected, ...values });
//                                     }
//                                 }}
//                                 onChange={(evt) => {
//                                     console.log(evt)
//                                     const value = evt.value as Date[];
//                                     let copySelected = { ...selected };

//                                     if (!elements.isFilter) {
//                                         if (value && value.length == 0) {
//                                             const newValue = selected[key].filter((d: any) => {
//                                                 return options && options.findIndex((d2) => d === d2) < 0;
//                                             })

//                                             copySelected[key] = newValue;
//                                         }
//                                         else if (value) {
//                                             const newValue: any[] = []

//                                             value.forEach((d: any, i: number) => {
//                                                 if (value.findIndex((d2: any) => d2 == d) == i) {
//                                                     newValue.push(d);
//                                                     copySelected[key] = newValue;

//                                                 } else {
//                                                     copySelected[key] = []
//                                                 }
//                                             })
//                                         }
//                                         else {
//                                             copySelected[key] = value
//                                         }
//                                     }

//                                     if (e.isFilter) {

//                                         filterValues.current = { ...filterValues.current, ...{ [key]: value } }
//                                     }

//                                     if (value === null) {
//                                         const values = filterValues.current;
//                                         setFilterSelected({ ...values });
//                                     }

//                                     handleChange(copySelected)
//                                 }}
//                                 view="month"
//                                 dateFormat="mm/yy"
//                                 selectionMode="multiple" />)
//                         } else {

//                             elements.push(<MultiSelect
//                                 placeholder={e.label}
//                                 key={key}
//                                 name={props.name || key}
//                                 value={selected[key]}
//                                 options={options}
//                                 filter
//                                 showClear
//                                 scrollHeight="300px"
//                                 showSelectAll={elements.isFilter ? false : true}
//                                 onFocus={() => {
//                                     setFocusKey(key)
//                                 }}
//                                 onHide={() => {
//                                     if (e.isFilter) {
//                                         const values = filterValues.current;
//                                         setFilterSelected({ ...selected, ...values });
//                                     }
//                                 }}
//                                 onChange={(evt) => {
//                                     console.log(evt)
//                                     const value = evt.value;
//                                     let copySelected = { ...selected };

//                                     if (!elements.isFilter) {
//                                         if (value && value.length == 0) {
//                                             const newValue = selected[key].filter((d: any) => {
//                                                 return options && options.findIndex((d2) => d === d2) < 0;
//                                             })

//                                             copySelected[key] = newValue;
//                                         }
//                                         else if (value) {
//                                             const newValue: any[] = []

//                                             value.forEach((d: any, i: number) => {
//                                                 if (value.findIndex((d2: any) => d2 == d) == i) {
//                                                     newValue.push(d);
//                                                     copySelected[key] = newValue;

//                                                 } else {
//                                                     copySelected[key] = []
//                                                 }
//                                             })
//                                         }
//                                         else {
//                                             copySelected[key] = value
//                                         }
//                                     }

//                                     if (e.isFilter) {

//                                         filterValues.current = { ...filterValues.current, ...{ [key]: value } }
//                                     }

//                                     if (value === null) {
//                                         const values = filterValues.current;
//                                         setFilterSelected({ ...values });
//                                     }

//                                     handleChange(copySelected)
//                                 }}

//                             />)
//                         }
//                     }
//                 })
//             }
//         }

//         return elements;
//     }

//     return (
//         <div className="filter-selector">
//             {renderMultiaSelect()}
//         </div>
//     )
// }

// export default FilterSelector
