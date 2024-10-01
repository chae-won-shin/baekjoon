function solution(today, terms, privacies) {
    const [t_year, t_month, t_day] = today.split(".").map(v => +v);
    
    const durations = {}
    terms.forEach((term) => {
        const [key, duration] = term.split(" ");
        durations[key] = parseInt(duration);
    })
    
    const answers = [];
    privacies.forEach((privacy, index) => {
        const [collectDate, key] = privacy.split(" ");
        const [c_year, c_month, c_day] = collectDate.split(".").map(v => +v);
        
        let f_year = c_year;
        let f_month = c_month + durations[key];
        let f_day = c_day - 1;
        
        if(f_month > 12) {
            f_year += Math.floor(f_month/12);
            if(f_month % 12 === 0) {
                f_year -= 1;
                f_month = 12;
            }
            else f_month %= 12;
        }
        
        if (f_year < t_year) {
            answers.push(index+1);
        } 
        else if (f_year === t_year) {
            if (f_month < t_month) {
                answers.push(index+1);
            } 
            else if (f_month === t_month) {
                if (f_day < t_day)
                    answers.push(index+1);
            }
        }
    })
    
    return answers;
}