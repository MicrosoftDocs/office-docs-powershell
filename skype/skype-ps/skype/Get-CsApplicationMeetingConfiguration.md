---
external help file: Microsoft.Rtc.Management.dll-help.xml
online version: https://docs.microsoft.com/powershell/module/skype/get-CsApplicationMeetingConfiguration
applicable: Skype for Business Online
title: Get-CsApplicationMeetingConfiguration
schema: 2.0.0
manager: zhengni
author: jackry6350
ms.author: yoren
ms.reviewer:
---

# Get-CsApplicationMeetingConfiguration

## SYNOPSIS

Retrieves information about the application meeting configuration settings configured for the tenant.

## SYNTAX

### Identity

```
Get-CsApplicationMeetingConfiguration [-Identity <XdsIdentity>] 
```

## DESCRIPTION

This cmdlet retrieves information about the application meeting configuration settings configured for the tenant.

## EXAMPLES

### Retrieve application meeting configuration settings for the tenant.

```
PS C:\> Get-CsApplicationMeetingConfiguration
```

The command shown above returns application meeting configuration settings that have been configured for the tenant.


## PARAMETERS

### -Identity

Unique identifier of the application meeting configuration settings to be returned.
Because you can only have a single, global instance of these settings, you do not have to include the Identity when calling the Get-CsApplicationMeetingConfiguration cmdlet.
However, you can use the following syntax to retrieve the global settings: -Identity global.

```yaml
Type: XdsIdentity
Parameter Sets: (All)
Aliases: 

Required: True
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

## INPUTS

### None

## OUTPUTS

### Microsoft.Rtc.Management.WritableConfig.Settings.PlatformApplications.ApplicationMeetingConfiguration

## NOTES

## RELATED LINKS

[Set-CsApplicationMeetingConfiguration](Set-CsApplicationMeetingConfiguration.md)
