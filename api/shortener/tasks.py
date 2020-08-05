from celery.task import task
from celery.utils.log import get_task_logger

logger = get_task_logger(__name__)


@task(name="test_task", bind=True)
def test_task(self):
    logger.info('HAHAHAHAHAHA')
    return