---
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
Module Name: Skype for Business Online
online version: https://docs.microsoft.com/powershell/module/skype/get-csteamsipphonepolicy
applicable: Skype for Business Online
title: Get-CSTeamsIPPhonePolicy
author: tonywoodruff
ms.author: anwoodru
ms.reviewer: kponnus
manager: sandrao
schema: 2.0.0
---

# Get-CsTeamsIPPhonePolicy

## SYNOPSIS

Get-CSTeamsIPPhonePolicy allows IT Admins to view policies for IP Phone experiences in Microsoft Teams 

## SYNTAX

```
Get-CsTeamsIPPhonePolicy [-LocalStore] [[-Identity] <Object>] [-Tenant <Object>] [-Filter <Object>] [-AsJob]
```

## DESCRIPTION

Returns information about the Teams IP Phone Policies configured for use in your organization. Teams IP phone policies enable you to configure the different sign-in experiences based upon the function the device is performing; example: common area phone. 

## EXAMPLES

### Example 1
```powershell
PS C:\> Get-CsTeamsIPPhonePolicy -identity CommonAreaPhone
```

Retrieves the IP Phone Policy with name "CommonAreaPhone"

## PARAMETERS

### -Filter
Enables you to use wildcard characters when indicating the policy (or policies) to be returned. To return a collection of all the policies, use this syntax: -Filter "tag:*".

```yaml
Type: Object
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
Specify the unique name of the TeamsIPPhonePolicy that you would like to retrieve.

```yaml
Type: Object
Parameter Sets: (All)
Aliases:

Required: False
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LocalStore

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
Internal Microsoft use only.

```yaml
Type: Object
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AsJob

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

## INPUTS

### None

## OUTPUTS

### System.Object
## NOTES

## RELATED LINKS
