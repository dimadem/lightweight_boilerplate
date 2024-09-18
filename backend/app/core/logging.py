import logging
from typing import Optional

class ColoredFormatter(logging.Formatter):
    """Formatter for coloring logs in yellow."""
    YELLOW = '\033[93m'
    RESET = '\033[0m'

    def format(self, record: logging.LogRecord) -> str:
        """Formats the log record, adding yellow color."""
        log_message = super().format(record)
        return f"{self.YELLOW}{log_message}{self.RESET}"

def setup_logger(name: Optional[str] = None) -> logging.Logger:
    """
    Sets up and returns a logger with colored output.
    
    Args:
        name: Logger name. If not specified, __name__ is used.
    
    Returns:
        Configured Logger object.
    """
    logger = logging.getLogger(name or __name__)
    logger.setLevel(logging.INFO)

    # Create handler for console output
    console_handler = logging.StreamHandler()
    console_handler.setLevel(logging.INFO)

    # Create and set formatter
    formatter = ColoredFormatter('%(message)s')
    console_handler.setFormatter(formatter)

    # Clear existing handlers and add the new one
    logger.handlers.clear()
    logger.addHandler(console_handler)

    # Disable log propagation to parent loggers
    logger.propagate = False

    return logger

# Create logger
logger = setup_logger()
