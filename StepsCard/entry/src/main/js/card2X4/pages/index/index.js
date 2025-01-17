export default {
    data: {
        // 线型图数据
        datasets: [
                {
                    strokeColor: '#CDCACA',
                    fillColor: '#CDCACA',
                    data: [
                            {
                                value: 0,
                                description: '0',
                                textLocation: 'top',
                                textColor: '#CDCACA',
                                pointStyle: {
                                    shape: 'circle',
                                    size: 5,
                                    fillColor: '#FF9C28',
                                    strokeColor: '#FF9C28'
                                }
                            },
                            {
                                value: 0,
                                description: '0',
                                textLocation: 'top',
                                textColor: '#CDCACA',
                                pointStyle: {
                                    shape: 'circle',
                                    size: 5,
                                    fillColor: '#FF9C28',
                                    strokeColor: '#FF9C28'
                                }
                            },
                            {
                                value: 0,
                                description: '0',
                                textLocation: 'top',
                                textColor: '#CDCACA',
                                pointStyle: {
                                    shape: 'circle',
                                    size: 5,
                                    fillColor: '#FF9C28',
                                    strokeColor: '#FF9C28'
                                }
                            },
                            {
                                value: 0,
                                description: '0',
                                textLocation: 'top',
                                textColor: '#CDCACA',
                                pointStyle: {
                                    shape: 'circle',
                                    size: 5,
                                    fillColor: '#FF9C28',
                                    strokeColor: '#FF9C28'
                                }
                            }
                    ],
                    gradient: true
                }
        ],
        options: {
            xAxis: {
                min: 0,
                max: 3,
                display: false,
                axisTick: 4
            },
            yAxis: {
                min: 0,
                max: 1000
            }
        },
        steps: 0,
        percent: 20,
        mileage: 0
    },

    actions: {
        routerEvent: {
            action: "router",
            bundleName: "com.huawei.cookbook",
            abilityName: "com.huawei.cookbook.MainAbility"
        }
    }
}

