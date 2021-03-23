const cityName=document.getElementById("cityName");
//const countryName=document.getElementById("countryName");
const submitBtn= document.getElementById("submitBtn");

const city_name=document.getElementById("city_name");
const temp_val=document.getElementById("temp_val");
const temp_status=document.getElementById("temp_status");
const temp=document.getElementById("temp");
const datahide=document.querySelector(".middle_layer");

const middlelayer=document.getElementById("middlelayer");
const date=document.getElementById("date");
const day=document.getElementById("day");
const month=document.getElementById("month");
        

const getInfo= async (event)=>{
    event.preventDefault();
    let cityVal=cityName.value;
    
    

    if(cityVal === "")
    {
        city_name.innerText=`Please write the Name of City`;
        temp.classList.remove("temp1");
        temp.innerText='';
        temp_status.innerText='';
        day.innerText='';
        date.innerText='';
        
        

    }
    else
    {

        try{




        let url=`http://api.weatherapi.com/v1/current.json?key= 8e1430ed68954b6fbba95626210603&q=${cityVal}&aqi=no`;
        const response= await fetch(url)
        const data= await response.json();
        //console.log(data);
        const arrData=[data];//array of object created
        console.log(arrData);
        console.log(arrData[0].location.name);
        console.log(arrData[0].current.condition.text);
        //var imgLink=arrData[0].current.condition.icon;
        //var res=imgLink.slice(2);
        city_name.innerText=`${arrData[0].location.name},${arrData[0].location.country}`;
        temp_val.innerText=arrData[0].current.temp_c;
        temp_status.innerText=arrData[0].current.condition.text;
        var d = new Date();
        var date_val = d.getDate();
        var day_val = d.getDay()
        var month_val=d.getMonth();
        console.log(date_val);
        console.log(day_val);
        date.innerText=date_val;
        if(day_val=='0')
        {
            day.innerText='SUNDAY';
        }
        if(day_val==1)
        {
            day.innerText='MONDAY';
        }
        if(day_val==2)
        {
            day.innerText='TUESDAY';
        }
        if(day_val==3)
        {
            day.innerText='WEDNESDAY';
        }
        if(day_val==4)
        {
            day.innerText='THURSDAY';
        }
        if(day_val==5)
        {
            day.innerText='FRIDAY';
        }
        if(day_val==6)
        {
            day.innerText='SATURDAY';
        }
        //geting month
        if(month_val==0)
        {
            month.innerText=' JAN';
        }
        if(month_val==1)
        {
            month.innerText=' FEB';
        }
        if(month_val==2)
        {
            month.innerText=' MAR';
        }
        if(month_val==3)
        {
            month.innerText=' APR';
        }
        if(month_val==4)
        {
            month.innerText=' MAY';
        }
        if(month_val==5)
        {
            month.innerText=' JUNE';
        }
        if(month_val==6)
        {
            month.innerText=' JULY';
        }
        if(month_val==7)
        {
            month.innerText=' AUG';
        }
        if(month_val==8)
        {
            month.innerText=' SEP';
        }
        if(month_val==9)
        {
            month.innerText=' OCT';
        }
        if(month_val==10)
        {
            month.innerText=' NOV';
        }
        if(month_val==11)
        {
            month.innerText=' DEC';
        }

        


        

        //const tempMood=arrData[0].weather[0].main;

        //condition to check sunny or cloudy
 


       }
       catch{
        city_name.innerText=`Please write the name properly`;
        temp.classList.remove("temp1");
        temp.innerText='';
        temp_status.innerText='';
        day.innerText='';
        date.innerText='';
        
           
       }

        
        




    }

}

submitBtn.addEventListener('click',getInfo);