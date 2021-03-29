import React, {useState} from "react";
import {HistoryCardStyle} from "./style";
import {FunctionSwitchButton, TableStyle} from "../../../page/History/style";
import {useTranslation} from "react-i18next";
import {Table} from "antd";
import {ColumnType} from "antd/lib/table";
const columns: ColumnType<{
    key: string,
    name: string,
    age: number,
    address: string,
}>[] = [
        {
            title: 'Name (all screens)',
            dataIndex: 'name',
            key: 'name',
            render: text => <a>{text}</a>,
        },
        {
            title: 'Age (medium screen or bigger)',
            dataIndex: 'age',
            key: 'age',
            responsive: ['md'],
        },
        {
            title: 'Address (large screen or bigger)',
            dataIndex: 'address',
            key: 'address',
            responsive: ['lg'],
        },
    ];
const data = [
    {
        key: '1',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
    },
];
const data2 = [
    {
        key: '1',
        name: '赎回',
        age: 32,
        address: '赎回',
    },
];
function HistoryCard() {
    const [HistoryStatus, SetHistoryStatus] = useState('issue')
    const {t} = useTranslation()
    return (
        <HistoryCardStyle>
            <FunctionSwitchButton>
                <ul>
                    <li onClick={() => {
                        SetHistoryStatus('issue')
                    }} className={HistoryStatus === 'issue' ? "active" : ""}>{t('Redemption list')}</li>
                    <li onClick={() => {
                        SetHistoryStatus('Redeem')
                    }} className={HistoryStatus === 'Redeem' ? "active" : ""}>{t('History')}</li>
                </ul>
            </FunctionSwitchButton>
            <TableStyle>
                {HistoryStatus === "issue" ?
                    <Table columns={columns} dataSource={data} /> :
                    <Table columns={columns} dataSource={data2} />
                }
            </TableStyle>
        </HistoryCardStyle>
    )
}
export default HistoryCard
