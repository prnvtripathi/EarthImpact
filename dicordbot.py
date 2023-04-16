import discord

client = discord.Client()

@client.event
async def on_ready():
    print('Logged in as {0.user}'.format(client))

@client.event
async def on_message(message):
    if message.author == client.user:
        return

    if message.content.startswith('!complete-task'):
        # Get the user who sent the command
        user = message.author

        # Give the user 10 points for completing the task
        # You can adjust the number of points as needed
        points = 10

        # TODO: Store the user's points in a database or file
        # For this example, we'll just print the points to the console
        print(f'{user.name} has completed the task and earned {points} points!')

client.run('your_bot_token_here')
