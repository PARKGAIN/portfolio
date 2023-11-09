it('api test', async () => {
    jest.spyOn(global, 'fetch').mockResolvedValue()

    const result = await sendChat('익명', '하이')
    expect(result).toBe('저는 가인님의 챗봇입니다.')
})
