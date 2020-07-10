---
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml 
online version: https://docs.microsoft.com/powershell/module/skype/get-csteamsguestmessagingconfiguration
applicable: Skype for Business Online
title: Get-CsTeamsGuestMessagingConfiguration
schema: 2.0.0
manager: bulenteg
author: tomkau
ms.author: tomkau
ms.reviewer:
---

# Get-CsTeamsGuestMessagingConfiguration

## SYNOPSIS
TeamsGuestMessagingConfiguration determines the messaging settings for the guest users.  This cmdlet returns your organization's current settings.

## SYNTAX

### Identity (Default)
```
Get-CsTeamsGuestMessagingConfiguration [-Tenant <Guid>] [[-Identity] <XdsIdentity>] [-LocalStore]
 [<CommonParameters>]
```

### Filter
```
Get-CsTeamsGuestMessagingConfiguration [-Tenant <Guid>] [-Filter <String>] [-LocalStore]
 [<CommonParameters>]
```

## DESCRIPTION
TeamsGuestMessagingConfiguration determines the messaging settings for the guest users.

## EXAMPLES

### Example 1
```
Get-CsTeamsGuestMessagingConfiguration
```

The command shown in Example 1 returns teams guest messaging configuration information for the current tenant

## PARAMETERS

### -Filter
Enables you to use wildcard characters in order to return a collection of tenant guest messaging configuration settings.
Because each tenant is limited to a single, global collection of guest messaging configuration settings there is no need to use the Filter parameter.

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
Specifies the collection of tenant guest messaging configuration settings to be returned.
Because each tenant is limited to a single, global collection of guest messaging settings there is no need include this parameter when calling the cmdlet.
If you do choose to use the Identity parameter you must also include the Tenant parameter.

```yaml
Type: XdsIdentity
Parameter Sets: (All)
Aliases:

Required: False
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LocalStore
This parameter is not used with Skype for Business Online.

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
This parameter is reserved for internal Microsoft use.

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

## INPUTS

### None


## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS

