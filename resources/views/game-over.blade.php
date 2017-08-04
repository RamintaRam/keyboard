<!DOCTYPE html>
<html lang="en">
<head>
    <!DOCTYPE html>
    <html lang="en">
    <head>

        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
              integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u"
              crossorigin="anonymous">

        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css"
              integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp"
              crossorigin="anonymous">

        <link rel="stylesheet" href="css/gameover.css">
        <meta charset="UTF-8">
        <title>Title</title>
    </head>
<body>


<div class="tab">
    <button class="tablinks" onclick="LevelOpen(event, 'Easy')">Easy</button>
    <button class="tablinks" onclick="LevelOpen(event, 'Medium')">Medium</button>
    <button class="tablinks" onclick="LevelOpen(event, 'Hard')">Hard</button>
</div>

<div id="Easy" class="tabcontent">
    <h3>Easy level scores</h3>
    <table class="table">


    @if(isset ($list9))
        @if(sizeof($list9)>0)
            <thead>
            <tr>

                <th>Name</th>
                <th>Score</th>
                <th>Gaming time</th>

            </tr>
            </thead>

            <tbody>
@foreach($list9 as $key => $value )
    <tr>
  @foreach($value as $key => $record)

<td>{{$record}}</td>

    @endforeach
    </tr>

@endforeach


        </tbody>

            @endif
    </table>
</div>
@endif


<div id="Medium" class="tabcontent">
    <h3>Medium level scores</h3>
    <table class="table">


        @if(isset ($list6))
            @if(sizeof($list6)>0)
                <thead>
                <tr>

                    <th>Name</th>
                    <th>Score</th>
                    <th>Gaming time</th>

                </tr>
                </thead>

                <tbody>
                @foreach($list6 as $key => $value )
                    <tr>
                        @foreach($value as $key => $record)

                            <td>{{$record}}</td>

                        @endforeach
                    </tr>

                @endforeach


                </tbody>

            @endif
    </table>
</div>
@endif


<div id="Hard" class="tabcontent">
    <h3>Hard level scores</h3>
    <table class="table">


        @if(isset ($list3))
            @if(sizeof($list3)>0)
                <thead>
                <tr>

                    <th>Name</th>
                    <th>Score</th>
                    <th>Gaming time</th>

                </tr>
                </thead>

                <tbody>
                @foreach($list3 as $key => $value )
                    <tr>
                        @foreach($value as $key => $record)

                            <td>{{$record}}</td>

                        @endforeach
                    </tr>

                @endforeach


                </tbody>

            @endif
    </table>
</div>
@endif













</body>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"
        integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa"
        crossorigin="anonymous"></script>
<script src="js/gameover.js"></script>

</html>
