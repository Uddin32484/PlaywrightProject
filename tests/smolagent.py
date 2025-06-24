from langchain_openai import ChatOpenAI
from browser_use import agent
import asyncio
from dotenv import load_dotenv
load_dotenv()
prompt = """
Go to http://www.eaapp.somee.com/ and  perform login . the Create new user
with some realistic data. Then log off from site 
"""
async def main():
    agent= agent(
        task=prompt,
        llm=ChatOpenAI(temperature=0, model="gpt-4o")
        
    )
    result = await agent.run()

    print(result)
    asyncio.run(main())