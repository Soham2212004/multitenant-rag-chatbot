from .base import *  # noqa: F401,F403
from .base import SECRET_KEY as _SECRET_KEY

DEBUG = False
if not _SECRET_KEY:
    raise RuntimeError("DJANGO_SECRET_KEY must be set in production")
SECRET_KEY = _SECRET_KEY
