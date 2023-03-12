/**
 * @openapi
 *   components:
 *     parameters:
 *       ownerPathParam:
 *         in: path
 *         required: true
 *         name: owner
 *         description: Account owner (signer) address
 *         schema:
 *           type : string
 *       networksQueryParam:
 *         in: query
 *         required: true
 *         name: networks
 *         description: EVM network
 *         schema:
 *           $ref: '#/components/schemas/networks'
 *       signerPathParam:
 *         in: path
 *         required: true
 *         name: signer
 *         description: Address of the signer account (owner)
 *         schema:
 *           type : string
 *       identifierPathParam:
 *         in: path
 *         required: true
 *         name: identifier
 *         description: "Slug or address of the collection. Example: `cryptocoven`"
 *         schema:
 *           type: string
 *       ownerQueryParam:
 *         in: query
 *         required: true
 *         name: owner
 *         description: The owner (signer) of the order
 *         schema:
 *           type : string
 *           format: address   
 *       tokenInQueryParam:     
 *         in: query
 *         required: true
 *         name: tokenIn
 *         description: The input token address
 *         schema:
 *           type : string
 *       tokenOutQueryParam:     
 *         in: query
 *         required: true
 *         name: tokenOut
 *         description: The output token address
 *         schema:
 *           type : string
 *       tokenInAmountQueryParam:
 *         in: query
 *         required: true
 *         name: tokenInAmount
 *         description: The input token amount
 *         schema:
 *           type : string
 *       tokenOutAmountQueryParam:
 *         in: query
 *         required: true
 *         name: tokenOutAmount
 *         description: The output token amount
 *         schema:
 *           type : string
 *       networkQueryParam:
 *         in: query
 *         required: true
 *         name: network
 *         description: EVM network
 *         schema:
 *           $ref: '#/components/schemas/network'
 *       accountQueryParam:
 *         in: query
 *         name: account
 *         description: Account address
 *         schema:
 *           type : string
 *       tokenQueryParam:
 *         in: query
 *         name: token
 *         description: Token address
 *         schema:
 *           type : string
 *       signerQueryParam:
 *         in: query
 *         name: signer
 *         description: The signer (owner) address
 *         schema:
 *           type : string
 *       pageQueryParam:
 *         in: query
 *         name: page
 *         description: Page number to return
 *         schema:
 *           type : integer
 *           minimum: 1
 *       sizeQueryParam:
 *         in: query
 *         name: size
 *         description: Number of results per page to return
 *         schema:
 *           type : integer
 *           minimum: 1
 *           maximum: 100
 *           default: 10
 *       statusQueryParam:
 *         in: query
 *         name: status
 *         description: Filter by order status
 *         schema:
 *           type : string
 *           enum: [OPEN, CANCELED, FILLED, EXPIRED]
 *       messageTypeQueryParam:
 *         in: query
 *         name: messageType
 *         description: Message type (order type)
 *         schema:
 *           type : array
 *           items: 
 *             type: string                   
 *       bitQueryParam:
 *         in: query
 *         required: true
 *         name: bit
 *         description: The order bit value
 *         schema:
 *           type : string
 *       bitmapIndexQueryParam:
 *         in: query
 *         required: true
 *         name: bitmapIndex
 *         description: The order bitmapIndex value
 *         schema:
 *           type : string
 *       hashPathParam:
 *         in: path
 *         required: true
 *         name: hash
 *         description: Hash of the order
 *         schema:
 *           type : string
 *       includeHistoryQueryParam:
 *         in: query
 *         name: includeHistory
 *         description: Include an array of historical price checks on the order in the response
 *         schema:
 *           type : boolean
 *           default: false
 *       startTimeQueryParam:
 *         in: query
 *         name: startTime
 *         description: Filter historical price checks by a start time
 *         schema:
 *           type : string
 *           format: date
 *           example: 2022-12-02T15:11:02.970Z
 *       endTimeQueryParam:
 *         in: query
 *         name: endTime
 *         description: Filter historical price checks by an end time
 *         schema:
 *           type : string
 *           example: 2022-12-02T15:11:02.970Z
 *       functionQueryParam:
 *         in: query
 *         required: true
 *         name: function
 *         description: The order verifier function name. See [brink-verifiers-v2](https://github.com/brinktrade/brink-verifiers-v2).
 *         schema:
 *           type : string
 *       verifierQueryParam:
 *         in: query
 *         required: true
 *         name: verifier
 *         description: The order verifier contract address. See [brink-verifiers-v2](https://github.com/brinktrade/brink-verifiers-v2).
 *         schema:
 *           type : string
 *       paramsQueryParam:
 *         in: query
 *         required: true
 *         name: params
 *         description: Parameters for the verifier function call
 *         schema:
 *           type : string
 *       signedMessageQueryParam:
 *         in: query
 *         required: true
 *         name: signedMessage
 *         description: Order signed message. This is an object returned by the Create endpoint with a valid EIP-712 signature added.
 *         schema:
 *           $ref: '#/components/schemas/SignedMessage'
 *       callDataQueryParam:
 *         in: query
 *         required: true
 *         name: callData
 *         description: Call data to fill the order. This is generally a swap path that is provided by the transaction sender (executor).
 *         schema:
 *           type : string
 *           format: bytecode
 *     schemas:
 *       BasicError:
 *         type: object
 *         properties:
 *           err:
 *             type: string
 *       EIP712TypedData:
 *         type: object
 *         properties:
 *           types:
 *             type: object
 *           domain:
 *             type: object
 *           values:
 *             type: object
 *       SignedMessage:
 *         type: object
 *         properties:
 *           message:
 *             type: string
 *           EIP712TypedData:
 *             $ref: '#/components/schemas/EIP712TypedData'
 *           signature: 
 *             type: string
 *           signer:
 *             type: string
 *           accountAddress:
 *             type: string
 *           functionName:
 *             type: string
 *           signedParams:
 *             type: array
 *             example: []
 *         required:  
 *           - messge
 *           - EIP712TypedData
 *           - signature
 *           - signer
 *           - accountAddress
 *           - functionName
 *           - signedParams
 *       networks:
 *           type : array
 *           items: 
 *             $ref: '#/components/schemas/network'
 *       network:
 *           type : string
 *           enum: [mainnet]
*/