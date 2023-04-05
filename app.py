from flask import Flask, render_template, request
import datetime

app = Flask(__name__)

@app.route('/', methods=['GET', 'POST'])
def index():
    day_of_week = None
    if request.method == 'POST':
        first_name = request.form['first_name']
        last_name = request.form['last_name']
        date_str = request.form['date']
        date_obj = datetime.datetime.strptime(date_str, '%d/%m/%Y')
        day_of_week = date_obj.strftime('%A')

    return render_template('index.html', day_of_week=day_of_week)

if __name__ == '__main__':
    app.run(debug=True)
