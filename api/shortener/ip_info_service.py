import logging

import requests
from django.conf import settings
from user_agents import parse

logger = logging.getLogger(__name__)


class IPGeoInfo:
    """
    Handles geo and user-agent info
    """
    def __init__(self, ip, user_agent):
        self.ip = ip
        self.user_agent = user_agent
        self.data = None
        self.info()

    def _fetch_data_from_api(self):
        """Method to get data from IPGepLocation.io(https://ipgeolocation.io/) API"""
        params = {
            'excludes': 'continent_code,country_code2,country_code3,is_eu,languages,geoname_id',
            'apiKey': settings.IP_GEO_LOCATION_API_KEY,
            'ip': self.ip
        }
        url = 'https://api.ipgeolocation.io/ipgeo'
        response = requests.get(url, params=params)
        if response.status_code == 200:
            self.data = response.json()
        else:
            logger.warning(f'HTTP Get Request Failed: status_code={response.status_code}, response={response.json()}')
            self.data = {}

    def _parse_user_agent(self):
        ua = parse(self.user_agent)
        self.data['user_agent'] = {
            'ua': ua.__str__(),
            'browser_family': ua.browser.family,
            'browser_version': ua.browser.version_string,
            'os_family': ua.os.family,
            'os_version': ua.os.version_string,
            'device_family': ua.device.family,
            'device_brand': ua.device.brand,
            'device_model': ua.device.model,
            'is_mobile': ua.is_mobile,
            'is_pc': ua.is_pc,
            'is_tablet': ua.is_tablet,
            'is_touch_capable': ua.is_touch_capable,
            'is_bot': ua.is_bot,
        }

    def info(self):
        logger.debug(f'IP: {self.ip} & UA: {self.user_agent}')
        self._fetch_data_from_api()
        self._parse_user_agent()
        return self.data