---
external help file: Microsoft.Rtc.Management.dll-Help.xml
online version: https://learn.microsoft.com/powershell/module/teams/New-CsMainlineAttendantQuestionAnswerFlow 
applicable: Microsoft Teams
title: New-CsMainlineAttendantQuestionAnswerFlow
author: tomkau
ms.author: tomkau
manager: bulenteg
ms.reviewer:
schema: 2.0.0
---

# New-CsMainlineAttendantQuestionAnswerFlow

## SYNOPSIS
Creates new Mainline Attendant question and answer (FAQ) flow

## SYNTAX

```
New-CsMainlineAttendantQuestionAnswerFlow -Name <String> -Description <String>  -ApiAuthenticationType <basic | api_key | bearer_token_static | bearer_token_dynamic> -KnowledgeBase <String> [-Tenant <Guid>] [<CommonParameters>]
```

## DESCRIPTION
The New-CsMainlineAttendantQuestionAnswerFlow cmdlet creates a question and answer connection that can be used with Mainline Attendant

> [!CAUTION]
> This cmdlet will only work for customers that are participating in the Voice Applications private preview for these features. General Availability for this functionality has not been determined at this time.

## EXAMPLES


## PARAMETERS

### -Name
The name of the question and answer flow

```yaml
Type: String
Parameter Sets: (All)
Aliases:
applicable: Microsoft Teams

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Description
The description for the question and answer flow

```yaml
Type: String
Parameter Sets: (All)
Aliases:
applicable: Microsoft Teams

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

###  -ApiAuthenticationType
The method of authentication used by the API

PARAVALUES: basic | api_key | bearer_token_static | bearer_token_dynamic

```yaml
Type: String
Parameter Sets: (All)
Aliases:
applicable: Microsoft Teams

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

###  -KnowledgeBase
The knowledge base definition

JSON 1

```json
[
    {
        "name": "John",
        "skills": [ "SQL", "C#", "Azure" ]
    },
    {
        "name": "Jane",
        "surname": "Doe"
    }
]
```

JSON 2

```json
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

```yaml
Type: String
Parameter Sets: (All)
Aliases:
applicable: Microsoft Teams

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

### Microsoft.Rtc.Management.Hosted.CallQueue.Models.CallQueue

## NOTES

## RELATED LINKS

