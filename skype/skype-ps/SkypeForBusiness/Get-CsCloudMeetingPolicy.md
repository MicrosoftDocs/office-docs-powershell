---
applicable: Skype for Business Online
author: tomkau
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
Locale: en-US
manager: bulenteg
Module Name: SkypeForBusiness
ms.author: tomkau
ms.reviewer: williamlooney
online version: https://learn.microsoft.com/powershell/module/skypeforbusiness/get-cscloudmeetingpolicy
schema: 2.0.0
title: Get-CsCloudMeetingPolicy
---

# Get-CsCloudMeetingPolicy

## SYNOPSIS
Gets the policy for Skype Meetings that has been granted for a user.

## SYNTAX

### Identity (Default)
```
Get-CsCloudMeetingPolicy [-Tenant <Guid>] [[-Identity] <XdsIdentity>] [-LocalStore] [<CommonParameters>]
```

### Filter
```
Get-CsCloudMeetingPolicy [-Tenant <Guid>] [-Filter <String>] [-LocalStore] [<CommonParameters>]
```

## DESCRIPTION
The Get-CsCloudMeetingPolicy cmdlet gets the current policy for automatic scheduling of Skype Meeting features and coordination of data.
There are two polices to consider:

- AutoScheduleDisabled:
If true, automatic schedule is disabled for the user.
- AutoScheduleEnabled:
If true, automatic schedule is enabled for the user.

## EXAMPLES

### Example 1 (Skype for Business Online)
```
Get-CsOnlineUser -identity "JaneCl" | fl CloudMeetingPolicy
```

This example shows which policies has been granted to the user by the Set-CsCloudMeetingPolicy and Grant-CsCloudMeetingPolicy cmdlets.
If the policy AutoScheduleEnabled is shown, the user is enabled for the feature.
If the policy is blank or AutoScheduleDisabled, the user is not enabled for the feature.


## PARAMETERS

### -Filter

> Applicable: Skype for Business Online

@{Text=}

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity

> Applicable: Skype for Business Online

Specifies the identity of the hybrid public switched telephone network (PSTN) site.
For example:

`-Identity "SeattlePSTN"`

```yaml
Type: XdsIdentity
Parameter Sets: (All)
Aliases:

Required: False
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LocalStore

> Applicable: Skype for Business Online

Retrieves the information from the local replica of the Central Management store, rather than the Central Management store itself.

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

### -Tenant

> Applicable: Skype for Business Online

Specifies the globally unique identifier (GUID) of your Skype for Business Online tenant account.
For example:

`-Tenant "38aad667-af54-4397-aaa7-e94c79ec2308"`

You can find your tenant ID by running this command:

`Get-CsTenant | Select-Object DisplayName, TenantID`

If you are using a remote session of Windows PowerShell and are connected only to Skype for Business Online, you do not have to include the Tenant parameter.
The tenant ID will be determined by your connection and credentials.
The Tenant parameter is primarily for use in a hybrid deployment.

```yaml
Type: Guid
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS
