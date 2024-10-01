function solution(today, terms, privacies) {
    const [today_year, today_month, today_day] = today.split(".").map(v=>+v);
    
    const appoints = {}
    terms.forEach((term)=>{
        const [key, value] = term.split(" ");
        appoints[key] = parseInt(value);
    })
    
   const answers = []
   privacies.forEach((privacy, index)=>{
       const [collect, key] = privacy.split(" ");
       const [collect_year, collect_month, collect_day] = collect.split(".").map(v=>+v);
        
       let finish_day = collect_day - 1;
       let finish_month = collect_month + appoints[key];
       let finish_year = collect_year;
       
       if (finish_month > 12) {
           finish_year += Math.floor(finish_month / 12);
           if(finish_month % 12 == 0) {
               finish_year -= 1;
               finish_month = 12;
           }
           else finish_month = finish_month % 12;
       }
      
       console.log(finish_year, finish_month, finish_day)
       
       if (finish_year < today_year){ 
           answers.push(index+1)}
       else if (finish_year === today_year) {
           if(finish_month < today_month) {
               answers.push(index+1)
           }
           else if (finish_month === today_month) {
               if (finish_day < today_day) {
                   answers.push(index+1);
               }
           }
       }

   })
    
    return answers;
}