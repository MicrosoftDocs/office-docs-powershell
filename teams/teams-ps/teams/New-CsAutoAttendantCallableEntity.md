---
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
online version: https://learn.microsoft.com/powershell/module/teams/new-csautoattendantcallableentity
applicable: Microsoft Teams
title: New-CsAutoAttendantCallableEntity
schema: 2.0.0
manager: bulenteg
author: tomkau
ms.author: tomkau
ms.reviewer: williamlooney
---

# New-CsAutoAttendantCallableEntity

## SYNOPSIS
The New-CsAutoAttendantCallableEntity cmdlet lets you create a callable entity.

## SYNTAX

```powershell
New-CsAutoAttendantCallableEntity -Identity <String> -Type <User | ApplicationEndpoint | ConfigurationEndpoint | ExternalPstn | SharedVoicemail> [-Tenant <Guid>] [-EnableTranscription] [-EnableSharedVoicemailSystemPromptSuppression] [-CallPriority <Int16>] [<CommonParameters>]
```

## DESCRIPTION
The New-CsAutoAttendantCallableEntity cmdlet lets you create a callable entity for use with call transfers from the Auto Attendant service. Callable entities can be created using either Object ID or TEL URIs and can refer to any of the following entities:

- User
- ApplicationEndpoint
- ConfigurationEndpoint
- ExternalPstn
- SharedVoicemail

**NOTE**: In order to setup a shared voicemail, an Office 365 Group that can receive external emails is required.

## EXAMPLES

### Example 1
```powershell
$callableEntity = New-CsAutoAttendantCallableEntity -Identity "9bad1a25-3203-5207-b34d-1bd933b867a5" -Type User
```

This example creates a user callable entity.

### Example 2
```powershell
$callableEntity = New-CsAutoAttendantCallableEntity -Identity "tel:+1234567890" -Type ExternalPSTN
```

This example creates an ExternalPSTN callable entity.

### Example 3
```powershell
$operatorObjectId = (Get-CsOnlineUser operator@contoso.com).ObjectId
$callableEntity = New-CsAutoAttendantCallableEntity -Identity $operatorObjectId -Type User
```

This example gets a user object using Get-CsOnlineUser cmdlet. We then use the Microsoft Entra ObjectId of that user object to create a user callable entity.

### Example 4
```powershell
$callableEntityId = Find-CsOnlineApplicationInstance -SearchQuery "Main Auto Attendant" -MaxResults 1 | Select-Object -Property Id
$callableEntity = New-CsAutoAttendantCallableEntity -Identity $callableEntityId.Id -Type ApplicationEndpoint
```

This example gets an application instance by name using Find-CsOnlineApplicationInstance cmdlet. We then use the Microsoft Entra ObjectId of that application instance to create an application endpoint callable entity.

### Example 5
```powershell
$callableEntityGroup = Find-CsGroup -SearchQuery "Main Auto Attendant" -ExactMatchOnly $true -MailEnabledOnly $true
$callableEntity = New-CsAutoAttendantCallableEntity -Identity $callableEntityGroup -Type SharedVoicemail -EnableTranscription
```

This example gets an Office 365 group by name using Find-CsGroup cmdlet. Then the Guid of that group is used to create a shared voicemail callable entity that supports transcription.

## PARAMETERS

### -Identity
The Identity parameter represents the ID of the callable entity; this can be either a Object ID or a TEL URI.

- Only the Object IDs of users that have Enterprise Voice enabled are supported.
- Only PSTN numbers that are acquired and assigned through Skype for Business Online are supported.

```yaml
Type: System.String
Parameter Sets: (All)
Aliases:
applicable: Microsoft Teams

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Type
The Type parameter represents the type of the callable entity, which can be any of the following:

- User
- ApplicationEndpoint (when transferring to a Resource Account)
- ConfigurationEndpoint (when transferring directly to a nested Auto Attendant or Call Queue)
- ExternalPstn
- SharedVoicemail

```yaml
Type: Object
Parameter Sets: (All)
Aliases:
applicable: Microsoft Teams

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Tenant

```yaml
Type: System.Guid
Parameter Sets: (All)
Aliases:
applicable: Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EnableTranscription
Enables the email transcription of voicemail, this is only supported with shared voicemail callable entities.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
applicable: Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EnableSharedVoicemailSystemPromptSuppression
Suppresses the "Please leave a message after the tone" system prompt when transferring to shared voicemail.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
applicable: Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CallPriority --- Private Preview customers only
The Call Priority of the MenuOption, only applies when the `Type` is `ApplicationEndpoint`.

PARAMVALUE: 1 | 2 | 3 | 4 | 5

1 = Very High
2 = High
3 = Normal / Default
4 = Low
5 = Very Low

```yaml
Type: Int16
Parameter Sets: (All)
Aliases:
applicable: Microsoft Teams

Required: False
Position: Named
Default value: 3
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### None

## OUTPUTS

### Microsoft.Rtc.Management.Hosted.OAA.Models.CallableEntity

## NOTES

## RELATED LINKS

[Get-CsOnlineUser](https://learn.microsoft.com/powershell/module/teams/get-csonlineuser)

[Find-CsOnlineApplicationInstance](https://learn.microsoft.com/powershell/module/teams/find-csonlineapplicationinstance)
