import React, {useContext, useState} from "react";
import {HistoryCardStyle} from "./style";
import {FunctionSwitchButton, TableStyle} from "../../../page/History/style";
import {useTranslation} from "react-i18next";
import {Table} from "antd";
import {ColumnType} from "antd/lib/table";
import useAccountModel from "../../../hooks/useAccountModel";
import {useApi} from "../../../hooks/useApi";
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
    const {currentAccount} = useAccountModel();
    const {api} =useApi()
    const {t} = useTranslation()
    const Emitcolumns = [
        {
            title: t<string>("Request number"),
            dataIndex: "id",
            key: "id"
        },
        {
            title: t<string>("Amount"),
            dataIndex: "amount",
            key: "amount"
        },
        {
            title: t<string>("ChainX Address"),
            dataIndex: "chainxAddress",
            ellipsis: true,
            key: "chainxAddress"
        },
        {
            title: t<string>("BTC address"),
            dataIndex: "btcAddress",
            ellipsis: true,
            key: "btcAddress"
        },
        {
            title: t<string>("Transaction"),
            dataIndex: "hash",
            key: "hash"
        },
        {
            title: t<string>("Confirmation"),
            dataIndex: "countedBlock",
            key: "countedBlock"
        },
        {
            title: t<string>("State"),
            dataIndex: "status",
            key: "status",
            render: (text: string, record: any) => (
                <a
                    onClick={() =>
                        record.status === "确认" && console.log('dasda')
                    }
                >
                    {text}
                </a>
            )
        }
    ]
    return (
        <HistoryCardStyle>
            <FunctionSwitchButton>
                <ul>
                    <li onClick={() => {
                        SetHistoryStatus('issue')
                    }} className={HistoryStatus === 'issue' ? "active" : ""}>{t('Redemption list')}</li>
                    <li style={{ cursor: "not-allowed" }} className={HistoryStatus === 'Redeem' ? "active" : ""}>{t('History')}</li>
                </ul>
            </FunctionSwitchButton>
            <TableStyle>
                {HistoryStatus === "issue" ?
                    <Table columns={Emitcolumns} dataSource={data} /> :
                    <Table columns={columns} dataSource={data2} />
                }
            </TableStyle>
        </HistoryCardStyle>
    )
}
export default HistoryCard
