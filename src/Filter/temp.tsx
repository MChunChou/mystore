// import React, { useState, useEffect, useCallback, useMemo, useRef } from "react";
// import { MultiSelect } from 'primereact/multiselect';
// import { Dropdown } from 'primereact/dropdown';

// type FilterType = { [key: string]: any }
// type DataType = { [key: string]: any } | null | undefined

// type FilterOptionsType = { [key: string]: string[] }

// interface FilterSettingParmas {
//     key: string,
// }

// interface FilterSelectorProps {
//     paramsKey?: string;
//     showPanel?: boolean;
//     data: DataType[];
//     filter: FilterType[];
//     onChange?: (selected: any) => void
//     getValue?: () => any[]
// }

// const FilterSelector = (props: FilterSelectorProps) => {
//     const filterSeleted = useRef<any>();
//     const showPanel = props.showPanel || false;

//     const [selected, setSelected] = useState(null);

//     useEffect(() => {
//         //setData(props.data)
//         //props.value && setSelected({... selected, prop.value})
//     }, []);

//     const isFilter = useCallback(() => {
//         const filter = props.filter;
//         let filterFlag = true;
//         filter.forEach((filterSetting) => {
//             const key = filterSetting.key;
//         });
//         return filterFlag;
//     }, [JSON.stringify(props.filter)])

//     const getOptions = useCallback((data: any[]) => {
//         let options = data.map(() => { })
//     }, [])

//     const handleChange = () => { }

//     const handleFilterChange = (evt: any) => { }

//     const handlePanelHide = () => {
//         const value = filterSeleted.current;
//         if (value) {

//         }
//     }

//     const renderFilter = useMemo(() => {
//         const elements: any[] = [];
//         const filter = props.filter;

//         if (filter) {
//             filter.forEach((filterSetting: FilterType) => {
//                 const key = filterSetting.key;
//                 console.log(filterSetting)
//                 elements.push(
//                     <MultiSelect
//                         key={key}
//                         name=""
//                         value={[]}
//                         options={[]}
//                         filter
//                         scrollHeight="300px"
//                         showSelectAll={true}
//                         onHide={handlePanelHide}
//                         onChange={handleFilterChange}
//                     />
//                 )
//             });
//         }

//         return elements
//     }, [])

//     return (
//         <div className="filter-selector">
//             {renderFilter}
//         </div>
//     )
// }

// export default FilterSelector
