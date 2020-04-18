type DataType = {
  attr: '検査実施件数'
  value: number
  children: [
    {
      attr: '陽性患者数'
      value: number
      children: [
        {
          attr: '入院中'
          value: number
        },
        {
          attr: '退院'
          value: number
        },
        {
          attr: '死亡'
          value: number
        },
        {
          attr: '調査中'
          value: number
        }
      ]
    }
  ]
}

type ConfirmedCasesType = {
  検査実施件数: number
  陽性者数: number
  入院中: number
  死亡: number
  退院: number
  調査中: number
}

/**
 * Format for *Chart component
 *
 * @param data - Raw data
 */
export default (data: DataType) => {
  const formattedData: ConfirmedCasesType = {
    検査実施件数: data.value,
    陽性者数: data.children[0].value,
    入院中: data.children[0].children[0].value,
    死亡: data.children[0].children[2].value,
    退院: data.children[0].children[1].value,
    調査中: data.children[0].children[3].value
  }
  return formattedData
}
