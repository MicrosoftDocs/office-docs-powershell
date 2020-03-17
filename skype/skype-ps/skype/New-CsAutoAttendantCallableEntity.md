---
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
online version: https://docs.microsoft.com/powershell/module/skype/new-csautoattendantcallableentity
applicable: Skype for Business Online
title: New-CsAutoAttendantCallableEntity
schema: 2.0.0
manager: bulenteg
author: tomkau
ms.author: tomkau
ms.reviewer:
---

# New-CsAutoAttendantCallableEntity

## SYNOPSIS
The New-CsAutoAttendantCallableEntity cmdlet lets you create a callable entity.

## SYNTAX

```powershell
New-CsAutoAttendantCallableEntity -Identity <String> -Type <User | ApplicationEndpoint> [-Tenant <Guid>] [<CommonParameters>]
```

## DESCRIPTION
The New-CsAutoAttendantCallableEntity cmdlet lets you create a callable entity for use with call transfers from the Auto Attendant service. Callable entities can be created using either Object ID or TEL URIs and can refer to any of the following entities:

- User
- ApplicationEndpoint
- SharedVoicemail

**NOTE**

In order to setup a shared voicemail, an Office 365 Group that can receive external emails is required.

## EXAMPLES

### -------------------------- Example 1 --------------------------
```powershell
$callableEntity = New-CsAutoAttendantCallableEntity -Identity "9bad1a25-3203-5207-b34d-1bd933b867a5" -Type User
```

This example creates a user callable entity.

### -------------------------- Example 2 --------------------------
```powershell
$callableEntity = New-CsAutoAttendantCallableEntity -Identity "tel:+1234567890" -Type ApplicationEndpoint
```

This example creates an application endpoint callable entity.

### -------------------------- Example 3 --------------------------
```powershell
$operatorObjectId = (Get-CsOnlineUser operator@contoso.com).ObjectId
$callableEntity = New-CsAutoAttendantCallableEntity -Identity $operatorObjectId -Type User
```

This example gets a user object using Get-CsOnlineUser cmdlet. We then use the AAD ObjectId of that user object to create a user callable entity.

### -------------------------- Example 4 --------------------------
```powershell
$callableEntityId = (Find-CsOnlineApplicationInstance -SearchQuery "Main Auto Attendant") -MaxResults 1 | Select-Object -Property Id
$callableEntity = New-CsAutoAttendantCallableEntity -Identity $callableEntityId -Type ApplicationEndpoint
```

This example gets an application instance by name using Find-CsOnlineApplicationInstance cmdlet. We then use the AAD ObjectId of that application instance to create an application endpoint callable entity.

### -------------------------- Example 5 --------------------------
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
Applicable: Skype for Business Online

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Type
The Type parameter represents the type of the callable entity, which can be any of the following:

- User
- ApplicationEndpoint


```yaml
Type: Object
Parameter Sets: (All)
Aliases:
Applicable: Skype for Business Online

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
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EnableTranscription
```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: `-Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (https://go.microsoft.com/fwlink/?LinkID=113216).`

## INPUTS

### None


## OUTPUTS

### Microsoft.Rtc.Management.Hosted.OAA.Models.CallableEntity


## NOTES

## RELATED LINKS

[Get-CsOnlineUser](Get-CsOnlineUser.md)

[Find-CsOnlineApplicationInstance](Find-CsOnlineApplicationInstance.md)
