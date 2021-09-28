import axios from "axios";

export function getCollectorsList()  {
return new Promise(function (resolve,reject){
    axios.get('http://localhost:4567/collector').then((res) =>resolve(res))
        .catch((err) => console.log(err))
    })
}
export function getCustomerLists()  {
    return new Promise(function (resolve,reject){
        axios.get('http://localhost:4567/customer').then((res) =>resolve(res))
            .catch((err) => console.log(err))
    })
}
export function getCollectionLists()  {
    return new Promise(function (resolve,reject){
        axios.get('http://localhost:4567/collection').then((res) =>resolve(res))
            .catch((err) => console.log(err))
    })
}
export function addCollection(collectionData)  {
    return new Promise(function (resolve,reject){
        axios.get('http://localhost:4567/collection', collectionData).then((res) =>resolve(res))
            .catch((err) => console.log(err))
    })
}
export function addCollector(collectorData)  {
    return new Promise(function (resolve,reject){
        axios.get('http://localhost:4567/collector', collectorData).then((res) =>resolve(res))
            .catch((err) => console.log(err))
    })
}
export function addCustomer(customerData)  {
    return new Promise(function (resolve,reject){
        axios.get('http://localhost:4567/customer', customerData).then((res) =>resolve(res))
            .catch((err) => console.log(err))
    })
}
export function deleteCollection(collectionData)  {
    return new Promise(function (resolve,reject){
        axios.get('http://localhost:4567/collection/delete/:id', collectionData).then((res) =>resolve(res))
            .catch((err) => console.log(err))
    })
}export function deleteCustomer(customerData)  {
    return new Promise(function (resolve,reject){
        axios.get('http://localhost:4567/customer/delete/:id', customerData).then((res) =>resolve(res))
            .catch((err) => console.log(err))
    })
}export function deleteCollector(collectorData)  {
    return new Promise(function (resolve,reject){
        axios.get('http://localhost:4567/collector/delete/:id', collectorData).then((res) =>resolve(res))
            .catch((err) => console.log(err))
    })
}
export function getSingleCustomer()  {
    return new Promise(function (resolve,reject){
        axios.get('http://localhost:4567/customer/:id').then((res) =>resolve(res))
            .catch((err) => console.log(err))
    })
}
export function getSingleCollector()  {
    return new Promise(function (resolve,reject){
        axios.get('http://localhost:4567/collector/:id').then((res) =>resolve(res))
            .catch((err) => console.log(err))
    })
}
export function getSingleCollection()  {
    return new Promise(function (resolve,reject){
        axios.get('http://localhost:4567/collection/:id').then((res) =>resolve(res))
            .catch((err) => console.log(err))
    })
}
export function modifyCollector()  {
    return new Promise(function (resolve,reject){
        axios.post('http://localhost:4567/collector/:id').then((res) =>resolve(res))
            .catch((err) => console.log(err))
    })
}
export function modifyCollection()  {
    return new Promise(function (resolve,reject){
        axios.post('http://localhost:4567/collection/:id').then((res) =>resolve(res))
            .catch((err) => console.log(err))
    })
}
export function modifyCustomer()  {
    return new Promise(function (resolve,reject){
        axios.post('http://localhost:4567/customer/:id').then((res) =>resolve(res))
            .catch((err) => console.log(err))
    })
}
export function updateCollector()  {
    return new Promise(function (resolve,reject){
        axios.get('http://localhost:4567/collector/:id').then((res) =>resolve(res))
            .catch((err) => console.log(err))
    })
}
export function updateCustomer()  {
    return new Promise(function (resolve,reject){
        axios.get('http://localhost:4567/customer/:id').then((res) =>resolve(res))
            .catch((err) => console.log(err))
    })
}
export function updateCollection()  {
    return new Promise(function (resolve,reject){
        axios.get('http://localhost:4567/collector/:id').then((res) =>resolve(res))
            .catch((err) => console.log(err))
    })
}

export function loginUser(userName,password,retryTimes){
    var data ={
        "user": userName,
        "password": password,
    }
    return new Promise(function (resolve, reject){
        axios({
            method: "post",
            url: "http://localhost:4567/user",
            headers: {},
            data: data
        }).then((res, err) => {
            if (res) {
                resolve(res.data)
            } else {
                console.log(err)
                reject(err);
            }
        }).catch(function (err) {
            if (retryTimes === 1) {
                reject(err);
            } else {
                setTimeout(() => {
                    loginUser(userName,password,retryTimes - 1).then(function (response) {
                        resolve(response.data);
                    }).catch(function (error) {
                        reject(error);
                    });
                }, 1000); //retry after 1 sec
            }
        })
    });
}
export function collectorRegisterUser(id,name,address,contact,retryTimes){
    var data ={
        "id":id,
        "name": name,
        "address": address,
        "contact": contact,
    }
    console.log(data)
    return new Promise(function (resolve, reject){
        axios({
            method: "post",
            url: "http://localhost:4567/collector",
            headers: {},
            data: data
        }).then((res, err) => {
            if (res) {
                console.log(res.data)
                resolve(res.data)
            } else {
                console.log(err)
                reject(err);
            }
        }).catch(function (err) {
            if (retryTimes === 1) {
                reject(err);
            } else {
                setTimeout(() => {
                    collectorRegisterUser(id,name,address,contact,retryTimes - 1).then(function (response) {
                        resolve(response.data);

                    }).catch(function (error) {
                        reject(error);
                    });
                }, 1000); //retry after 1 sec
            }
        })
    });
}
export function registerUser(id,name,address,contact, startDate,endDate,areaId,isActive,retryTimes) {
    var data = {
        "id" : id,
        "name": name,
        "address": address,
        "contact": contact,
        "startDate": startDate,
        "endDate": endDate,
        "areaId": areaId,
        "isActive": isActive
    }
    console.log(data);
    return new Promise(function (resolve, reject){
        axios({
            method: "POST",
            url: "http://localhost:4567/customer",
            headers: {},
            data: data
        }).then((res, err) => {
            if (res) {
                resolve(res.data)
            } else {
                console.log(err)
                reject(err);
            }
        }).catch(function (err) {
            if (retryTimes === 1) {
                reject(err);
            } else {
                setTimeout(() => {
                    registerUser(id,name,address,contact, startDate,endDate,areaId,isActive, - 1).then(function (response) {
                        resolve(response.data);
                    }).catch(function (error) {
                        reject(error);
                    });
                }, 1000); //retry after 1 sec
            }
        })
    });

}
export function collectorList(id) {
    return new Promise(function (resolve, reject) {
        let collectorUrl = "http://localhost:4567/collector";
        if(id!==null && id !=="" && id!=="0")
        {
            collectorUrl = collectorUrl + "/" + id;
        }
        axios({
            method: "get",
            url: collectorUrl,
            headers: {}
        }).then((res, err) => {
            if (res) {
                resolve(res.data)
            } else {
                console.log(err)
                reject(err);
            }
        }).catch(function (err) {
            reject(err);
        })
    });
}
export function collectionRegisterUser(id,collectorId,customerId,amount,collectionDate,receivedBy,retryTimes) {
    var data = {
        "id": id,
        "collectorId": collectorId,
        "customerId": customerId,
        "amount": amount,
        "collectionDate": collectionDate,
        "receivedBy": receivedBy,
    }
    console.log(data);
    return new Promise(function (resolve, reject) {
        axios({
            method: "POST",
            url: "http://localhost:4567/collection",
            headers: {},
            data: data
        }).then((res, err) => {
            if (res) {
                resolve(res.data)
            } else {
                console.log(err)
                reject(err);
            }
        }).catch(function (err) {
            if (retryTimes === 1) {
                reject(err);
            } else {
                setTimeout(() => {
                    collectionRegisterUser(id,collectorId, customerId, amount,collectionDate,receivedBy, retryTimes - 1).then(function (response) {
                        resolve(response.data);
                    }).catch(function (error) {
                        reject(error);
                    });
                }, 1000); //retry after 1 sec
            }
        })
    });
}


/*export function addData(retryTimes)  {...}*/
