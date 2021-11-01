$(document).ready(function() {
    /*add Student*/
    $(".addbutton").click(function() {
        var toAdd = $("#staticName").val();
        var exam = $(".exam").text()
        if ($("#staticName").val().length !== 0) {
            $(".table-main tbody").append(
                "<tr><td>" + toAdd + "</td> <td>" +
                "<a href='#' data-bs-toggle='modal' data-bs-target='#addSubject' class='tag' >" +
                "Imtahan" + "</a>" + "</td><td>" +
                " <span id='min' class='amount'></span>" + "</td><td>" +
                " <span id='max' class='amount'></span>" + "</td><td>" +
                " <span id='total' class='amount'></span>" + "</td></tr>",
            );
        } else {
            alert("Düzgün ad qeyd etməyiniz xahiş olunur");
        }
    });

    /*add student proses with enter*/
    $("#staticName").keyup(function(event) {
        if (event.keyCode == 13) {
            $(".addbutton").click();
        }
    });
    /*select input function*/
    $(".form-select").on("change", function() {
        selectSubject = $('.form-select option:selected').text();
    });
    /*add subject and mark */
    $(".sent").click(function() {
        var inputNumber = $(".number-input").val()
        $(".modal-footer tbody").append("<tr><td>" + selectSubject + "</td> <td class='input-number'>" + inputNumber + "</td></tr>");
        /*total mark */
        getTotal();
    });
    /*calculation of the average mark */
    function getTotal() {
        var total = 0;
        valid_labels = 0,
            average = 0;
        var markArray = [];
        $('.input-number').each(function() {
            var val = parseFloat(this.innerHTML)
            markArray.push(val);
            /*find min and max mark*/
            var max = Math.max(...markArray)
            var min = Math.min(...markArray)
            if (val !== 0) {
                valid_labels += 1;
                total += val;
            }
            $('#min').text(min);
            $('#max').text(max);
        });

        average = total / valid_labels;
        $('#total').text(average);
    }

});