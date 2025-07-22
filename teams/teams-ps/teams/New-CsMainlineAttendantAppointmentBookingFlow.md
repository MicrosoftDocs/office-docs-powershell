---
external help file: Microsoft.Rtc.Management.dll-Help.xml
online version: https://learn.microsoft.com/powershell/module/teams/new-csmainlineattendantappointmentbookingflow
applicable: Microsoft Teams
title: New-CsMainlineAttendantAppointmentBookingFlow
author: tomkau
ms.author: tomkau
manager: bulenteg
ms.reviewer:
schema: 2.0.0
---

# New-CsMainlineAttendantAppointmentBookingFlow

## SYNOPSIS
Creates new Mainline Attendant appointment booking flow

## SYNTAX

```
New-CsMainlineAttendantAppointmentBookingFlow -Name <String> -Description <String>  -CallerAuthenticationMethod <sms | email | verification_link | voiceprint | user_details> -ApiAuthenticationType <basic | api_key | bearer_token_static | bearer_token_dynamic> -ApiDefinitions <String> [-Tenant <Guid>] [<CommonParameters>]
```

## DESCRIPTION
The New-CsMainlineAttendantAppointmentBookingFlow cmdlet creates a new appointment booking connection that can be used with Mainline Attendant

> [!CAUTION]
> This cmdlet will only work for customers that are participating in the Voice Applications private preview for these features. General Availability for this functionality has not been determined at this time.

## EXAMPLES


## PARAMETERS

### -Name
The name of the appointment booking flow

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
The description for the appointment booking flow

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

###  -CallerAuthenticationMethod
The method by which the caller is authenticated

PARAVALUES: sms | email | verification_link | voiceprint | user_details

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

###  -ApiDefinitions
The parameters used by the API

```json
{ 

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

"getCallerDetails" : [ // Can specify multiple endpoints below to get caller details by phone number, ID, email, etc. 

{ 

"endpoint" : "<endpoint1>", // For example, https://www.contoso.com/home?parameter1=<parameter1>&parameter2=<parameter2> 

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

{ 

"endpoint" : "<endpoint2>", 

"method_type": "GET" or "PUT" or "POST", 

"description" : "<description>", 

"query_strings" : { 

"parameter1" : "<parameter1>", 

"parameter2" : "<parameter2>" 

}, 

"headers" : { 

"Authorization" : "Basic <constant>" or "api-key <constant>" or "Bearer <constant>" or "Bearer <token>", 

"X-API-Key" : "API-Key" 

}, 

"body" : { 

"in_parameter1" : "<in_parameter1>", 

"in_parameter2" : "<in_parameter2>" 

}, 

"response" : { 

"out_parameter1" : "<out_parameter1>", 

"out_parameter2" : "<out_parameter2>", 

"out_parameter3" : "<out_parameter3>" 

} 

} 

], 

"initiateCallerAuthentication" : [ // for SMS/email code, verification link 

{ 

"endpoint" : "<endpoint>", 

"method_type": "GET" or "PUT" or "POST", 

"description" : "<description>", 

"query_strings" : { 

"parameter1" : "<parameter1>", 

"parameter2" : "<parameter2>" 

}, 

"headers" : { 

"Authorization" : "Basic <constant>" or "api-key <constant>" or "Bearer <constant>" or "Bearer <token>", 

"X-API-Key" : "API-Key" // Only applicable for "api_key" auth type. 

}, 

"body" : { 

"in_parameter1" : "<in_parameter1>", // phone number, user ID, etc 

"in_parameter2" : "<in_parameter2>"  // session ID 

}, 

"response" : { 

"out_parameter1" : "<out_parameter1>",  // success/failure 

} 

} 

], 

"authenticateCaller" : [ // for SMS/email code, voiceprint, verification link, caller details 

{ 

"endpoint" : "<endpoint>", 

"method_type": "GET" or "PUT" or "POST", 

"description" : "<description>", 

"query_strings" : { 

"parameter1" : "<parameter1>", 

"parameter2" : "<parameter2>" 

}, 

"headers" : { 

"Authorization" : "Basic <constant>" or "api-key <constant>" or "Bearer <constant>" or "Bearer <token>", 

"X-API-Key" : "API-Key" // Only applicable for "api_key" auth type. 

}, 

"body" : { 

"in_parameter1" : "<in_parameter1>", // phone number, user ID, etc 

"in_parameter2" : "<in_parameter2>", // session ID 

"in_parameter3" : "<in_parameter3>", // VoicePrint payload or code 

}, 

"response" : { 

"out_parameter1" : "<out_parameter1>",  // success/failure 

} 

} 

], 

"getAvailableAppointmentTimeslots" : [ 

{ 

"endpoint" : "<endpoint>", 

"method_type": "GET" or "PUT" or "POST", 

"description" : "<description>", 

"query_strings" : { 

"parameter1" : "<parameter1>", 

"parameter2" : "<parameter2>" 

}, 

"headers" : { 

"Authorization" : "Basic <constant>" or "api-key <constant>" or "Bearer <constant>" or "Bearer <token>", 

"X-API-Key" : "API-Key" 

}, 

"body" : { 

"start_time" : "YYYY-MM-DDTHH:mm:ss.sssZ" // Timezone as configured on the AA config in ISO 8601 standard  

"end_time" : "YYYY-MM-DDTHH:mm:ss.sssZ" // Timezone as configured on the AA config in ISO 8601 standard 

"in_parameter3" : "<in_parameter3>", // optional parameters like appointment type, doctor name, etc 

"in_parameter4" : "<in_parameter4>", // number of results 

}, 

"response" : { 

"time_slots" : [ 

{ 

"start_time" : "YYYY-MM-DDTHH:mm:ss.sssZ" // Timezone as configured on the AA config in ISO 8601 standard 

"end_time" : "YYYY-MM-DDTHH:mm:ss.sssZ" // Timezone as configured on the AA config in ISO 8601 standard 

"opt_parameter1" : "<opt_parameter1>", // optional parameters like appointment type, doctor name, etc 

}, 

{ 

"start_time" : "YYYY-MM-DDTHH:mm:ss.sssZ" // Timezone as configured on the AA config in ISO 8601 standard 

"end_time" : "YYYY-MM-DDTHH:mm:ss.sssZ" // Timezone as configured on the AA config in ISO 8601 standard 

"opt_parameter1" : "<opt_parameter1>", // optional parameters like appointment type, doctor name, etc 

} 

], 

"out_parameter3" : "<out_parameter3>", 

"out_parameter4" : "<out_parameter4>", 

} 

} 

], 

"bookAppointment" : [ 

{ 

"endpoint" : "<endpoint>", 

"method_type": "GET" or "PUT" or "POST", 

"description" : "<description>", 

"query_strings" : { 

"parameter1" : "<parameter1>", 

"parameter2" : "<parameter2>" 

}, 

"headers" : { 

"Authorization" : "Basic <constant>" or "api-key <constant>" or "Bearer <constant>" or "Bearer <token>", 

"X-API-Key" : "API-Key" 

}, 

"body" : { 

"start_time" : "YYYY-MM-DDTHH:mm:ss.sssZ" // Timezone as configured on the AA config in ISO 8601 standard 

"end_time" : "YYYY-MM-DDTHH:mm:ss.sssZ" // Timezone as configured on the AA config in ISO 8601 standard 

"in_parameter3" : "<in_parameter3>", // optional parameters like appointment type, doctor name, etc 

"in_parameter4" : "<in_parameter4>", // patient id 

}, 

"response" : { 

"out_parameter1" : "<out_parameter1>", // success/failure 

"out_parameter2" : "<out_parameter2>", 

} 

} 

], 

"getUpcomingAppointments" : [ 

{ 

"endpoint" : "<endpoint>", 

"method_type": "GET" or "PUT" or "POST", 

"description" : "<description>", 

"query_strings" : { 

"parameter1" : "<parameter1>", 

"parameter2" : "<parameter2>" 

}, 

"headers" : { 

"Authorization" : "Basic <constant>" or "api-key <constant>" or "Bearer <constant>" or "Bearer <token>", 

"X-API-Key" : "API-Key" 

}, 

"body" : { 

"in_parameter1" : "<in_parameter1>", // phone number, user ID, etc 

"in_parameter2" : "<in_parameter2>" 

}, 

"response" : { 

"time_slots" : [ 

{ 

"start_time" : "YYYY-MM-DDTHH:mm:ss.sssZ" // Timezone as configured on the AA config in ISO 8601 standard 

"end_time" : "YYYY-MM-DDTHH:mm:ss.sssZ" // Timezone as configured on the AA config in ISO 8601 standard 

"opt_parameter1" : "<opt_parameter1>" // optional parameters like appointment type, doctor name, etc 

}, 

{ 

"start_time" : "YYYY-MM-DDTHH:mm:ss.sssZ" // Timezone as configured on the AA config in ISO 8601 standard 

"end_time" : "YYYY-MM-DDTHH:mm:ss.sssZ" // Timezone as configured on the AA config in ISO 8601 standard 

"opt_parameter1" : "<opt_parameter1>" // optional parameters like appointment type, doctor name, etc 

} 

], 

"out_parameter3" : "<out_parameter3>", 

"out_parameter4" : "<out_parameter4>" 

} 

} 

] 

} 
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

