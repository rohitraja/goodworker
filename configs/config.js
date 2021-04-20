const all = {
    env: "DEV", 
    token_key: "XYXX",
    distance_range: 10,
    saltRound : 10,
    dbConf:{
        master:{
            host: 'grp6m5lz95d9exiz.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
            user: 'q2owc6h4v3kg9org',
            password: 'm4ounwwzkattul1f',
            database: 'll9i5rts4kinuxqv',
            timezone: 'utc',
            connectionLimit: 10
        }
    },
    googleDistanceApiKey:process.env.gMapApi,
    googleDistanceApi:{
        url: "https://maps.googleapis.com/maps/api/distancematrix/json?units=metric"

    }
}
module.exports= all;