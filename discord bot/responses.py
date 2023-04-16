import random
def handle_response(message):
    p_message = message.lower()

    if p_message == 'task':
        return '[1: Car pooled, 2: Walk to the work, 3: Using Low Natural gasses]'
    if p_message == 'task 1 completed':
        return "Congratulations you leveled up👍🥳"
    if p_message == 'task 2 completed':
        return "Congratulations you leveled up👍🥳"
    if p_message == 'task 3 completed':
        return "Congratulations you leveled up👍🥳"
    
    #if p_message == 'roll':
        #return str(random.randint(1,10))