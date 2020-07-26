from django.utils.crypto import get_random_string


def get_link_code(length: int = 4) -> str:
    """Method to return unique code based on length passed"""
    return get_random_string(length=length)