---
applicable: Microsoft Teams
author: tomkau
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
Locale: en-US
manager: bulenteg
Module Name: MicrosoftTeams
ms.author: tomkau
ms.reviewer: williamlooney
online version: https://learn.microsoft.com/powershell/module/microsoftteams/new-csautoattendantcallableentity
schema: 2.0.0
title: New-CsAutoAttendantCallableEntity
---

# New-CsAutoAttendantCallableEntity

## SYNOPSIS
The New-CsAutoAttendantCallableEntity cmdlet lets you create a callable entity.

## SYNTAX

```powershell
New-CsAutoAttendantCallableEntity -Identity <String> -Type <User | ApplicationEndpoint | ConfigurationEndpoint | ExternalPstn | SharedVoicemail> [-Tenant <Guid>] [-EnableTranscription] [-EnableSharedVoicemailSystemPromptSuppression] [-CallPriority <Int16>] [-SharedVoicemailHistoryTemplateId <String>] [<CommonParameters>]
```

## DESCRIPTION
The New-CsAutoAttendantCallableEntity cmdlet lets you create a callable entity for use with call transfers from the Auto Attendant service. Callable entities can be created using either Object ID or TEL URIs and can refer to any of the following entities:

- User
- ApplicationEndpoint
- ConfigurationEndpoint
- ExternalPstn
- SharedVoicemail

**NOTE**: In order to setup a shared voicemail, an Office 365 Group that can receive external emails is required.

>[!IMPORTANT]
> Authorized users can't edit call queues with these features enabled:
> - The call exception routing when the destination directly references another another Auto attendant or Call queue
>   - See [Nesting Auto attendants and Call queues](/microsoftteams/plan-auto-attendant-call-queue#nested-auto-attendants-and-call-queues)
> - Call priorities

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

### -CallPriority

The Call Priority of the MenuOption, only applies when the `Type` is `ApplicationEndpoint` or `ConfigurationEndpoint`.

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

Required: False
Position: Named
Default value: 3
Accept pipeline input: False
Accept wildcard characters: False
```

### -EnableSharedVoicemailSystemPromptSuppression

Suppresses the "Please leave a message after the tone" system prompt when transferring to shared voicemail.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

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

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity

The Identity parameter represents the ID of the callable entity; this can be either a Object ID or a TEL URI.

- Only the Object IDs of users that have Enterprise Voice enabled are supported.
- Only PSTN numbers that are acquired and assigned through Skype for Business Online are supported.

```yaml
Type: System.String
Parameter Sets: (All)
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```
### -SharedVoicemailHistoryTemplateId

The SharedVoicemailHistoryTemplateId parameter specifies the ID of the Shared Call History template. When this template is assigned to an Auto Attendant, historical data for shared voicemails is collected and displayed in the Shared Call History within the [Teams Queues app](https://learn.microsoft.com/microsoftteams/manage-queues-app). Removing the SharedVoicemailHistoryTemplateId stops further historical data collection for Queues App. This parameter does not affect the [Shared Voicemail](https://learn.microsoft.com/en-us/microsoftteams/manage-shared-voicemail) experience in Outlook.


```yaml
Type: System.String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Tenant

This parameter is reserved for Microsoft internal use only.

```yaml
Type: System.Guid
Parameter Sets: (All)
Aliases:

Required: False
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

Required: True
Position: Named
Default value: None
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

[Get-CsOnlineUser](https://learn.microsoft.com/powershell/module/microsoftteams/get-csonlineuser)

[Find-CsOnlineApplicationInstance](https://learn.microsoft.com/powershell/module/microsoftteams/find-csonlineapplicationinstance)
