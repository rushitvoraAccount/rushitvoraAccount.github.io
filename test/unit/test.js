describe('testMyFilter', function() {

    beforeEach(angular.mock.module('accountApp'));

    var filter;
    var $httpBackend, getData;
    beforeEach(inject(function($filter, _$httpBackend_, _getData_) {

        filter = $filter;
        $httpBackend = _$httpBackend_;
        getData = _getData_;

    }))


    var accountData = [{
        "current": [{
            "id": "1001",
            "branch": "GGN",
            "name": "Current Account - 1",
            "currency": "INR",
            "order": "3",
            "balance": "5000",
            "limit": "10000"
        }, {
            "id": "1004",
            "branch": "GGN",
            "name": "Current Account - 3",
            "currency": "INR",
            "order": "1",
            "balance": "7000",
            "limit": "10000"
        }, {
            "id": "1021",
            "branch": "GGN",
            "name": "Current Account - 4",
            "currency": "INR",
            "order": "2",
            "balance": "5050",
            "limit": "10000"
        }]
    }, {
        "savings": [{
                "id": "20215",
                "branch": "GGN",
                "name": "Savings Account - 1",
                "currency": "INR",
                "order": "1",
                "balance": "5050"
            }, {
                "id": "20216",
                "branch": "GGN",
                "name": "Savings Account - 3",
                "currency": "INR",
                "order": "2",
                "balance": "70050"
            }, {
                "id": "20217",
                "branch": "GGN",
                "name": "Savings Account - 2",
                "currency": "INR",
                "order": "3",
                "balance": "0",
                "penalty": "100"
            }

        ]
    }, {
        "deposits": [{
            "id": "31005",
            "branch": "GGN",
            "name": "FD Account - 1",
            "currency": "INR",
            "order": "1",
            "initial": "10000",
            "interest": "6",
            "maturityDate": "11-oct-2025"

        }, {
            "id": "31005",
            "branch": "GGN",
            "name": "FD Account - 2",
            "currency": "INR",
            "order": "2",
            "initial": "10000",
            "interest": "6",
            "maturityDate": "11-oct-2019",
            "taxsaver": "true"

        }]
    }, {
        "cards": [{
            "id": "4111111111111111",
            "type": "VISA",
            "name": "My Gold Card",
            "currency": "INR",
            "order": "1",
            "limit": "100000",
            "consumedLimit": "4500"

        }]
    }, {
        "loans": []
    }];

    var filteredData = [{
        "current": [{
            "id": "1001",
            "branch": "GGN",
            "name": "Current Account - 1",
            "currency": "INR",
            "order": "3",
            "balance": "5000",
            "limit": "10000"
        }, {
            "id": "1004",
            "branch": "GGN",
            "name": "Current Account - 3",
            "currency": "INR",
            "order": "1",
            "balance": "7000",
            "limit": "10000"
        }, {
            "id": "1021",
            "branch": "GGN",
            "name": "Current Account - 4",
            "currency": "INR",
            "order": "2",
            "balance": "5050",
            "limit": "10000"
        }]
    }];

    it('test whether Array is getting filtered based on name supplied', function() {

        var formattedArray = filter('accTypeFilter')(accountData, "current");
        expect(formattedArray).toEqual(filteredData);

    });

    it('getData.getAccountData() - test', function() {
        $httpBackend.expectGET('./data/data.json').respond(accountData);
        getData.getAccountData(function(response) {
            expect(response.data).toEqual(accountData);
        });
        $httpBackend.flush();
    });


})