class TestException(Exception):
    def __init__(self, message: str):            
        super().__init__(message)


def test_error_route(request):
    raise TestException(message="Test error is invoked")