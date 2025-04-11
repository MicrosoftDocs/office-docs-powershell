---
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
Module Name: MicrosoftTeams
online version: https://learn.microsoft.com/powershell/module/teams/get-csteamsipphonepolicy
applicable: Microsoft Teams
title: Get-CsTeamsIPPhonePolicy
author: tonywoodruff
ms.author: anwoodru
ms.reviewer: kponnus
manager: sandrao
schema: 2.0.0
---

# Get-CsTeamsIPPhonePolicy

## SYNOPSIS

Get-CsTeamsIPPhonePolicy allows IT Admins to view policies for IP Phone experiences in Microsoft Teams.

## SYNTAX

### Identity (Default)
```
Get-CsTeamsIPPhonePolicy [[-Identity] <String>]
 [-MsftInternalProcessingMode <String>]
 [<CommonParameters>]
```

### Filter
```
Get-CsTeamsIPPhonePolicy [-Filter <String>]
 [-MsftInternalProcessingMode <String>]
 [<CommonParameters>]
```

## DESCRIPTION

Returns information about the Teams IP Phone Policies configured for use in your organization. Teams IP phone policies enable you to configure the different sign-in experiences based upon the function the device is performing; example: common area phone.

## EXAMPLES

### Example 1
```powershell
PS C:\> Get-CsTeamsIPPhonePolicy -identity CommonAreaPhone
```

Retrieves the IP Phone Policy with name "CommonAreaPhone".

## PARAMETERS

### -Identity
Specify the unique name of the TeamsIPPhonePolicy that you would like to retrieve.

```yaml
Type: String
Parameter Sets: Identity
Aliases:

Required: True
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Filter
Enables you to use wildcard characters when indicating the policy (or policies) to be returned. To return a collection of all the policies, use this syntax: -Filter "tag:*".

```yaml
Type: String
Parameter Sets: Filter
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MsftInternalProcessingMode
Internal Microsoft use only.

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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### None

## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS
