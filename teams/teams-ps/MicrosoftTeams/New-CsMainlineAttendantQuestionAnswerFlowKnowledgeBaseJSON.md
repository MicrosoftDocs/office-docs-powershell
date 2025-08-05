---
applicable: Microsoft Teams
author: tomkau
external help file: Microsoft.Rtc.Management.dll-Help.xml
Locale: en-US
manager: bulenteg
Module Name: MicrosoftTeams
ms.author: tomkau
online version: https://learn.microsoft.com/powershell/module/microsoftteamsNew-CsMainlineAttendantQuestionAnswerFlowKnowledgeBaseJSON
schema: 2.0.0
title: New-CsMainlineAttendantQuestionAnswerFlowKnowledgeBaseJSON
---

# New-CsMainlineAttendantQuestionAnswerFlow -KnowledgeBase JSON Example

## SYNOPSIS
The [New-CsMainlineAttendantQuestionAnswerFlow](./New-CsMainlineAttendantQuestionAnswerFlow.md) -Knowledge requires a path to a JSON formatted response.

## SYNTAX

```
[
	{
		"address_type" : "local_file",
		"document_address" : "<local_address>", // provide full path to the local address
		"description" : "<description>"
		
	},
	{
		"address_type" : "webpage",
		"document_address" : "<web_address>", // provide full path to the webpage
		"description" : "<description>"
		
	},
	{
		"address_type" : "api_endpoint",
		"description" : "<description>",
		"api_specification" : {
			"generateAuthToken" : { // Must be specified for "bearer_token_dynamic"
				"endpoint" : "<endpoint>", // For example, https://www.contoso.com/home?parameter1=<parameter1>&parameter2=<parameter2>
				"method_type": "GET" or "PUT" or "POST",
				"description" : "<description>",
				"query_strings" : { // Description of the query string parameters in the endpoint
					"parameter1" : "<parameter1>",
					"parameter2" : "<parameter2>"
				},
				"headers" : {
					"Authorization" : "Basic <constant>" or "api-key <constant>" or "Bearer <constant>", // replace <constant> with an expected value
					"X-API-Key" : "API-Key" // Only applicable for "api_key" auth type.
				},
				"response" : { // Response to 200 range of codes
					"token" : "<token>" // this token will be used for APIs with "bearer_token_dynamic" auth type
				}
			},
			"getResults1" : {
				"endpoint" : "<endpoint>", // For example, https://www.contoso.com/home?parameter1=<parameter1>&parameter2=<parameter2>
				"method_type": "GET" or "PUT" or "POST",
				"description" : "<description>",
				"query_strings" : { // Definition of the query string parameters in the endpoint
					"parameter1" : "<parameter1>",
					"parameter2" : "<parameter2>"
				},
				"headers" : {
					"Authorization" : "Basic <constant>" or "api-key <constant>" or "Bearer <constant>" or "Bearer <token>", // replace <constant> with an expected value. <token> will be replaced by the response to generateAuthToken() 
					"X-API-Key" : "API-Key" // Only applicable for "api_key" auth type.
				},
				"body" : { // Sent as JSON payload
					"in_parameter1" : "<in_parameter1>",
					"in_parameter2" : "<in_parameter2>"
				},
				"response" : { // Response to 200 range of codes
					"out_parameter1" : "<out_parameter1>",
					"out_parameter2" : "<out_parameter2>",
					"out_parameter3" : "<out_parameter3>"
				}
			},
			"getResults2" : {
				"endpoint" : "<endpoint>", // For example, https://www.contoso.com/home?parameter1=<parameter1>&parameter2=<parameter2>
				"method_type": "GET" or "PUT" or "POST"
				"description" : "<description>",
				"query_strings" : { // Definition of the query string parameters in the endpoint
					"parameter1" : "<parameter1>",
					"parameter2" : "<parameter2>"
				},
				"headers" : {
					"Authorization" : "Basic <constant>" or "api-key <constant>" or "Bearer <constant>" or "Bearer <token>", // replace <constant> with an expected value. <token> will be replaced by the response to generateAuthToken() 
					"X-API-Key" : "API-Key" // Only applicable for "api_key" auth type.
				},
				"body" : { // Sent as JSON payload
					"in_parameter1" : "<in_parameter1>",
					"in_parameter2" : "<in_parameter2>"
				},
				"response" : { // Response to 200 range of codes
					"out_parameter1" : "<out_parameter1>",
					"out_parameter2" : "<out_parameter2>",
					"out_parameter3" : "<out_parameter3>"
				}
			}
		}
	}
]
```

## PARAMETERS

###  -Knowledgebase
The parameters used by the Knowledgebase - see the JSON example above.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: Yes
Position: 0
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

## INPUTS

## OUTPUTS

### Microsoft.Rtc.Management.Hosted.CallQueue.Models.CallQueue

## NOTES

## RELATED LINKS



