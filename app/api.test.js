it('api test', async () => {
    jest.spyOn().mockReturnValueOnce({})

    const result = await sendChat()
    expect().toBe('저는 가인님의 챗봇입니다.')
})
