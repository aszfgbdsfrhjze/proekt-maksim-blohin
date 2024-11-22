$(document).ready(function() {
    $('#mapbutton').click(function() {
        const oldContent = $('.map').html(); // Сохраняем старый контент
        const newContent = `
          <script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A83b535db2775c9738090a00416b8cd0417b6b71808df5310ad55a16813876b47&amp;width=900&amp;height=720&amp;lang=ru_RU&amp;scroll=true"></script>
        `;
        $('.map').html(newContent);
      });
});