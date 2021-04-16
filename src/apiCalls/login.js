import axios from "axios";
export function getCountries()  {
return new Promise(function (resolve,reject){
    axios.get('https://restcountries.eu/rest/v2/all?fbclid=IwAR349L5m1MVSXbquDlpe04DLJ7VblhCY_m9WabhH6lVG-Lzu1lvr_YG5tXc').then((res) =>resolve(res))
        .catch((err) => console.log(err))
    })
}
export function getCollectorsList()  {
return new Promise(function (resolve,reject){
    axios.get('http://localhost:1234/collector').then((res) =>resolve(res))
        .catch((err) => console.log(err))
    })
}
export function getCustomerLists()  {
    return new Promise(function (resolve,reject){
        axios.get('http://localhost:1234/customer').then((res) =>resolve(res))
            .catch((err) => console.log(err))
    })
}
export function getCollectionLists()  {
    return new Promise(function (resolve,reject){
        axios.get('http://localhost:1234/collection').then((res) =>resolve(res))
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
            url: "https:/regres.in/api/users",
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
export function collectorRegisterUser(name,address,contact,retryTimes){
    var data ={
        "name": name,
        "address": address,
        "contact": contact,
    }
    return new Promise(function (resolve, reject){
        axios({
            method: "post",
            url: "https:/regres.in/api/users",
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
                    collectorRegisterUser(name,address,contact,retryTimes - 1).then(function (response) {
                        resolve(response.data);

                    }).catch(function (error) {
                        reject(error);
                    });
                }, 1000); //retry after 1 sec
            }
        })
    });
}
export function registerUser(name,address,contact, startDate,endDate,areaId,area,isActive,retryTimes) {
    var data = {
        "name": name,
        "address": address,
        "contact": contact,
        "startDate": startDate,
        "endDate": endDate,
        "areaId": areaId,
        "area": area,
        "isActive": isActive

    }

    return new Promise(function (resolve, reject){
        axios({
            method: "post",
            url: "https:/regres.in/api/users",
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
                    registerUser(name,address,contact, startDate,endDate,areaId,retryTimes - 1).then(function (response) {
                        resolve(response.data);
                    }).catch(function (error) {
                        reject(error);
                    });
                }, 1000); //retry after 1 sec
            }
        })
    });

}
export function collectorList(id,name,address,contact,retryTimes) {
    var data = {
        "id": id,
        "name": name,
        "address": address,
        "contact": contact,
    }
    return new Promise(function (resolve, reject) {
        axios({
            method: "post",
            url: "https:/regres.in/api/users",
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
                    registerUser(id,name, address, contact, retryTimes - 1).then(function (response) {
                        resolve(response.data);
                    }).catch(function (error) {
                        reject(error);
                    });
                }, 1000); //retry after 1 sec
            }
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
    return new Promise(function (resolve, reject) {
        axios({
            method: "post",
            url: "https:/regres.in/api/users",
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

/*
export function addData(retryTimes)  {...}*/
