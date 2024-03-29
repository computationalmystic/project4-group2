 var myContainer = null; // used for holding the canvases that the charts are going to be made from
            var myChart = null; // this will reference the Chart object from Chart.js
            var groupRequestURL = "http://augur.osshealth.io:5000/api/unstable/repo-groups";
            
            // decided to chunk these urls up into "before the group id" and "after the group id"
                // the combobox has a group id assoc. with each group name so the id can get appended inbetween the "first" and
                //"last" parts of the url
            var topCommitersURLFirst = "http://augur.osshealth.io:5000/api/unstable/repo-groups/";
            var topCommitersURLLast = "/top-committers";
            var pullRequestURLFirst = "http://augur.osshealth.io:5000/api/unstable/repo-groups/";
            var pullRequestURLLast = "/pull-request-acceptance-rate";
            var issueBacklogURLFirst = "http://augur.osshealth.io:5000/api/unstable/repo-groups/";
            var issueBacklogURLLast = "/issue-backlog";

            function homePage() {
                var homeURL = "http://ec2-3-133-118-124.us-east-2.compute.amazonaws.com/";
                location.replace(homeURL);
            }
            
            // this function is used for switching between tabs
            function showVisual(evt, visual) {
                // realized that when switching between tabs, the getJSON call to get the repo group data wouldn't work for the 
                    // second and third tab, even after refreshing the page; now just doing check to see if the select element is 
                    // empty, if so then another call is made to get the data
                if($('#repoGroupSelectTwo').val() == null){
                    $.getJSON(groupRequestURL, function(result){
                        $(result).each(function(i, repoGroup){
                            $('#repoGroupSelectTwo').append($("<option value='" + repoGroup.repo_group_id + "'>" + repoGroup.rg_name + "</option>"));
                        });
                    })
                }
                else if($('#repoGroupSelectThree').val() == null){
                    $.getJSON(groupRequestURL, function(result){
                        $(result).each(function(i, repoGroup){
                            $('#repoGroupSelectThree').append($("<option value='" + repoGroup.repo_group_id + "'>" + repoGroup.rg_name + "</option>"));
                        });
                    })
                }
                
                // handling the showing and hiding of content for the tabs
                var i, tabcontent, tablinks;
                tabcontent = document.getElementsByClassName("tabcontent");
                for (i = 0; i < tabcontent.length; i++) {
                    tabcontent[i].style.display = "none";
                }
                tablinks = document.getElementsByClassName("tablinks");
                for (i = 0; i < tablinks.length; i++) {
                    tablinks[i].className = tablinks[i].className.replace(" active", "");
                }
                document.getElementById(visual).style.display = "block"; // deciding which visual to display
                evt.currentTarget.className += " active";
            }
            
            $(document).ready(function(){
                // getting data and putting it in the select element 
                $.getJSON(groupRequestURL, function(result){
                    $(result).each(function(i, repoGroup){
                        $('#repoGroupSelectOne').append($("<option value='" + repoGroup.repo_group_id + "'>" + repoGroup.rg_name + "</option>"));
                    });
                });
                
                // function for showing top commiter data in a polar chart
                $('#repoGroupSelectOne').change((function(){
                    // when the select is changed, the id of the group showing is appended inbetween the "first" and "last" part of
                        // the topCommiter url
                    var selectedRepoGroup = $("#repoGroupSelectOne option:selected").val();
                    var selectedRepoGroupText = $("#repoGroupSelectOne option:selected").text();
                    var subUrl = topCommitersURLFirst + selectedRepoGroup + topCommitersURLLast;
                    
                    $.getJSON(subUrl, function(commits){
                        var topCommitersEmailArray = [];
                        var topCommitersCommitArray = [];
                        var colorArray = [];
                        
                        $(commits).each(function(i, value){
                            topCommitersEmailArray[i] = value.email;
                            topCommitersCommitArray[i] = value.commits;
                            colorArray[i] = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
                        });
                        
                        // noticed that when a different group was selected, the chart for the previous group was still being shown
                            // behind the new chart so this is here to remove any data that was previously there
                        $('#polarChart').remove();
                        // creating a new canvas to display the polar chart in
                        $('#polarcontainer').append($("<canvas id=polarChart width=400 height=800></canvas>"));
                        
                        myContainer = $('#polarChart');
                        // new Chart object via Chart.js
                        myChart = new Chart(myContainer, {
                            type: 'polarArea',
                            data: {
                                labels: topCommitersEmailArray,
                                datasets: [{
                                        data: topCommitersCommitArray,
                                        backgroundColor: colorArray
                                    }]
                            },
                            options: {
                                title: {
                                    display: true,
                                    text: "Top Commiters for: " + selectedRepoGroupText
                                },
                                responsive: true,
                                maintainAspectRatio: false,
                            }
                        });
                        
                    });
                }));
                
                // same setup as the previous function, just grabbing data for a bar chart
                $('#repoGroupSelectThree').change((function(){
                    var selectedRepoGroup = $("#repoGroupSelectThree").val();
                    var subUrl = issueBacklogURLFirst + selectedRepoGroup + issueBacklogURLLast;
                    
                    $.getJSON(subUrl, function(result){
                        var issueBacklogArray = [];
                        var issueRepoNameArray = [];
                        var colorArray = [];
                        
                        $(result).each(function(i, value){
                            issueBacklogArray[i] = value.issue_backlog;
                            issueRepoNameArray[i] = value.repo_name;
                            colorArray[i] = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
                        });
                        
                        $('#barChart').remove();
                        $('#barcontainer').append($("<canvas id=barChart width=400 height=400></canvas>"));
                        
                        myContainer = $('#barChart');
                        myChart = new Chart(myContainer, {
                            type: 'bar',
                            data: {
                                labels: issueRepoNameArray,
                                datasets: [{
                                    label: "Backlogs",
                                    data: issueBacklogArray,
                                    backgroundColor: colorArray,
                                    borderColor: colorArray,
                                    barPercentage: 0.25,
                                    barThickness: 3
                                }]
                            },
                            options: {
                                title: {
                                    display: true,
                                    text: 'Issue Backlog for: ' + $("#repoGroupSelectThree option:selected").text()
                                },
                                responsive: true,
                                maintainAspectRatio: false
                            }
                        });
                    });
                }));
                
                $('#repoGroupSelectTwo').change((function(){
                    var selectedRepoGroup = $("#repoGroupSelectTwo").val();
                    var subUrl = pullRequestURLFirst + selectedRepoGroup + pullRequestURLLast;
                    
                    $.getJSON(subUrl, function(result){
                        var pullRequestDateArray = [];
                        var pullRequestRateArray = [];
                        var colorArray = [];
                        
                        $(result).each(function(i, value){
                            pullRequestDateArray[i] = new Date(value.date);
                            pullRequestRateArray[i] = value.rate;
                            colorArray[i] = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
                        });
                        
                        $('#timeSheet').remove();
                        $('#timecontainer').append($("<canvas id=timeSheet width=400 height=400></canvas>"));
                        
                        myContainer = $('#timeSheet');
                        myChart = new Chart(myContainer, {
                            type: 'line',
                            data: {
                                labels: pullRequestDateArray,
                                datasets: [{
                                    // line graphs seems to require HELLA config variables 
                                    label: "Pull Request Acceptance Rate for: " + $("#repoGroupSelectTwo option:selected").text(),
                                    fill: false,
                                    lineTension: 1,
                                    borderWidth: 4,
                                    backgroundColor: colorArray,
                                    borderCapStyle: 'butt',
                                    borderDash: [],
                                    borderDashOffset: 0.0,
                                    borderJoinStyle: 'miter',
                                    pointBorderColor: colorArray,
                                    pointBackgroundColor: '#fff',
                                    pointBorderWidth: 2,
                                    pointHoverRadius: 10,
                                    pointHoverBackgroundColor: colorArray,
                                    pointHoverBorderWidth: 4,
                                    pointRadius: 5,
                                    pointHitRadius: 10,
                                    data: pullRequestRateArray
                                }]
                            }
                        });
                    });
                }));
            });