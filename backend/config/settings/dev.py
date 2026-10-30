from .base import *  # noqa: F401,F403
from .base import SECRET_KEY as _SECRET_KEY

DEBUG = True
SECRET_KEY = _SECRET_KEY or "dev-only-insecure-key"
