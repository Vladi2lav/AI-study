from flask import Flask, render_template_string
from huggingface_hub import InferenceClient
import markdown  # pip install markdown

app = Flask(__name__)
client = InferenceClient()

@app.route("/")
def index():
    completion = client.chat.completions.create(
        model="openai/gpt-oss-20b",
        messages=[{"role": "user", "content": "Напиши лекцию про типы данных в C#"}],
    )
    
    # Берем текст ответа
    answer_md = completion.choices[0].message.content
    
    # Конвертируем Markdown в HTML с расширениями для кода, таблиц, списков
    answer_html = markdown.markdown(
        answer_md,
        extensions=['fenced_code', 'tables', 'nl2br', 'sane_lists']
    )
    
    # HTML с минимальными стилями для Markdown
    html = f"""
    <html>
        <head>
            <title>Chat Answer</title>
            <style>
                body {{ font-family: Arial, sans-serif; padding: 20px; background: #f7f7f7; }}
                pre {{ background: #272822; color: #f8f8f2; padding: 10px; border-radius: 5px; overflow-x: auto; }}
                code {{ background: #eee; padding: 2px 4px; border-radius: 3px; }}
                table {{ border-collapse: collapse; margin: 10px 0; }}
                table, th, td {{ border: 1px solid #ccc; padding: 5px 10px; }}
                th {{ background: #eee; }}
            </style>
        </head>
        <body>
            <h1>Ответ от модели:</h1>
            {answer_html}
        </body>
    </html>
    """
    return html

if __name__ == "__main__":
    app.run(debug=True)
