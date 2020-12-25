import React from "react";
import { Table, Tag } from "antd";

export default function ReadMeasurementTable() {
  const columns = [
    {
      title: "Screen",
      dataIndex: "screen",
    },
    {
      title: "Paper",
      dataIndex: "paper",
    },
    {
      title: "Character",
      dataIndex: "character",
    },
    {
      title: "Profile",
      dataIndex: "profile",
    },
  ];
  const data = [
    {
      key: "1",
      paper: 120,
      screen: 100,
      character: "The Sloth",
      profile: "Slow reader",
    },
    {
      key: "2",
      paper: 250,
      screen: 200,
      character: "The Fox",
      profile: "Average reader",
    },
    {
      key: "3",
      paper: 500,
      screen: 400,
      character: "The Lion",
      profile: "Speed reader",
    },
    {
      key: "4",
      paper: 700,
      screen: 600,
      character: "The Cheetah",
      profile: "The Expert",
    },
  ];

  return (
    <div>
      <Table
        // rowSelection={{
        //   type: selectionType,
        //   ...rowSelection,
        // }}
        pagination={false}
        columns={columns}
        dataSource={data}
        bordered
      />
    </div>
  );
}
